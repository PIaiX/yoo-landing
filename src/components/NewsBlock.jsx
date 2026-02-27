import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useTranslation } from "react-i18next";
import { HiOutlineCalendar } from "react-icons/hi";
import { Link } from "react-router-dom";
import Arrow from "./svg/Arrow";

const NewsBlock = () => {
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.resolvedLanguage;
  const [jsonData, setJsonData] = useState([]);
  const [activeNews, setActiveNews] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Функция для парсинга даты в формате DD.MM.YYYY
  const parseDate = (dateString) => {
    if (!dateString) return new Date(0);
    
    // Проверяем, если дата уже в формате ISO или другом стандартном формате
    if (dateString.includes('-')) {
      return new Date(dateString);
    }
    
    // Парсим формат DD.MM.YYYY
    const parts = dateString.split('.');
    if (parts.length === 3) {
      const [day, month, year] = parts;
      // Внимание: month - 1, так как в JS месяцы от 0 до 11
      return new Date(year, month - 1, day);
    }
    
    return new Date(0);
  };

  // Загрузка данных
  useEffect(() => {
    try {
      let data;
      if (selectedLanguage === "RU") {
        data = require("../data/articlesRu.json");
      } else if (selectedLanguage === "EN") {
        data = require("../data/articlesEn.json");
      } else {
        data = require("../data/articlesRu.json");
      }

      // Проверяем, что data - массив и не пустой
      if (Array.isArray(data) && data.length > 0) {
        // Сортируем все статьи по дате (новые сверху) с помощью parseDate
        const sortedData = [...data].sort((a, b) => {
          const dateA = parseDate(a.date);
          const dateB = parseDate(b.date);
          return dateB - dateA; // Сортировка по убыванию (новые сверху)
        });
        
        // Берем только последние 3 статьи для блока новостей
        const latestData = sortedData.slice(0, 3);

        setJsonData(latestData);
        if (latestData.length > 0 && latestData[0]?.id) {
          setActiveNews(latestData[0].id);
        }
      } else {
        setJsonData([]);
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Ошибка загрузки статей:", error);
      setJsonData([]);
      setIsLoading(false);
    }
  }, [selectedLanguage]);

  // Функция для получения превью текста (без HTML)
  const getPreviewText = (article) => {
    if (!article) return "";

    if (article.content) {
      try {
        const tmp = document.createElement("div");
        tmp.innerHTML = article.content;
        return tmp.textContent || tmp.innerText || "";
      } catch (e) {
        return article.content.substring(0, 100) || "";
      }
    }
    return article.text || "";
  };

  // Функция для безопасного получения описания
  const getDescription = (article) => {
    if (!article) return "";
    if (article.description) return article.description;

    // Если нет description, используем превью текста
    const previewText = getPreviewText(article);
    return (
      previewText.substring(0, 100) + (previewText.length > 100 ? "..." : "")
    );
  };

  if (isLoading) {
    return null;
  }

  if (!jsonData || jsonData.length === 0) {
    return null; // Не показываем блок, если нет новостей
  }

  return (
    <section className="mb-6">
      <Container>
        <Row className="g-5 align-items-start">
          <Col xs={12} lg={12}>
            <div className="news-header mb-4">
              <h3 className="display-6 fw-bold mb-2">
                {t("Последние новости")}
              </h3>
              <p className="text-muted">
                {t("Будьте в курсе последних событий и обновлений")}
              </p>
            </div>

            <ul className="news-list">
              {jsonData.map((article, index) => {
                if (!article) return null;

                return (
                  <li key={article.id || index} className="news-item">
                    <Link
                      to={article.id ? "/article/" + article.id : "#"}
                      className={`news-link ${
                        activeNews === article.id ? "active" : ""
                      }`}
                      onMouseEnter={() =>
                        article.id && setActiveNews(article.id)
                      }
                    >
                      <div className="news-content">
                        <div className="news-meta d-flex align-items-center gap-3 mb-2">
                          <span className="meta-date d-flex align-items-center small text-muted">
                            <HiOutlineCalendar className="me-1" />
                            {article.date || t("Дата неизвестна")}
                          </span>
                          {article.readTime && (
                            <span className="meta-read small text-muted">
                              {article.readTime}
                            </span>
                          )}
                        </div>
                        <h4 className="news-title mb-2">
                          {article.title || t("Без названия")}
                        </h4>
                        <p className="news-description text-muted small">
                          {getDescription(article).substring(0, 80)}
                          {getDescription(article).length > 80 ? "..." : ""}
                        </p>
                      </div>
                      <div className="news-arrow">
                        <Arrow className="icon" />
                      </div>
                    </Link>
                    {index < jsonData.length - 1 && (
                      <div className="news-divider" />
                    )}
                  </li>
                );
              })}
            </ul>
            <Link to="/article" className="btn-3 mt-2">
              {t("Перейти в блог")}
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsBlock;