import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { HiOutlineEye, HiOutlineCalendar } from 'react-icons/hi';

const ArticleMidi = memo(({ data }) => {
  const { t } = useTranslation();
  
  // Обрезаем HTML-контент для превью
  const stripHtml = (html) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const plainText = data.content ? stripHtml(data.content) : (data.text || '');
  const previewText = plainText.substring(0, 200) + (plainText.length > 200 ? '…' : '');

  // Берем первые 2 ключевых слова для тегов
  const displayTags = data.keywords ? data.keywords.slice(0, 2) : [];

  return (
    <article className="midi article-card">
      <div className="article-card-inner d-flex flex-column flex-md-row">
        {/* Изображение */}
        <div className="article-image-wrapper">
          <Link to={`/article/${data.id}`}>
            <img 
              src={data.imgLink} 
              alt={data.title} 
              className="article-image"
              loading="lazy"
            />
          </Link>
        </div>

        {/* Контент */}
        <div className="article-content-wrapper flex-grow-1">
          <div className="article-meta d-flex align-items-center gap-3 mb-2">
            <span className="meta-item d-flex align-items-center text-muted small">
              <HiOutlineCalendar className="me-1" />
              {data.date}
            </span>
            {data.views && (
              <span className="meta-item d-flex align-items-center text-muted small">
                <HiOutlineEye className="me-1" />
                {data.views} {t('просмотров')}
              </span>
            )}
            {data.readTime && (
              <span className="meta-item text-muted small">
                {data.readTime}
              </span>
            )}
          </div>

          <h4 className="article-title mb-2">
            <Link to={`/article/${data.id}`} className="text-decoration-none text-dark">
              {data.title}
            </Link>
          </h4>

          <p className="article-preview text-muted mb-3">
            {previewText}
          </p>

          {/* Теги */}
          {displayTags.length > 0 && (
            <div className="article-tags mb-3 d-flex gap-2">
              {displayTags.map(tag => (
                <span key={tag} className="tag-pill">
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Кнопка и дополнительная информация */}
          <div className="d-flex justify-content-between align-items-center">
            <Link to={`/article/${data.id}`} className="btn-3">
              {t('Читать статью')} →
            </Link>
            
            {data.author && (
              <div className="author-info d-flex align-items-center">
                {data.authorAvatar && (
                  <img 
                    src={data.authorAvatar} 
                    alt={data.author}
                    className="author-avatar rounded-circle me-2"
                    width="24"
                    height="24"
                  />
                )}
                <span className="author-name small text-muted">{data.author}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
});

export default ArticleMidi;