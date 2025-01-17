import { useTranslation } from "react-i18next";
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ArticleMidi from "../components/ArticleMidi";

const Blog = () => {
    const { t, i18n } = useTranslation();
    const selectedLanguage = i18n.resolvedLanguage;
    let jsonData;
    if (selectedLanguage === 'RU') {
        jsonData = require("../data/articlesRu.json");
    } else if (selectedLanguage === 'EN') {
        jsonData = require("../data/articlesEn.json");
    }
    return (
        <main>
            <Container>
                <section className='page-articles mb-5'>
                    <h1>{t('Новости и статьи')}</h1>
                    <Row className='gx-5'>
                        <Col lg={8}>
                            <ul className='page-articles-list'>
                                {
                                    jsonData.map(obj => {
                                        return <li key={obj.id}>
                                            <ArticleMidi data={obj} />
                                        </li>
                                    })
                                }
                            </ul>
                        </Col>
                        <Col lg={4}>
                            <h5 className='mb-4'>{t('Новости по категориям')}</h5>
                            <ul className="markers">
                                <li className='dev'>{t('#Разработка')}</li>
                                <li className='css'>#CSS</li>
                            </ul>

                            <img src="/images/img2.webp" alt="git" className='mt-5 img-fluid' />
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    );
};

export default Blog;