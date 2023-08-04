import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tomato from '../assets/imgs/tomato.svg';
import Flash from '../components/svg/Flash';
import Check from '../components/svg/Check';
import DownloadFile from '../components/svg/DownloadFile';
import Start from '../components/svg/Start';
import Offer from '../components/Offer';
import { BtnPuls } from '../components/svg/BtnPuls';
import Icon1 from '../assets/imgs/icons/icon1.png';
import Icon2 from '../assets/imgs/icons/icon2.png';
import Icon3 from '../assets/imgs/icons/icon3.png';
import Icon4 from '../assets/imgs/icons/icon4.png';

const Home = () => {
  return (
    <main>
      <Container>
      <section className='sec-1 mb-6'>
        <Row>
          <Col xs={12} md={6}>
            <div className="d-flex align-items-center mb-4">
              <img src={Tomato} alt="tomato" />
              <h1 className='mb-0 ms-3 '>Yoo Appc food — приложение для кафе и ресторанов</h1>
            </div>
            
            <p>Получайте на 30% больше прибыли с помощью приложения для заказа, доставки и самовывоза готовой еды или товаров</p>
            <div className="d-flex mt-5">
              <button type='button' className='btn-info'>
                <Flash className="fs-12"/>
                <span className='ms-2'>Пробовать бесплатно</span>
              </button>
              <a href="" className='btn-light ms-3'>
                <DownloadFile className="fs-12"/>
                <span className='ms-2'>Скачать презентацию</span>
              </a>
            </div>
            <div className="mt-2 d-flex align-items-center">
              <Check/>
              <p className='fs-08 fw-5 ms-2'>Подходит для любого уровня заведений</p>
            </div>
          </Col>
        </Row>
      </section>

      <section className='sec-2 mb-6'></section>

      <section className='sec-3 px-5 mb-6'>
        <h2>Кому подойдёт сервис?</h2>
        <Row md={4} className='gx-5'>
          <Col>
            <figure>
              <img src="/imgs/img1.png" alt="Кафе и ресторанам" />
              <figcaption>Кафе и ресторанам</figcaption>
            </figure>
          </Col>
          <Col>
            <figure>
              <img src="/imgs/img2.png" alt="Сервисам доставки" />
              <figcaption>Сервисам доставки</figcaption>
            </figure>
          </Col>
          <Col>
            <figure>
              <img src="/imgs/img3.png" alt="Пиццериям и суши-барам" />
              <figcaption>Пиццериям и суши-барам</figcaption>
            </figure>
          </Col>
          <Col>
            <figure>
              <img src="/imgs/img4.jpg" alt="Пекарням и кондитерским" />
              <figcaption>Пекарням и кондитерским</figcaption>
            </figure>
          </Col>
        </Row>
      </section>

      <section className='sec-4 px-5 mb-6'>
        <div className="top mb-4">
          <h3 className='fw-7 mb-0'>Заголовок о том, что входит в предложение</h3>
          <a href="" className='d-flex align-items-center'>
            <Start className="fs-15"/>
            <span className='fs-11 ms-2'>Посмотреть демо-версию</span>
          </a>
        </div>
        <ul className="list-unstyled row row-cols-2 g-4">
          <li>
            <Offer/>
          </li>
          <li>
            <Offer/>
          </li>
          <li>
            <Offer/>
          </li>
          <li>
            <Offer/>
          </li>
        </ul>
      </section>

      <section className='sec-5 mx-5 mb-6'>
        <img src="/imgs/img5.png" alt="img5" className='sec-5-img'/>
        <div className="row">
          <div className="col-7">
            <h2>Пройдите опрос и получите <br/>скидку <span>— 10 тыс. ₽</span> на запуск</h2>
            <p>Нужен ещё текст про условия акции или что‑то, что расказывает о выгодне прохождения этого опроса</p>
            <button type='button' className='btn-info mt-5'>
              <Flash className="fs-12"/>
              <span className='ms-2'>Пройти опрос</span>
            </button>
          </div>
        </div>
      </section>

      <section className='sec-6 mb-6'>
        <h2 className='text-start'>Что то очень интересное в заголовке</h2>
        <div className="row g-4">
          <div className="col-5">
            <div className="grayBlock-1">
              <h3 className='text-uppercase deepblue mb-2'>старт</h3>
              <h4>Подключение YooApp</h4>
              <p>Внедрим сайт и мобильное приложение за 2 недели. Интегрируем с системой управления заведением, настроим зоны доставки и подключим к онлайн-оплате.</p>
              <BtnPuls/>
            </div>
          </div>
          <div className="col-7">
            <div className="row row-cols-2 g-4">
              <div>
                <div className="grayBlock-2">
                  <h3 className='text-uppercase deepblue mb-2'>01</h3>
                  <h4>Клиент совершает заказ</h4>
                  <p>Удобное меню и простота оформления обеспечат быстрый заказ как на доставку, так и в заведении. А умная корзина и функционал модификации товаров повысят средний чек.</p>
                </div>
              </div>
              <div>
                <div className="grayBlock-3">
                  <h3 className='text-uppercase deepblue mb-2'>02</h3>
                  <h4>Заказ поступает в систему управления заведением</h4>
                  <p>iiko, r_keeper, frontpad и т.д. Если у вас нет подобной системы, то мы настроим управление через админ-панель Yoo.App или поможем внедрить.</p>
                </div>
              </div>
              <div>
                <div className="grayBlock-4">
                  <h3 className='text-uppercase deepblue mb-2'>04</h3>
                  <h4>Один раз клиент — всегда клиент</h4>
                  <p>Отправьте клиенту персональное предложение на основе его заказов, управляйте акциями и скидками, и он придёт к вам снова.</p>
                </div>  
              </div>
              <div>
                <div className="grayBlock-5">
                  <h3 className='text-uppercase deepblue mb-2'>03</h3>
                  <h4>Взаимодействие с пользователем</h4>
                  <p>Клиент будет получать уведомления о каждой смене статуса заказа. Если доставка задерживается, система уведомит его, сохранив лояльность. А после завершения соберёт обратную связь и попросит оставить отзыв.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='sec-7 px-5 mb-6'>
        <h2 className='text-start'>Сихронизируемся с любой системой по API</h2>
        <img src="/imgs/scheme.png" alt="scheme" className='img-fluid'/>
      </section>

      <section className='sec-8 mb-6'>
        <h2>Управление заведением <br/>станет <img src="/imgs/eyes.png" alt="eyes"/> ещё проще</h2>
        <p className="fs-09 text-center">Соберём все заказы, оцифруем работу сотрудников, напомним заказать <br/>продукты, подготовим необходимый отчёт</p>
        <button type='button' className='btn-secondary mt-5 mx-auto'>Узнать больше о возможностях</button>
      </section>

      <section className='sec-9 mb-6'></section>

      <section className='sec-10 mb-6'>
        <h2>Предоставляем полную статистику по заказам</h2>
        <p className="text-center">Отслеживайте ключевые показатели и формируйте <br/>отчеты, чтобы зарабатывать еще больше</p>
        <img src="/imgs/stats.jpg" alt="statistics" className='img-fluid'/>
      </section>

      <section className='sec-11 mb-6'></section>
      </Container>

      <section className='sec-12 mb-6'>
        <Container>
          <Row className='g-4'>
            <Col md={4}>
              <h3>Выберите план развития вашего бизнеса</h3>
            </Col>
            <Col md={8}>
              <div className="box d-flex align-items-center">
                <img src={Icon1} alt="Icon1" />
                <p className='ms-4'>Админ-панель, обновления приложения, техническая поддержка и система лояльности включены в стоимость тарифов.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="box">
                <h4 className='fw-7 text-uppercase'>Аренда</h4>
                <p className='mb-3'>6 000 ₽/мес</p>
                <img src={Icon2} alt="Аренда" />
                <button type='button' className='mt-4 w-100 btn-gray'>Подробнее</button>
              </div>
            </Col>
            <Col md={4}>
              <div className="box">
                <h4 className='fw-7 text-uppercase'>Выкуп</h4>
                <p className='mb-3'>от 1 до 3%</p>
                <img src={Icon3} alt="Выкуп" />
                <button type='button' className='mt-4 w-100 btn-gray'>Подробнее</button>
              </div>
            </Col>
            <Col md={4}>
              <div className="box">
                <h4 className='fw-7 text-uppercase'>Процент от выручки</h4>
                <p className='mb-3'>6 000 ₽/мес</p>
                <img src={Icon4} alt="Процент от выручки" />
                <button type='button' className='mt-4 w-100 btn-gray'>Подробнее</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </main>
  )
}

export default Home