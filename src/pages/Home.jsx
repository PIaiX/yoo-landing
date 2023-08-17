import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

import useObserver from '../hooks/useObserver';

import Offer from '../components/Offer';
import Company from '../components/Company';

/* icons & images */
import Flash from '../components/svg/Flash';
import Close from '../components/svg/Close';
import Check from '../components/svg/Check';
import DownloadFile from '../components/svg/DownloadFile';
import Start from '../components/svg/Start';
import { BtnPuls } from '../components/svg/BtnPuls';
import Tomato from '../assets/imgs/tomato.svg';
import Icon1 from '../assets/imgs/icons/icon1.png';
import Icon2 from '../assets/imgs/icons/icon2.png';
import Icon3 from '../assets/imgs/icons/icon3.png';
import Icon4 from '../assets/imgs/icons/icon4.png';
import Diagram from '../assets/imgs/diagram.png';
import MobileApp from '../assets/imgs/mobile-app.png';
import Site from '../assets/imgs/site.jpg';
import Qrmenu from '../assets/imgs/qrmenu.jpg';
import System from '../assets/imgs/yoo-system.jpg';

import { EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import Return from '../components/svg/Return';

const Home = () => {
  const [objRef, isVisible] = useObserver({threshold: 0.5});
  const [objRef2, isVisible2] = useObserver({threshold: 0.5});
  const [objRef3, isVisible3] = useObserver({threshold: 0.5});

  const [showCallback, setShowCallback] = useState(false);
  const handleCloseCallback = () => setShowCallback(false);
  const handleShowCallback = () => setShowCallback(true);

  const [showQuiz, setShowQuiz] = useState(false);
  const handleCloseQuiz = () => setShowQuiz(false);
  const handleShowQuiz = () => setShowQuiz(true);

  const [quizPage, setQuizPage] = useState(1);

  return (
    <main>
      <Container className='wide'>
        <section className='sec-1 mb-6'>
          <Row>
            <Col xs={12} md={10} lg={8} xl={6}>
              <div className="d-flex align-items-center mb-4">
                <img src={Tomato} alt="tomato" />
                <h1 className='mb-0 ms-2 ms-sm-3'>Yoo Appc food — приложение для кафе и ресторанов</h1>
              </div>
              
              <p>Получайте на 30% больше прибыли с помощью приложения <br/>для заказа, доставки и самовывоза готовой еды или товаров</p>
              <div className="d-sm-flex mt-4 mt-lg-5">
                <button type='button' onClick={handleShowCallback} className='btn-info w-xs-100'>
                  <Flash className="fs-12"/>
                  <span className='ms-2'>Пробовать бесплатно</span>
                </button>
                <a href="" className='btn-light w-xs-100 ms-sm-3 mt-3 mt-sm-0'>
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
      </Container>

      <section className='sec-2 mb-6'>
        <Container>
          <Row xs={1} md={3} className='g-3 g-lg-4'>
            <Col>
              <div className="pros-1">
                <h4>Увеличим количество заказов на 43% и выручку на 52%*</h4>
              </div>
              <p className="fs-08 mt-1">*статистика действующего клиента</p>
            </Col>
            <Col>
              <div className="pros-2">
                <img src="imgs/replacement1.png" alt="animate" className='d-block ms-auto' />
                <h4>Сформируем максимально подробную статистику</h4>
              </div>
            </Col>
            <Col>
              <div className="pros-3">
                <img src="imgs/replacement2.png" alt="animate" className='d-block ms-auto' />
                <h4>Автоматизируем процесс заказа на доставку и в заведениях</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='sec-3 mb-6'>
        <Container>
          <h2>Кому подойдёт сервис?</h2>
          <Row xs={2} md={3} lg={4} className='justify-content-center g-2 g-sm-3 g-xl-5'>
            <Col>
              <figure>
                <img src="imgs/img1.png" alt="Кафе и ресторанам" />
                <figcaption>Кафе и ресторанам</figcaption>
              </figure>
            </Col>
            <Col>
              <figure>
                <img src="imgs/img2.png" alt="Сервисам доставки" />
                <figcaption>Сервисам доставки</figcaption>
              </figure>
            </Col>
            <Col>
              <figure>
                <img src="imgs/img3.png" alt="Пиццериям и суши-барам" />
                <figcaption>Пиццериям и суши-барам</figcaption>
              </figure>
            </Col>
            <Col>
              <figure>
                <img src="imgs/img4.jpg" alt="Пекарням и кондитерским" />
                <figcaption>Пекарням и кондитерским</figcaption>
              </figure>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='sec-4 mb-6'>
        <Container>
          <div className="top mb-2 mb-sm-4">
            <h3 className='fw-7 mb-0'>Заголовок о том, что входит в предложение</h3>
            <a href="" className='d-none d-lg-flex align-items-center'>
              <Start className="fs-15"/>
              <span className='fs-11 ms-2'>Посмотреть демо-версию</span>
            </a>
          </div>
          <ul className="list-unstyled row row-cols-1 row-cols-md-2 g-2 g-sm-4">
            <li>
              <Offer 
                title={'Мобильное приложение'}
                text={'Стильный дизайн и мощный функционал позволит выделиться среди конкурентов и увеличить количество заказов.'}
                img={MobileApp}
              />
            </li>
            <li>
              <Offer 
                title={'Сайт'}
                text={'Максимально удобен как с компьютера так и с телефона. Поможет легко набрать базу постоянных клиентов.'}
                img={Site}
              />
            </li>
            <li>
              <Offer 
                title={'QR-меню'}
                text={'Упростим процедуру заказа в заведениях. Получайте заказы уже с номером стола, меняйте статусы и выставляйте чек.'}
                img={Qrmenu}
              />
            </li>
            <li>
              <Offer 
                title={'YooApp-система'}
                text={'Приём заказов, ведение склада, управление каталогом, акциями, рассылками, полная статистика и многое другое что должно быть в системе управления заведением.'}
                img={System}
              />
            </li>
          </ul>
        </Container>
      </section>

      <Container>
        <section className='sec-5 mb-6'>
          <div className="row">
            <div className="col-12 col-lg-8 col-xl-7">
              <h2>Пройдите опрос и получите <br/>скидку <span>— 10 тыс. ₽</span> на запуск</h2>
              <p>Нужен ещё текст про условия акции или что‑то, что расказывает о выгодне прохождения этого опроса</p>
              <div className='sec-5-img'>
                <img src="imgs/img5.png" alt="img5"/>
              </div>
              <button type='button' onClick={handleShowQuiz} className='btn-info w-xs-100 mt-4 mt-lg-5'>
                <Flash className="fs-12"/>
                <span className='ms-2'>Пройти опрос</span>
              </button>
            </div>
          </div>
        </section>
      </Container>

      <section className='sec-6 mb-6'>
        <Container className='wide'>
          <h2 className='text-start'>Что то очень интересное в заголовке</h2>
          <Row className="g-2 g-xl-4">
            <Col xs={12} lg={5}>
              <div className="grayBlock-1">
                <h3 className='text-uppercase deepblue mb-2'>старт</h3>
                <h4>Подключение YooApp</h4>
                <p>Внедрим сайт и мобильное приложение за 2 недели. Интегрируем с системой управления заведением, настроим зоны доставки и подключим к онлайн-оплате.</p>
                <BtnPuls/>
              </div>
            </Col>
            <Col xs={12} lg={7}>
              <Row xs={1} sm={2} className="g-2 g-xl-4">
                <Col>
                  <div className="grayBlock-2">
                    <h3 className='text-uppercase deepblue mb-2'>01</h3>
                    <h4>Клиент совершает заказ</h4>
                    <p>Удобное меню и простота оформления обеспечат быстрый заказ как на доставку, так и в заведении. А умная корзина и функционал модификации товаров повысят средний чек.</p>
                  </div>
                </Col>
                <Col>
                  <div className="grayBlock-3">
                    <h3 className='text-uppercase deepblue mb-2'>02</h3>
                    <h4>Заказ поступает в систему управления заведением</h4>
                    <p>iiko, r_keeper, frontpad и т.д. Если у вас нет подобной системы, то мы настроим управление через админ-панель Yoo.App или поможем внедрить.</p>
                  </div>
                </Col>
                <Col>
                  <div className="grayBlock-4">
                    <h3 className='text-uppercase deepblue mb-2'>04</h3>
                    <h4>Один раз клиент — всегда клиент</h4>
                    <p>Отправьте клиенту персональное предложение на основе его заказов, управляйте акциями и скидками, и он придёт к вам снова.</p>
                  </div>  
                </Col>
                <Col>
                  <div className="grayBlock-5">
                    <h3 className='text-uppercase deepblue mb-2'>03</h3>
                    <h4>Взаимодействие с пользователем</h4>
                    <p>Клиент будет получать уведомления о каждой смене статуса заказа. Если доставка задерживается, система уведомит его, сохранив лояльность. А после завершения соберёт обратную связь и попросит оставить отзыв.</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='sec-7 mb-6'>
        <Container>
          <h2 className='text-start'>Сихронизируемся с любой системой по API</h2>
          <img src="imgs/scheme.png" alt="scheme" className='d-none d-md-block img-fluid mx-auto'/>
          <img src="imgs/schemeMobile.png" alt="scheme" className='d-block d-md-none img-fluid mx-auto'/>
        </Container>
      </section>

      <section className='sec-8 mb-6'>
        <Container>
          <h2>Управление заведением <br/>станет <img src="imgs/eyes.png" alt="eyes"/> ещё проще</h2>
          <p className="fs-09 text-center">Соберём все заказы, оцифруем работу сотрудников, напомним заказать <br/>продукты, подготовим необходимый отчёт</p>
          <button type='button' className='btn-secondary hmax mt-5 mx-auto'>
            <span className='fw-7'>Узнать больше о возможностях</span>
          </button>
        </Container>
      </section>

      <section className='sec-9 mb-6'>
        <Container>
          <Swiper
            className='swiperFade'
            modules={[EffectFade, Autoplay]}
            slidesPerView={1}
            effect={"fade"}
            rewind={true}
            autoplay={{
              delay: 10000,
              pauseOnMouseEnter: false,
            }}
          >
            <SwiperSlide>
              <Row xs={1} md={2} className='flex-md-row-reverse g-4'>
                <Col>
                  <div className='textBox'>
                    <img src="imgs/img7.png" alt="Система лояльности"/>
                    <h3>Система лояльности есть, даже если её нет</h3>
                    <p>Мы продумали систему лояльности для заведений которые пользуются сервисами без системы лояльности.</p>
                  </div>
                </Col>
                <Col>
                  <div className="img">
                    <img src="imgs/img6.png" alt="Система лояльности" className='img-main' ref={objRef}/>
                    <img src="imgs/img8.png" alt="Система лояльности" className='img-popup' data-observing={isVisible}/>
                  </div>
                </Col>
              </Row>
            </SwiperSlide>
            <SwiperSlide>
              <Row xs={1} md={2} className='flex-md-row-reverse g-4'>
                <Col>
                  <div className='textBox'>
                    <img src="imgs/img10.png" alt="Таргетинг добрался и до Push"/>
                    <h3>Таргетинг добрался и до Push</h3>
                    <p>Отсортируйте пользователей, по дню рождения, зоне доставки или любимому блюду, и отправьте им уведомление о ваших акциях.</p>
                  </div>
                </Col>
                <Col>
                  <div className="img2">
                    <img src="imgs/img9.png" alt="Таргетинг добрался и до Push" className='img2-main' ref={objRef2}/>
                    <img src="imgs/img11.png" alt="Таргетинг добрался и до Push" className='img2-popup' data-observing={isVisible2}/>
                  </div>
                </Col>
              </Row>
            </SwiperSlide>
            <SwiperSlide>
              <Row xs={1} md={2} className='flex-md-row-reverse g-4'>
                <Col>
                  <div className='textBox'>
                    <img src="imgs/img13.png" alt="Настроим зоны доставок"/>
                    <h3>Настроим зоны доставок</h3>
                    <p>С нами вы сможете разделить доставку по зонам, исходя из этого настроим автоматический расчёт стоимости доставки, суммы бесплатной доставки и минимального чека.</p>
                  </div>
                </Col>
                <Col>
                  <div className="img3">
                    <img src="imgs/img12.png" alt="Настроим зоны доставок" className='img3-main' ref={objRef3}/>
                    <img src="imgs/img14.png" alt="Настроим зоны доставок" className='img3-popup' data-observing={isVisible3}/>
                  </div>
                </Col>
              </Row>
            </SwiperSlide>
          </Swiper>
        </Container>
      </section>

      <section className='sec-10 mb-6'>
        <Container>
          <h2>Предоставляем полную статистику по заказам</h2>
          <p className="text-center">Отслеживайте ключевые показатели и формируйте <br/>отчеты, чтобы зарабатывать еще больше</p>
          <img src="imgs/stats.jpg" alt="statistics" className='img-fluid'/>
        </Container>
      </section>

      <section className='sec-11 mb-6'>
        <Container>
          <div className="grid-info">
            <div className="info1">
              <h4>Онлайн-оплата без ограничнений</h4>
              <p className='mb-3'>Принимайте оплату в мобильном приложении и на сайте через популярные платёжные сервисы</p>
              <ul className="list-unstyled row row-cols-3 g-2">
                <li>
                  <div className='logotip'>
                    <img src="imgs/logotips/sber.svg" alt="sber"/>
                  </div>
                </li>
                <li>
                  <div className='logotip'>
                    <img src="imgs/logotips/tinkoff.svg" alt="tinkoff"/>
                  </div>
                </li>
                <li>
                  <div className='logotip'>
                    <img src="imgs/logotips/maybebank.svg" alt="maybebank"/>
                  </div>
                </li>
                <li>
                  <div className='logotip'>
                    <img src="imgs/logotips/alfa.svg" alt="alfa"/>
                  </div>
                </li>
                <li>
                  <div className='logotip'>
                    <img src="imgs/logotips/Yoomoney.svg" alt="Yoomoney"/>
                  </div>
                </li>
                <li>
                  <div className='logotip fw-6'>+ другие</div>
                </li>
              </ul>
            </div>
            <div className="info2">
              <div>
                <h4>Бонусная система</h4>
                <p>Завоюйте лояльность клиентов, поощряя покупки бонусами на сайте и в приложении</p>
              </div>
              <img src="imgs/iPhone.png" alt="iPhone" className='mx-auto'/>
            </div>
            <div className="info3">
              <h4>Будьте всегда на связи с клиентом</h4>
              <p className='mb-3'>Внутренний чат экономит время клиента и деньги на содержании call-центра</p>
              <img src="imgs/iPhone2.png" alt="iPhone" className='mx-auto'/>
            </div>
            <div className="info4">
              <div>
                <h4>Не упустите ни одного клиента!</h4>
                <p>Настройте бонусную систему под свои нужны — меняйте скидки в два клика, оповещайте об акциях и делитесь промокодами.</p>
              </div> 
              <img src="imgs/iPhone3.png" alt="iPhone" className='ms-auto'/>
            </div>
            <div className="info5">
              <h4>Все управление в одном месте</h4>
              <p>Объедините с Yoo.App все заведения, или даже бренды, в одном кабинете</p>
            </div>
          </div>
        </Container>
      </section>

      <section id="tarif" className='sec-12 mb-6'>
        <Container className='wide'>
          <Row className='g-3 g-xl-4'>
            <Col xs={12} md={4} className='order-1'>
              <h3>Выберите план развития вашего бизнеса</h3>
            </Col>
            <Col xs={12} md={8} className='order-3 order-md-2'>
              <div className="box d-flex align-items-center">
                <img src={Icon1} alt="Icon1" />
                <p className='ms-4'>Админ-панель, обновления приложения, техническая поддержка и система лояльности включены в стоимость тарифов.</p>
              </div>
            </Col>
            <Col xs={12} className='order-2 order-md-3'>
              <Swiper
                className='swiperTarif'
                spaceBetween={16}
                slidesPerView={'auto'}
                breakpoints={{
                  992: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                  },
                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="box h-100 d-flex flex-column justify-content-between">
                    <div>
                      <div className="d-flex flex-row flex-lg-column justify-content-between align-items-center align-items-lg-start">
                        <div>
                          <h4 className='fw-7 text-uppercase'>Аренда</h4>
                          <p className='mb-lg-3'>6 000 ₽/мес</p>
                        </div>
                        <img src={Icon2} alt="Аренда" />
                      </div>
                      <ul>
                        <li>
                          <span>Запуск</span>
                          <span>30&nbsp;000&nbsp;₽</span>
                        </li>
                        <li>
                          <span>Хостинг</span>
                          <span>Бесплатно</span>
                        </li>
                        <li className='d-none d-lg-block'>
                          <span>Размещение <br/>в&nbsp;Google&nbsp;Play и&nbsp;App&nbsp;Store</span>
                          <span>Бесплатно</span>
                        </li>
                        <li>
                          <span className='d-none d-lg-block'>Подключение доп.&nbsp;точки</span>
                          <span className='d-lg-none'>Доп.&nbsp;точки</span>
                          <span>1&nbsp;000&nbsp;₽&nbsp;/&nbsp;мес</span>
                        </li>
                        <li>
                          <span>Сайт</span>
                          <span>2&nbsp;000&nbsp;₽&nbsp;/&nbsp;мес</span>
                        </li>
                        <li>
                          <span>Интеграция</span>
                          <span>5-15&nbsp;тыс&nbsp;₽</span>
                        </li>
                      </ul>
                    </div>
                    <button type='button' className='mt-4 w-100 btn-gray hmax'>Подробнее</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="box h-100 d-flex flex-column justify-content-between">
                    <div>
                      <div className="d-flex flex-row flex-lg-column justify-content-between align-items-center align-items-lg-start">
                        <div>
                          <h4 className='fw-7 text-uppercase'>Выкуп</h4>
                          <p className='mb-lg-3'>240 000 ₽</p>
                        </div>
                        <img src={Icon3} alt="Выкуп" />
                      </div>
                      <ul>
                        <li>
                          <span>Запуск</span>
                          <span>Бесплатно</span>
                        </li>
                        <li>
                          <span>Хостинг</span>
                          <span>4&nbsp;000&nbsp;₽&nbsp;/&nbsp;год</span>
                        </li>
                        <li className='d-none d-lg-block'>
                          <span>Размещение <br/>в&nbsp;Google&nbsp;Play и&nbsp;App&nbsp;Store</span>
                          <span>15&nbsp;000&nbsp;₽</span>
                        </li>
                        <li>
                          <span className='d-none d-lg-block'>Подключение доп.&nbsp;точки</span>
                          <span className='d-lg-none'>Доп.&nbsp;точки</span>
                          <span>10&nbsp;000&nbsp;₽</span>
                        </li>
                        <li>
                          <span>Сайт</span>
                          <span>60&nbsp;000&nbsp;₽</span>
                        </li>
                        <li>
                          <span>Интеграция</span>
                          <span>5-15&nbsp;тыс&nbsp;₽</span>
                        </li>
                      </ul>
                    </div>
                    <button type='button' className='mt-4 w-100 btn-gray hmax'>Подробнее</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="box h-100 d-flex flex-column justify-content-between">
                    <div>
                      <div className="d-flex flex-row flex-lg-column justify-content-between align-items-center align-items-lg-start">
                        <div>
                          <h4 className='fw-7 text-uppercase'>Процент от выручки</h4>
                          <p className='mb-lg-3'>от 1 до 3%</p>
                        </div>
                        <img src={Icon4} alt="Процент от выручки" />
                      </div>
                      <ul>
                        <li>
                          <span>Запуск</span>
                          <span>30&nbsp;000&nbsp;₽</span>
                        </li>
                        <li>
                          <span>Хостинг</span>
                          <span>Бесплатно</span>
                        </li>
                        <li className='d-none d-lg-block'>
                          <span>Размещение <br/>в&nbsp;Google&nbsp;Play и&nbsp;App&nbsp;Store</span>
                          <span>Бесплатно</span>
                        </li>
                        <li>
                          <span className='d-none d-lg-block'>Подключение доп.&nbsp;точки</span>
                          <span className='d-lg-none'>Доп.&nbsp;точки</span>
                          <span>Бесплатно</span>
                        </li>
                        <li>
                          <span>Сайт</span>
                          <span>Бесплатно</span>
                        </li>
                        <li>
                          <span>Интеграция</span>
                          <span>5-15&nbsp;тыс&nbsp;₽</span>
                        </li>
                      </ul>
                    </div>
                    <button type='button' className='mt-4 w-100 btn-gray hmax'>Подробнее</button>
                  </div>
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='d-none d-lg-block sec-13 mb-6'>
        <Container>
          <h2 className='text-start ps-5'>Результат реального клиента</h2>
          <div className="diagram">
            <img src={Diagram} alt="Diagram" />
            <div className="text">
              <p>Увеличение прибыли происходит за счёт индивидуальных акций, удобной push-рассылки, умной корзины и уникального функционала приложения.</p>
              <button type='button' className='btn-secondary hmax'>
                <Start className="fs-15"/>
                <span className='fw-7 ms-2'>Хочу так же</span>
              </button>
            </div>
          </div>
        </Container>
      </section>

      <section id="example" className='sec-14 mb-6'>
        <Container>
          <h2>Компании, которые уже пользуются сервисом</h2>
          <Swiper
            spaceBetween={11}
            slidesPerView={'auto'}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 11,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 11,
              },
            }}
          >
            <SwiperSlide>
              <Company
                imgLogo="imgs/companies/totos-logo.png"
                imgCover="imgs/companies/totos-cover.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Company
                imgLogo="imgs/companies/yakinori-logo.png"
                imgCover="imgs/companies/yakinori-cover.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Company
                imgLogo="imgs/companies/xiao-logo.png"
                imgCover="imgs/companies/xiao-cover.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Company
                imgLogo="imgs/companies/dream-logo.png"
                imgCover="imgs/companies/dream-cover.png"
              />
            </SwiperSlide>
          </Swiper>
        </Container>
      </section>

      <Modal className='modalCallback' show={showCallback} size="xl" centered onHide={handleCloseCallback}>
        <Modal.Body>
          <button type='button' className='close' onClick={handleCloseCallback}>
            <Close/>
          </button>
          <Row>
            <Col xs={12} lg={8}>
              <h4>Вопрос-заголовок</h4>
              <p className='fs-09 mb-4'>Оставьте заявку и мы перезвоним через 15 минут или раньше.</p>
              <div className="fs-09 d-sm-flex">
                <label className='input-labeled w-xs-100'>
                  <input type="text" placeholder='Имя'/>
                  <span></span>
                </label>
                <label className='input-labeled w-xs-100 ms-sm-3 mt-3 mt-sm-0'>
                  <input type="tel" placeholder='+7-___-___-__-__' className=''/>
                </label>
                <button type='button' className='btn-primary  w-xs-100 ms-sm-3 mt-3 mt-sm-0'>Отправить</button>
              </div>
              <p className='fs-07 mt-2'>Нажимая кнопку «Отправить», вы даёте согласие на обработку персональных данных и соглашаетесь с Политикой конфиденциальности</p>
            </Col>
            <Col xs={12} lg={4} className='d-none d-lg-block'>
              <img src="imgs/photo.jpg" alt="photo" className='img-fluid rounded-3'/>
            </Col>
          </Row>
        </Modal.Body> 
      </Modal>

      <Modal show={showQuiz} size="xl" onHide={handleCloseQuiz}>
        <Modal.Body>
          <form action="" className='quiz'>
            <fieldset className={(quizPage === 1) ? '' : 'd-none'}>
              <legend>Какое у вас заведение?</legend>
              <Row>
                <Col xs={12} lg={7} xl={9}>
                  <Row>
                    <Col xs={12} xl={5}>
                      <ul>
                        <li>
                          <label>
                            <input type="radio" name='type' />
                            <span className='ms-2'>Кафе</span>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="radio" name='type' />
                            <span className='ms-2'>Ресторан</span>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="radio" name='type' />
                            <span className='ms-2'>Суши-бар</span>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="radio" name='type' />
                            <span className='ms-2'>Пиццерия</span>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="radio" name='type' />
                            <span className='ms-2'>Пекарня</span>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="radio" name='type' />
                            <span className='ms-2'>Сервис доставки</span>
                          </label>
                        </li>
                        <li>
                          <input type="text" placeholder='Другое'/>
                        </li>
                      </ul>
                    </Col>
                    <Col className='d-none d-xl-block' xl={7}>
                      <img src="imgs/img15.jpg" alt="cafe" className='quiz-img'/>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} lg={5} xl={3} className='mt-4 mt-lg-0 d-flex flex-column justify-content-between'>
                  <div>
                    <div className="d-flex">
                      <img src="imgs/photo.jpg" alt="replacement" className='photo'/>
                      <div>
                        <h5>Сирень</h5>
                        <p className='fs-09'>Руководитель</p>
                      </div>
                    </div>
                    <blockquote>
                      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque  accusamus et iusto odio dignissimos</p>
                    </blockquote>
                  </div>
                  
                  <div className="mt-3 mt-sm-4 d-flex align-items-end justify-content-between">
                    <button type='button' className='btn-return' onClick={handleCloseQuiz}>
                      <Return/>
                    </button>
                    <div className='text-center'>
                      <p className='quiz-page'>1/5</p>
                      <p className='deepblue fw-6'>вопрос</p>
                    </div>
                    <button type='button' className='btn-primary' onClick={()=>setQuizPage(2)}>Далее</button>
                  </div>
                </Col>
              </Row>
            </fieldset>
            <fieldset className={(quizPage === 2) ? '' : 'd-none'}>
              <legend>Что вас заинтересовало больше всего?</legend>
              <Row>
                <Col xs={12} lg={7} xl={9}>
                  <Row>
                    <Col xs={12} xl={5}>
                      <ul>
                        <li>
                          <label>
                            <input type="checkbox" name='product' />
                            <span className='ms-2'>Мобильное приложение</span>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" name='product' />
                            <span className='ms-2'>Сайт</span>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" name='product' />
                            <span className='ms-2'>QR-меню</span>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" name='product' />
                            <span className='ms-2'>YooApp-система</span>
                          </label>
                        </li>
                      </ul>
                    </Col>
                    <Col className='d-none d-xl-block' xl={7}>
                      <img src="imgs/img15.jpg" alt="cafe" className='quiz-img'/>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} lg={5} xl={3} className='mt-4 mt-lg-0 d-flex flex-column justify-content-between'>
                  <div>
                    <div className="d-flex">
                      <img src="imgs/photo.jpg" alt="replacement" className='photo'/>
                      <div>
                        <h5>Сирень</h5>
                        <p className='fs-09'>Руководитель</p>
                      </div>
                    </div>
                    <blockquote>
                      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque  accusamus et iusto odio dignissimos</p>
                    </blockquote>
                  </div>
                  
                  <div className="mt-3 mt-sm-4 d-flex align-items-end justify-content-between">
                    <button type='button' className='btn-return' onClick={()=>setQuizPage(1)}>
                      <Return/>
                    </button>
                    <div className='text-center'>
                      <p className='quiz-page'>2/5</p>
                      <p className='deepblue fw-6'>вопрос</p>
                    </div>
                    <button type='button' className='btn-primary' onClick={()=>setQuizPage(3)}>Далее</button>
                  </div>
                </Col>
              </Row>
            </fieldset>
            <fieldset className={(quizPage === 3) ? '' : 'd-none'}>
              <legend>Сколько у вас точек (филиалов) ?</legend>
              <Row>
                <Col xs={12} lg={7} xl={9}>
                  <Row xs={2} xl={3} className='g-2 g-sm-3'>
                    <Col>
                      <label htmlFor="" className='variant'>
                        <input type="radio" name='filials' />
                        <figure>
                          <img src="imgs/replacement.jpg" alt="replacement" className='img-fluid'/>
                          <figcaption>один филиал</figcaption>
                        </figure>
                      </label>
                    </Col>
                    <Col>
                      <label htmlFor="" className='variant'>
                        <input type="radio" name='filials'/>
                        <figure>
                          <img src="imgs/replacement.jpg" alt="replacement" className='img-fluid'/>
                          <figcaption>больше одной точки  в одном городе</figcaption>
                        </figure>
                      </label>
                    </Col>
                    <Col>
                      <label htmlFor="" className='variant'>
                        <input type="radio" name='filials'/>
                        <figure>
                          <img src="imgs/replacement.jpg" alt="replacement" className='img-fluid'/>
                          <figcaption>больше одной точки в разных городах</figcaption>
                        </figure>
                      </label>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} lg={5} xl={3} className='mt-4 mt-lg-0 d-flex flex-column justify-content-between'>
                  <div>
                    <div className="d-flex">
                      <img src="imgs/photo.jpg" alt="replacement" className='photo'/>
                      <div>
                        <h5>Сирень</h5>
                        <p className='fs-09'>Руководитель</p>
                      </div>
                    </div>
                    <blockquote>
                      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque  accusamus et iusto odio dignissimos</p>
                    </blockquote>
                  </div>
                  
                  <div className="mt-3 mt-sm-4 d-flex align-items-end justify-content-between">
                    <button type='button' className='btn-return' onClick={()=>setQuizPage(2)}>
                      <Return/>
                    </button>
                    <div className='text-center'>
                      <p className='quiz-page'>3/5</p>
                      <p className='deepblue fw-6'>вопрос</p>
                    </div>
                    <button type='button' className='btn-primary' onClick={()=>setQuizPage(4)}>Далее</button>
                  </div>
                </Col>
              </Row>
            </fieldset>
            <fieldset className={(quizPage === 4) ? '' : 'd-none'}>
              <legend>С каким программным обеспечением работает ваше заведение?</legend>
              <Row>
                <Col xs={12} lg={7} xl={9}>
                  <Row xs={2} className='g-2 g-sm-3'>
                    <Col>
                      <label htmlFor="" className='variant logo'>
                        <input type="radio" name='software' />
                        <figure>
                          <img src="imgs/iiko.jpg" alt="iiko"/>
                          <figcaption>iiko</figcaption>
                        </figure>
                      </label>
                    </Col>
                    <Col>
                      <label htmlFor="" className='variant logo'>
                        <input type="radio" name='software' />
                        <figure>
                          <img src="imgs/r_keeper.jpg" alt="r_keeper"/>
                          <figcaption>r_keeper</figcaption>
                        </figure>
                      </label>
                    </Col>
                    <Col>
                      <label htmlFor="" className='variant logo'>
                        <input type="radio" name='software'/>
                        <figure>
                          <img src="imgs/frontpad.jpg" alt="frontpad"/>
                          <figcaption>Frontpad</figcaption>
                        </figure>
                      </label>
                    </Col>
                    <Col>
                      <label htmlFor="" className='variant logo'>
                        <input type="radio" name='software'/>
                        <figure>
                          <img src="imgs/none.jpg" alt="replacement"/>
                          <figcaption>нет никакой</figcaption>
                        </figure>
                      </label>
                    </Col>
                  </Row>
                  <input type="text" placeholder='Другое' className='mt-3' />
                </Col>
                <Col xs={12} lg={5} xl={3} className='mt-4 mt-lg-0 d-flex flex-column justify-content-between'>
                  <div>
                    <div className="d-flex">
                      <img src="imgs/photo.jpg" alt="replacement" className='photo'/>
                      <div>
                        <h5>Сирень</h5>
                        <p className='fs-09'>Руководитель</p>
                      </div>
                    </div>
                    <blockquote>
                      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque  accusamus et iusto odio dignissimos</p>
                    </blockquote>
                  </div>
                  
                  <div className="mt-3 mt-sm-4 d-flex align-items-end justify-content-between">
                    <button type='button' className='btn-return' onClick={()=>setQuizPage(3)}>
                      <Return/>
                    </button>
                    <div className='text-center'>
                      <p className='quiz-page'>4/5</p>
                      <p className='deepblue fw-6'>вопрос</p>
                    </div>
                    <button type='button' className='btn-primary' onClick={()=>setQuizPage(5)}>Далее</button>
                  </div>
                </Col>
              </Row>
            </fieldset>
            <fieldset className={(quizPage === 5) ? '' : 'd-none'}>
              <legend></legend>
              <Row>
                <Col className='d-none d-lg-block' xs={12} lg={7} xl={9}>
                  <img src="imgs/replacement.jpg" alt="replacement" className='big-img'/>
                  <button type='button' className='btn-return mt-3' onClick={()=>setQuizPage(4)}>
                    <Return/>
                  </button>
                </Col>
                <Col xs={12} lg={5} xl={3}>
                  <p className='mb-3'>Завершите опрос и получите демо-доступ для демонстрации</p>
                  <label className='input-labeled w-xs-100 mb-3'>
                    <input type="text" placeholder='Имя'/>
                    <span>Имя</span>
                  </label>
                  <label className='input-labeled w-xs-100 mb-3'>
                    <input type="tel" placeholder='+ 7-(9__)-___-__-__'/>
                    <span>Номер телефона</span>
                  </label>
                  <label className='input-labeled w-xs-100 mb-3'>
                    <input type="text" placeholder=''/>
                    <span>Город</span>
                  </label>
                  <label className='input-labeled w-xs-100 mb-3'>
                    <input type="text" placeholder=''/>
                    <span>Название заведения</span>
                  </label>
                  
                  <div className="d-flex">
                    <button type='button' className='d-lg-none btn-return me-3' onClick={()=>setQuizPage(4)}>
                      <Return/>
                    </button>
                    <button type='submit' className='btn-primary'>отправить</button>
                  </div>
                </Col>
              </Row>
            </fieldset>
          </form>
        </Modal.Body> 
      </Modal>
    </main>
  )
}

export default Home;