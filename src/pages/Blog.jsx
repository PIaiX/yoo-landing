import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import ArticleMidi from "../components/ArticleMidi";
import { HiOutlineSearch, HiOutlineFilter } from "react-icons/hi";

const Blog = () => {
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.resolvedLanguage;

  const [jsonData, setJsonData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("date");
  const articlesPerPage = 6;

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
      setJsonData(data);
      setFilteredData(data);
    } catch (error) {
      console.error("Ошибка загрузки статей:", error);
      setJsonData([]);
      setFilteredData([]);
    }
  }, [selectedLanguage]);

  // Собираем все уникальные теги из всех статей
  const allTags = React.useMemo(() => {
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

    // Поиск по заголовку и контенту
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(term) ||
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

    // Сортировка
    if (sortBy === "date") {
      filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === "title") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "views") {
      filtered.sort((a, b) => (b.views || 0) - (a.views || 0));
    }

    setFilteredData(filtered);
    setCurrentPage(1);
  }, [searchTerm, selectedTag, jsonData, sortBy]);

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
 
          {/* Сайдбар с тегами и подпиской */}
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
                    <HiOutlineFilter className="me-2 text-muted" />
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
                  <div className="text-center text-muted mt-4">
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
                                {article.title.substring(0, 40)}…
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
                    href="/#tarif"
                    className="btn btn-light w-100 py-2 rounded-pill fw-bold"
                  >
                    {t("Узнать стоимость")}
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
