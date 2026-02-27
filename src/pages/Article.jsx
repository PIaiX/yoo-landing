import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  HiOutlineEye,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineArrowLeft,
} from "react-icons/hi2";

const Article = () => {
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.resolvedLanguage;
  let { articleId } = useParams();
  const navigate = useNavigate();

  // Загружаем данные статей
  let jsonData;
  try {
    if (selectedLanguage === "RU") {
      jsonData = require("../data/articlesRu.json");
    } else if (selectedLanguage === "EN") {
      jsonData = require("../data/articlesEn.json");
    } else {
      jsonData = require("../data/articlesRu.json");
    }
  } catch (error) {
    console.error("Ошибка загрузки статей:", error);
    jsonData = [];
  }

  const articleIdNum = articleId;
  const thisArticle = jsonData?.find((e) => e.id === articleIdNum) || false;

  // Если статья не найдена
  if (!thisArticle) {
    return (
      <main>
        <Container>
          <div className="text-center py-5">
            <h1>Статья не найдена</h1>
            <p>Запрошенная статья не существует или была удалена.</p>
            <button
              onClick={() => navigate("/article")}
              className="btn-primary"
            >
              Вернуться к списку статей
            </button>
          </div>
        </Container>
      </main>
    );
  }

  // Фильтруем похожие статьи (исключаем текущую, берем 3 случайные или следующие)
  const relatedArticles = jsonData
    .filter((article) => article.id !== articleIdNum)
    .slice(0, 3);

  // Структурированные данные для статьи (JSON-LD)
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: thisArticle.title,
    description: thisArticle.description,
    image: thisArticle.imgLink,
    datePublished: thisArticle.date,
    dateModified: thisArticle.date,
    author: {
      "@type": "Organization",
      name: "YooApp",
      url: "https://yooapp.ru",
    },
    publisher: {
      "@type": "Organization",
      name: "YooApp",
      logo: {
        "@type": "ImageObject",
        url: "https://yooapp.ru/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://yooapp.ru/article/${articleId}`,
    },
    keywords: thisArticle.keywords
      ? thisArticle.keywords.join(", ")
      : "доставка еды, ресторанный бизнес, YooApp",
  };

  return (
    <main>
      <Helmet>
        <title>{thisArticle.title} | YooApp Блог</title>
        <meta name="description" content={thisArticle.description} />
        <meta
          name="keywords"
          content={
            thisArticle.keywords
              ? thisArticle.keywords.join(", ")
              : "доставка еды, ресторанный бизнес, YooApp"
          }
        />

        {/* Open Graph мета-теги для соцсетей */}
        <meta property="og:title" content={thisArticle.title} />
        <meta property="og:description" content={thisArticle.description} />
        <meta property="og:image" content={thisArticle.imgLink} />
        <meta
          property="og:url"
          content={`https://yooapp.ru/article/${articleId}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="YooApp" />

        {/* Twitter Card мета-теги */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={thisArticle.title} />
        <meta name="twitter:description" content={thisArticle.description} />
        <meta name="twitter:image" content={thisArticle.imgLink} />

        {/* Структурированные данные JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData)}
        </script>

        {/* Хлебные крошки (BreadcrumbList) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Главная",
                item: "https://yooapp.ru/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Блог",
                item: "https://yooapp.ru/article",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: thisArticle.title,
                item: `https://yooapp.ru/article/${articleId}`,
              },
            ],
          })}
        </script>

        <link rel="canonical" href={`https://yooapp.ru/article/${articleId}`} />
      </Helmet>

      <Container>
        {/* Хлебные крошки */}
        <nav className="breadcrumbs mt-3" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Главная</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/article">Блог</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {thisArticle.title.substring(0, 50)}...
            </li>
          </ol>
        </nav>

        {/* Кнопка "Назад" для мобильных */}
        <button
          className="btn-back d-flex align-items-center mb-3 d-lg-none"
          onClick={() => navigate("/article")}
        >
          <HiOutlineArrowLeft className="me-2" /> Вернуться к списку
        </button>

        <article className="page-article mb-5">
          {/* Изображение статьи с подписью */}
          <figure className="article-figure">
            <img
              src={thisArticle.coverLink || thisArticle.imgLink}
              alt={thisArticle.title}
              className="img-fluid"
              loading="lazy"
            />
            {thisArticle.imgCaption && (
              <figcaption className="text-muted mt-2 fs-08">
                {thisArticle.imgCaption}
              </figcaption>
            )}
          </figure>

          <Row>
            <Col lg={9}>
              {/* Мета-информация статьи */}
              <div className="d-flex align-items-center mb-4 article-meta">
                <div className="d-flex align-items-center me-4">
                  <HiOutlineClock className="fs-15 me-2" />
                  <span>{thisArticle.readTime || t("5 мин")}</span>
                </div>
                <div className="d-flex align-items-center me-4">
                  <HiOutlineEye className="fs-15 me-2" />
                  <span>{thisArticle.views || "128"}</span>
                </div>
                <div className="d-flex align-items-center">
                  <HiOutlineCalendar className="fs-15 me-2" />
                  <span>{thisArticle.date}</span>
                </div>
              </div>

              {/* Заголовок */}
              <h1 className="article-title">{thisArticle.title}</h1>

              {/* Автор (если есть) */}
              {thisArticle.author && (
                <div className="article-author d-flex align-items-center mb-4">
                  {thisArticle.authorAvatar && (
                    <img
                      src={thisArticle.authorAvatar}
                      alt={thisArticle.author}
                      className="author-avatar rounded-circle me-2"
                      width="32"
                      height="32"
                    />
                  )}
                  <span className="text-muted">
                    {t("Автор")}: {thisArticle.author}
                  </span>
                </div>
              )}

              {/* HTML-контент статьи */}
              <div
                className="article-content"
                dangerouslySetInnerHTML={{
                  __html: thisArticle.content || thisArticle.text,
                }}
              />

              {/* Ключевые слова (теги) */}
              {thisArticle.keywords && thisArticle.keywords.length > 0 && (
                <div className="article-tags mt-5">
                  <h6 className="mb-3">{t("Теги")}:</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {thisArticle.keywords.map((keyword, index) => (
                      <Link
                        key={index}
                        to={`/article?tag=${encodeURIComponent(keyword)}`}
                        className="tag-badge"
                      >
                        #{keyword}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Кнопки шаринга */}
              <div className="article-share mt-5">
                <h6 className="mb-3">{t("Поделиться статьей")}:</h6>
                <div className="d-flex gap-2">
                  <a
                    href={`https://vk.com/share.php?url=https://yooapp.ru/article/${articleId}&title=${encodeURIComponent(
                      thisArticle.title,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn vk"
                    aria-label="Поделиться ВКонтакте"
                  >
                    ВК
                  </a>
                  <a
                    href={`https://t.me/share/url?url=https://yooapp.ru/article/${articleId}&text=${encodeURIComponent(
                      thisArticle.title,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn telegram"
                    aria-label="Поделиться в Telegram"
                  >
                    TG
                  </a>
                </div>
              </div>
            </Col>

            <Col lg={3}>
              {/* Сайдбар с похожими статьями */}
              <aside className="article-sidebar">
                <h6 className="mb-4">{t("Вам может быть интересно")}</h6>
                {relatedArticles.length > 0 ? (
                  <ul className="related-articles-list">
                    {relatedArticles.map((obj) => (
                      <li className="mb-4">
                        <Link
                          to={"/article/" + obj.id}
                          className="related-article-link"
                        >
                          {obj.imgLink && (
                            <img
                              src={obj.imgLink}
                              alt={obj.title}
                              className="related-article-img mb-2"
                              loading="lazy"
                            />
                          )}
                          <p className="fw-6 mb-1">{obj.title}</p>
                          <p className="color-1 fs-08">{obj.date}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted">Нет похожих статей</p>
                )}

                {/* CTA блок */}
                <div className="sidebar-cta mt-5 p-3 bg-light rounded">
                  <h6 className="mb-3 text-center">{t("Запустите доставку с YooApp")}</h6>
                  <p className="fs-09 mb-3 text-center">
                    {t("Получите бесплатную консультацию и расчет стоимости")}
                  </p>
                  <Link to="/#tarif" className="btn-primary w-100 text-center">
                    {t("Узнать стоимость")}
                  </Link>
                </div>
              </aside>
            </Col>
          </Row>
        </article>
      </Container>
    </main>
  );
};

export default Article;
