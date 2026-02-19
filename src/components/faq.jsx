import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const { t } = useTranslation();

  const faqItems = [
    {
      question: t('Сколько времени занимает запуск?'),
      answer: t('Мы запускаем ваш сервис доставки за 10 дней. Подробнее об этапах — в разделе «Принцип работы».'),
    },
    {
      question: t('Какие системы учета поддерживаются?'),
      answer: t('YooApp интегрируется с iiko, r_keeper, Frontpad. Также предоставляем собственную админ-панель.'),
    },
    {
      question: t('Есть ли комиссия с заказов?'),
      answer: t('Да, тариф «Процент от оборота» включает комиссию от 1% до 3%. Другие тарифы — фиксированная плата.'),
    },
    {
      question: t('Можно ли протестировать бесплатно?'),
      answer: t('Конечно! Нажмите «Попробовать бесплатно» – вы получите доступ к демо-версии на 14 дней.'),
    },
  ];

  return (
    <section className="faq mb-6">
      <Container>
        <h2>{t('Часто задаваемые вопросы о YooApp')}</h2>
        <Row>
          {faqItems.map((item, idx) => (
            <Col md={6} key={idx}>
              <div className="faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FAQ;