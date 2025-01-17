import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Arrow from "./svg/Arrow";
import ArticlePreview from "./ArticlePreview";
import { Container } from "react-bootstrap";

const NewsBlock = () => {
  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.resolvedLanguage;

  let jsonData;
  if (selectedLanguage === "RU") {
    jsonData = require("../data/articlesRu.json");
  } else if (selectedLanguage === "EN") {
    jsonData = require("../data/articlesEn.json");
  }
  const [activeNews, setActiveNews] = useState(jsonData[0]?.id);

  return (
    <section className="sec-15 mb-6">
      <Container>
        <Row className="justify-content-between">
          <Col xs={12} lg={6}>
            <h3>{t("Новости")}</h3>
            <ul>
              {jsonData?.length > 0 &&
                jsonData.map((obj) => {
                  return (
                    <li key={obj.id}>
                      <Link
                        to={"/article/" + obj.id}
                        className={activeNews === obj.id ? "active" : ""}
                        onMouseEnter={() => setActiveNews(obj.id)}
                      >
                        <h4>{obj.title}</h4>
                        <Arrow className="icon" />
                      </Link>
                    </li>
                  );
                })}
            </ul>
            {/* <ul>
            <li>
              <Link to='/' className={(activeNews === 0)?'active':''} onMouseEnter={()=>setActiveNews(0)}>
                <h4>GitHub сокращает 10% штата</h4>
                <Arrow className='icon'/>
              </Link>
            </li>
            <li>
              <Link to='/' className={(activeNews === 1)?'active':''} onMouseEnter={()=>setActiveNews(1)}>
                <h4>Процесс развития сотрудников – системный путь к совершенству</h4>
                <Arrow className='icon'/>
              </Link>
            </li>
            <li>
              <Link to='/' className={(activeNews === 2)?'active':''} onMouseEnter={()=>setActiveNews(2)}>
                <h4>5 неочевидных возможностей FastAPI</h4>
                <Arrow className='icon'/>
              </Link>
            </li>
          </ul> */}
            <Link to="/article" className="btn-3 mt-4 mt-md-5">
              {t("Перейти в блог")}
            </Link>
          </Col>
          <Col xs={12} lg={6} xxl={5} className="d-none d-lg-block">
            <ArticlePreview data={jsonData[activeNews]} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsBlock;
