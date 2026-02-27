import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import ArticleMidi from "../components/ArticleMidi";
import { HiOutlineSearch } from "react-icons/hi";

const Blog = () => {
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.resolvedLanguage;
  const referrer = document.referrer;
  const [jsonData, setJsonData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("date");
  const articlesPerPage = 6;

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
      
      // Сортируем данные сразу после загрузки по дате (новые сверху)
      const sortedData = [...data].sort((a, b) => {
        const dateA = parseDate(a.date);
        const dateB = parseDate(b.date);
        return dateB - dateA; // Сортировка по убыванию (новые сверху)
      });
      
      setJsonData(sortedData);
      setFilteredData(sortedData);
    } catch (error) {
      console.error("Ошибка загрузки статей:", error);
      setJsonData([]);
      setFilteredData([]);
    }
  }, [selectedLanguage]);

  // Собираем все уникальные теги из всех статей
  const allTags = useMemo(() => {
    const tags = new Set();
    jsonData.forEach((article) => {
      if (article.keywords && Array.isArray(article.keywords)) {
        article.keywords.forEach((keyword) => tags.add(keyword));
      }
    });
    return ["all", ...Array.from(tags)];
  }, [jsonData]);

  // Фильтрация и поиск
  useEffect(() => {
    let filtered = [...jsonData];

    // Поиск по заголовку, описанию и контенту
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (article) =>
          (article.title && article.title.toLowerCase().includes(term)) ||
          (article.description &&
            article.description.toLowerCase().includes(term)) ||
          (article.content && article.content.toLowerCase().includes(term)),
      );
    }

    // Фильтрация по тегу
    if (selectedTag !== "all") {
      filtered = filtered.filter(
        (article) => article.keywords && article.keywords.includes(selectedTag),
      );
    }

    // Применяем сортировку
    filtered = sortArticles(filtered, sortBy);

    setFilteredData(filtered);
    setCurrentPage(1);
  }, [searchTerm, selectedTag, jsonData, sortBy]);

  // Функция сортировки статей
  const sortArticles = (articles, sortType) => {
    const sorted = [...articles];
    
    switch (sortType) {
      case "date":
        sorted.sort((a, b) => {
          const dateA = parseDate(a.date);
          const dateB = parseDate(b.date);
          return dateB - dateA; // Сортировка по убыванию (новые сверху)
        });
        break;
        
      case "title":
        sorted.sort((a, b) => {
          if (!a.title) return 1;
          if (!b.title) return -1;
          return a.title.localeCompare(b.title);
        });
        break;
        
      case "views":
        sorted.sort((a, b) => (b.views || 0) - (a.views || 0));
        break;
        
      default:
        break;
    }
    
    return sorted;
  };

  // Пагинация
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredData.slice(
    indexOfFirstArticle,
    indexOfLastArticle,
  );
  const totalPages = Math.ceil(filteredData.length / articlesPerPage);

  // Структурированные данные для списка статей (JSON-LD)
  const listStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Блог YooApp",
    description: "Статьи о доставке еды, ресторанном бизнесе и технологиях",
    publisher: {
      "@type": "Organization",
      name: "YooApp",
    },
    blogPost: jsonData.slice(0, 10).map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      description: article.description,
      image: article.imgLink,
      datePublished: article.date,
      url: `https://yooapp.ru/article/${article.id}`,
    })),
  };

  return (
    <main>
      <Helmet>
        <title>
          {t("Блог о доставке еды и ресторанных технологиях | YooApp")}
        </title>
        <meta
          name="description"
          content={t(
            "Экспертные статьи о разработке приложений для доставки, автоматизации ресторанов, интеграции с iiko и r_keeper, увеличении прибыли и лояльности клиентов. Читайте блог YooApp.",
          )}
        />
        <meta
          name="keywords"
          content="блог доставка еды, статьи ресторанный бизнес, автоматизация ресторана, приложение для доставки, YooApp блог"
        />

        <meta
          property="og:title"
          content={t(
            "Блог YooApp – статьи о доставке и ресторанных технологиях",
          )}
        />
        <meta
          property="og:description"
          content={t(
            "Экспертные материалы для владельцев ресторанов и служб доставки",
          )}
        />
        <meta property="og:image" content="/images/og-blog.jpg" />
        <meta property="og:url" content="https://yooapp.ru/article" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("Блог YooApp")} />
        <meta
          name="twitter:description"
          content={t("Экспертные статьи о ресторанном бизнесе")}
        />
        <meta name="twitter:image" content="/images/og-blog.jpg" />

        <script type="application/ld+json">
          {JSON.stringify(listStructuredData)}
        </script>

        <link rel="canonical" href="https://yooapp.ru/article" />
      </Helmet>

      <Container>
        <section className="page-articles mb-5">
          <Row className="gx-5 mt-5">
            <Col lg={8}>
              {/* Поиск и фильтры */}
              <Row className="mb-5 g-3">
                <Col md={5}>
                  <div className="search-box position-relative">
                    <HiOutlineSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
                    <Form.Control
                      type="text"
                      placeholder={t("Поиск по статьям...")}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="ps-5 py-2 rounded-pill border-0 shadow-sm"
                    />
                  </div>
                </Col>
                <Col md={4}>
                  <div className="filter-box d-flex align-items-center">
                    <Form.Select
                      value={selectedTag}
                      onChange={(e) => setSelectedTag(e.target.value)}
                      className="py-2 rounded-pill border-0 shadow-sm"
                    >
                      <option value="all">{t("Все теги")}</option>
                      {allTags
                        .filter((tag) => tag !== "all")
                        .map((tag) => (
                          <option key={tag} value={tag}>
                            #{tag}
                          </option>
                        ))}
                    </Form.Select>
                  </div>
                </Col>
                <Col md={3}>
                  <Form.Select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="py-2 rounded-pill border-0 shadow-sm"
                  >
                    <option value="date">{t("Сначала новые")}</option>
                    <option value="title">{t("По алфавиту")}</option>
                    <option value="views">{t("По популярности")}</option>
                  </Form.Select>
                </Col>
              </Row>

              {/* Результаты поиска */}
              {filteredData.length === 0 ? (
                <div className="text-center py-5">
                  <h3 className="mb-3 text-center">{t("Ничего не найдено")}</h3>
                  <p className="text-muted text-center mb-4">
                    {t("Попробуйте изменить параметры поиска")}
                  </p>
                  <button
                    className="btn-primary m-auto px-4 py-2 rounded-pill"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedTag("all");
                      setSortBy("date");
                    }}
                  >
                    {t("Сбросить фильтры")}
                  </button>
                </div>
              ) : (
                <>
                  {/* Список статей */}
                  <ul className="page-articles-list">
                    {currentArticles.map((obj) => (
                      <li key={obj.id} className="mb-5">
                        <ArticleMidi data={obj} />
                      </li>
                    ))}
                  </ul>

                  {/* Пагинация */}
                  {totalPages > 1 && (
                    <nav className="pagination-wrapper d-flex justify-content-center mt-5">
                      <ul className="pagination">
                        <li
                          className={`page-item ${
                            currentPage === 1 ? "disabled" : ""
                          }`}
                        >
                          <button
                            className="page-link"
                            onClick={() =>
                              setCurrentPage((prev) => Math.max(prev - 1, 1))
                            }
                          >
                            ←
                          </button>
                        </li>

                        {[...Array(totalPages)].map((_, index) => (
                          <li
                            key={index}
                            className={`page-item ${
                              currentPage === index + 1 ? "active" : ""
                            }`}
                          >
                            <button
                              className="page-link"
                              onClick={() => setCurrentPage(index + 1)}
                            >
                              {index + 1}
                            </button>
                          </li>
                        ))}

                        <li
                          className={`page-item ${
                            currentPage === totalPages ? "disabled" : ""
                          }`}
                        >
                          <button
                            className="page-link"
                            onClick={() =>
                              setCurrentPage((prev) =>
                                Math.min(prev + 1, totalPages),
                              )
                            }
                          >
                            →
                          </button>
                        </li>
                      </ul>
                    </nav>
                  )}

                  {/* Информация о количестве статей */}
                  <div className="text-center text-muted fs-08 mt-4">
                    {t("Показано")} {indexOfFirstArticle + 1}-
                    {Math.min(indexOfLastArticle, filteredData.length)}{" "}
                    {t("из")} {filteredData.length} {t("статей")}
                  </div>
                </>
              )}
            </Col>
            <Col lg={4}>
              <div className="sidebar-sticky">
                {/* Популярные теги */}
                <div className="sidebar-widget mb-5 p-4 bg-light rounded-4">
                  <h5 className="mb-4">{t("Популярные теги")}</h5>
                  <div className="tags-cloud d-flex flex-wrap gap-2">
                    {allTags
                      .filter((tag) => tag !== "all")
                      .slice(0, 15)
                      .map((tag) => (
                        <button
                          key={tag}
                          className={`tag-badge ${
                            selectedTag === tag ? "active" : ""
                          }`}
                          onClick={() =>
                            setSelectedTag(tag === selectedTag ? "all" : tag)
                          }
                        >
                          #{tag}
                        </button>
                      ))}
                  </div>
                </div>

                {/* Популярные статьи */}
                <div className="sidebar-widget mb-5 p-4 bg-light rounded-4">
                  <h5 className="mb-4">{t("Популярные статьи")}</h5>
                  <ul className="popular-list list-unstyled">
                    {jsonData
                      .sort((a, b) => (b.views || 0) - (a.views || 0))
                      .slice(0, 3)
                      .map((article) => (
                        <li key={article.id} className="mb-3">
                          <a
                            href={`/article/${article.id}`}
                            className="popular-link d-flex align-items-center"
                          >
                            <img
                              src={article.imgLink}
                              alt={article.title}
                              className="popular-img rounded me-3"
                              width="60"
                              height="60"
                              style={{ objectFit: "cover" }}
                            />
                            <div>
                              <h6 className="mb-1">
                                {article.title.length > 40 
                                  ? article.title.substring(0, 40) + "…" 
                                  : article.title}
                              </h6>
                              <small className="text-muted">
                                {article.views || 0} {t("просмотров")}
                              </small>
                            </div>
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>

                {/* CTA блок */}
                <div className="sidebar-widget p-4 bg-primary text-white rounded-4">
                  <h5 className="mb-3">{t("Запустите доставку с YooApp")}</h5>
                  <p className="mb-4 small">
                    {t(
                      "Получите бесплатную консультацию и расчет стоимости для вашего бизнеса",
                    )}
                  </p>
                  <a
                    type="button"
                    href={
                      "https://lk.yooapp.ru/reg" +
                      (referrer ? "?source=" + new URL(referrer).hostname : "")
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-light w-100"
                  >
                    <svg
                      className="fs-12"
                      width="1em"
                      height="1em"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.25792 19.1667C9.16129 19.1666 9.06542 19.1496 8.97459 19.1167C8.614 18.9847 8.39031 18.6233 8.43292 18.2417L9.07459 12.3333H4.16626C3.85775 12.3338 3.57422 12.1638 3.42931 11.8914C3.28441 11.6191 3.30182 11.2889 3.47459 11.0333L10.0496 1.20001C10.2635 0.883398 10.6654 0.752872 11.0246 0.883347C11.3692 1.01127 11.5892 1.34984 11.5663 1.71668L10.9246 7.66668H15.8329C16.1414 7.66622 16.425 7.83623 16.5699 8.10859C16.7148 8.38095 16.6974 8.71108 16.5246 8.96668L9.94959 18.8C9.79436 19.0297 9.53511 19.1671 9.25792 19.1667Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="ms-2">{t("Попробовать бесплатно")}</span>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
};

export default Blog;