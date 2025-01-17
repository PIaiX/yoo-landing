import { useTranslation } from "react-i18next";
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import { HiOutlineEye, HiOutlineCalendar, HiOutlineClock } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const Article = () => {
    const { t, i18n } = useTranslation();
    const selectedLanguage = i18n.resolvedLanguage;
    let { articleId } = useParams();

    let jsonData;
    if (selectedLanguage === 'RU') {
        jsonData = require("../data/articlesRu.json");
    } else if (selectedLanguage === 'EN') {
        jsonData = require("../data/articlesEn.json");
    }
    let thisArticle = jsonData[articleId];

    return (
        <main>
            <Container>
                <article className='page-article mb-5'>
                    <img src={thisArticle.imgLink} alt={thisArticle.title} className='img-fluid' />
                    <Row>
                        <Col lg={9}>
                            <div className='d-flex align-items-center mb-4'>
                                <div className='d-flex align-items-center'>
                                    <HiOutlineClock className='fs-15 me-2' />
                                    <span>{t('2 мин')}</span>
                                </div>
                                <div className='d-flex align-items-center ms-4'>
                                    <HiOutlineEye className='fs-15 me-2' />
                                    <span>128</span>
                                </div>
                                <div className='d-flex align-items-center ms-4'>
                                    <HiOutlineCalendar className='fs-15 me-2' />
                                    <span>{thisArticle.date}</span>
                                </div>
                            </div>
                            <h1>{thisArticle.title}</h1>
                            <p>{thisArticle.text}</p>
                        </Col>
                        <Col lg={3}>
                            <h6>{t('Вам может быть интересно')}</h6>
                            <ul>
                                {
                                    jsonData.map(obj => {
                                        return <li key={obj.id}>
                                            <p><Link to={"/article/" + obj.id}>{obj.title}</Link></p>
                                            <p className="color-1 mt-2">{obj.date}</p>
                                        </li>
                                    })
                                }
                            </ul>
                        </Col>
                    </Row>
                </article>
            </Container>
        </main>
    )
}

export default Article