import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { HiOutlineEye, HiOutlineCalendar, HiOutlineClock } from "react-icons/hi2";
import FolderSvg from "./svg/FolderSvg";
import { Link } from "react-router-dom";

const ArticlePreview = memo(({ data }) => {
  const { t } = useTranslation();
  
  // Защита от отсутствия данных
  if (!data) {
    return (
      <article className="preview">
        <p className="text-muted">Статья не доступна</p>
      </article>
    );
  }

  // Функция для получения превью текста
  const getPreviewText = () => {
    if (data.description) {
      return data.description;
    }
    if (data.content) {
      try {
        const tmp = document.createElement('div');
        tmp.innerHTML = data.content;
        const text = tmp.textContent || tmp.innerText || '';
        return text.substring(0, 100) + (text.length > 100 ? '...' : '');
      } catch (e) {
        return data.content?.substring(0, 100) || '';
      }
    }
    return data.text?.substring(0, 100) || t('Читайте подробнее в статье');
  };

  // Получаем теги из keywords или создаем на основе категории
  const getTags = () => {
    if (data.keywords && Array.isArray(data.keywords) && data.keywords.length > 0) {
      return data.keywords.slice(0, 2);
    }
    
    // Если нет keywords, пытаемся определить по контенту
    const text = (data.title + ' ' + (data.description || '')).toLowerCase();
    const tags = [];
    
    if (text.includes('iiko') || text.includes('интеграц')) tags.push('Интеграция');
    if (text.includes('доставк') || text.includes('delivery')) tags.push('Доставка');
    if (text.includes('приложен') || text.includes('app')) tags.push('Мобильное приложение');
    if (text.includes('qr') || text.includes('меню')) tags.push('QR-меню');
    if (text.includes('лояльн') || text.includes('бонус')) tags.push('Лояльность');
    if (text.includes('аналит') || text.includes('статистик')) tags.push('Аналитика');
    
    return tags.length > 0 ? tags : ['Новости'];
  };

  const tags = getTags();

  return (
    <article className="preview">
      <Link to={data.id ? "/article/" + data.id : "#"}>
        <FolderSvg className="preview-bg" />
        {data.imgLink ? (
          <img 
            src={data.imgLink} 
            alt={data.title || 'Статья'} 
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/images/placeholder.jpg';
            }}
          />
        ) : (
          <div className="preview-placeholder">
            <span>{data.title?.charAt(0) || 'Y'}</span>
          </div>
        )}
        <div className="d-flex align-items-center mt-1 preview-meta">
          <div className="d-flex align-items-center">
            <HiOutlineClock className="fs-15 me-2" />
            <span>{data.readTime || t('5 мин')}</span>
          </div>
          <div className="d-flex align-items-center ms-4">
            <HiOutlineEye className="fs-15 me-2" />
            <span>{data.views || '128'}</span>
          </div>
          <div className="d-flex align-items-center ms-4">
            <HiOutlineCalendar className="fs-15 me-2" />
            <span>{data.date || t('2026')}</span>
          </div>
        </div>
        <p className="text">
          {data.title && <strong>{data.title.substring(0, 50)}</strong>}
          {data.title && ' – '}
          {getPreviewText()}
        </p>
        <ul className="markers">
          {tags.map((tag, index) => (
            <li key={index} className={`tag-${index}`}>
              #{tag}
            </li>
          ))}
        </ul>
      </Link>
    </article>
  );
});

export default ArticlePreview;