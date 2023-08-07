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
import Diagram from '../assets/imgs/diagram.png';
import MobileApp from '../assets/imgs/mobile-app.png';
import Site from '../assets/imgs/site.jpg';
import Qrmenu from '../assets/imgs/qrmenu.jpg';
import System from '../assets/imgs/yoo-system.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Home = () => {
  return (
    <main>
      <Container className='wide'>
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
      </Container>

      <section className='sec-2 mb-6'>
        <Container>
          <Row>
            <Col>
              <div className="pros-1">
                <h4>Увеличим количество заказов на 43% и выручку на 52%*</h4>
              </div>
              <p className="fs-08 mt-1">*статистика действующего клиента</p>
            </Col>
            <Col>
              <div className="pros-2">
                <img src="/imgs/replacement1.png" alt="animate" className='d-block ms-auto' />
                <h4>Сформируем максимально подробную статистику</h4>
              </div>
            </Col>
            <Col>
              <div className="pros-3">
                <img src="/imgs/replacement2.png" alt="animate" className='d-block ms-auto' />
                <h4>Автоматизируем процесс заказа на доставку и в заведениях</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='sec-3 mb-6'>
        <Container>
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
        </Container>
      </section>

      <section className='sec-4 mb-6'>
        <Container>
          <div className="top mb-4">
            <h3 className='fw-7 mb-0'>Заголовок о том, что входит в предложение</h3>
            <a href="" className='d-flex align-items-center'>
              <Start className="fs-15"/>
              <span className='fs-11 ms-2'>Посмотреть демо-версию</span>
            </a>
          </div>
          <ul className="list-unstyled row row-cols-2 g-4">
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
      </Container>

      <section className='sec-6 mb-6'>
        <Container className='wide'>
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
        </Container>
      </section>

      <section className='sec-7 px-5 mb-6'>
        <Container>
          <h2 className='text-start'>Сихронизируемся с любой системой по API</h2>
          <img src="/imgs/scheme.png" alt="scheme" className='img-fluid'/>
        </Container>
      </section>

      <section className='sec-8 mb-6'>
        <Container>
          <h2>Управление заведением <br/>станет <img src="/imgs/eyes.png" alt="eyes"/> ещё проще</h2>
          <p className="fs-09 text-center">Соберём все заказы, оцифруем работу сотрудников, напомним заказать <br/>продукты, подготовим необходимый отчёт</p>
          <button type='button' className='btn-secondary hmax mt-5 mx-auto'>
            <span className='fw-7'>Узнать больше о возможностях</span>
          </button>
        </Container>
      </section>

      <section className='sec-9 mb-6'>
        <Container>

        </Container>
      </section>

      <section className='sec-10 mb-6'>
        <Container>
          <h2>Предоставляем полную статистику по заказам</h2>
          <p className="text-center">Отслеживайте ключевые показатели и формируйте <br/>отчеты, чтобы зарабатывать еще больше</p>
          <img src="/imgs/stats.jpg" alt="statistics" className='img-fluid'/>
        </Container>
      </section>

      <section className='sec-11 mb-6'>
        <Container className='wide'>
          <div className="grid-info">
            <div className="info1">
              <h4>Онлайн-оплата без ограничнений</h4>
              <p>Принимайте оплату в мобильном приложении и на сайте через популярные платёжные сервисы</p>
            </div>
            <div className="info2">
              <h4>Бонусная система</h4>
              <p>Завоюйте лояльность клиентов, поощряя покупки бонусами на сайте и в приложении</p>
            </div>
            <div className="info3">
              <h4>Будьте всегда на связи с клиентом</h4>
              <p>Внутренний чат экономит время клиента и деньги на содержании call-центра</p>
            </div>
            <div className="info4">
              <h4>Не упустите ни одного клиента!</h4>
              <p>Настройте бонусную систему под свои нужны — меняйте скидки в два клика, оповещайте об акциях и делитесь промокодами.</p>
            </div>
            <div className="info5">
              <h4>Все управление в одном месте</h4>
              <p>Объедините с Yoo.App все заведения, или даже бренды, в одном кабинете</p>
            </div>
          </div>
        </Container>
      </section>

      <section className='sec-12 mb-6'>
        <Container className='wide'>
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
              <div className="box h-100 d-flex flex-column justify-content-between">
                <div>
                  <h4 className='fw-7 text-uppercase'>Аренда</h4>
                  <p className='mb-3'>6 000 ₽/мес</p>
                  <img src={Icon2} alt="Аренда" />
                  <ul>
                    <li>
                      <span>Запуск</span>
                      <span>30&nbsp;000&nbsp;₽</span>
                    </li>
                    <li>
                      <span>Хостинг</span>
                      <span>Бесплатно</span>
                    </li>
                    <li>
                      <span>Размещение <br/>в&nbsp;Google&nbsp;Play и&nbsp;App&nbsp;Store</span>
                      <span>Бесплатно</span>
                    </li>
                    <li>
                      <span>Подключение доп.&nbsp;точки</span>
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
            </Col>
            <Col md={4}>
              <div className="box h-100 d-flex flex-column justify-content-between">
                <div>
                  <h4 className='fw-7 text-uppercase'>Выкуп</h4>
                  <p className='mb-3'>240 000 ₽</p>
                  <img src={Icon3} alt="Выкуп" />
                  <ul>
                    <li>
                      <span>Запуск</span>
                      <span>Бесплатно</span>
                    </li>
                    <li>
                      <span>Хостинг</span>
                      <span>4&nbsp;000&nbsp;₽&nbsp;/&nbsp;год</span>
                    </li>
                    <li>
                      <span>Размещение <br/>в&nbsp;Google&nbsp;Play и&nbsp;App&nbsp;Store</span>
                      <span>15&nbsp;000&nbsp;₽</span>
                    </li>
                    <li>
                      <span>Подключение доп.&nbsp;точки</span>
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
            </Col>
            <Col md={4}>
              <div className="box h-100 d-flex flex-column justify-content-between">
                <div>
                  <h4 className='fw-7 text-uppercase'>Процент от выручки</h4>
                  <p className='mb-3'>от 1 до 3%</p>
                  <img src={Icon4} alt="Процент от выручки" />
                  <ul>
                    <li>
                      <span>Запуск</span>
                      <span>30&nbsp;000&nbsp;₽</span>
                    </li>
                    <li>
                      <span>Хостинг</span>
                      <span>Бесплатно</span>
                    </li>
                    <li>
                      <span>Размещение <br/>в&nbsp;Google&nbsp;Play и&nbsp;App&nbsp;Store</span>
                      <span>Бесплатно</span>
                    </li>
                    <li>
                      <span>Подключение доп.&nbsp;точки</span>
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
            </Col>
          </Row>
        </Container>
      </section>

      <section className='sec-13 mb-6'>
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

      <section className='sec-14 mb-6'>
        <Container>
          <h2>Компании, которые уже пользуются сервисом</h2>
          <Swiper
            spaceBetween={11}
            slidesPerView={4}
          >
            <SwiperSlide>
              <img src="/imgs/companies/totos-logo.png" alt="totos" className='img-fluid d-block mx-auto'/>
              <img src="/imgs/companies/totos-cover.png" alt="totos" className='img-fluid d-block mx-auto'/>
              <button type='button' className='btn-secondary hmax mt-4 mx-auto'>
                <Start className="fs-15"/>
                <span className='fw-7 ms-2'>Посмотреть</span>
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/imgs/companies/yakinori-logo.png" alt="yakinori" className='img-fluid d-block mx-auto'/>
              <img src="/imgs/companies/yakinori-cover.png" alt="yakinori" className='img-fluid d-block mx-auto'/>
              <button type='button' className='btn-secondary hmax mt-4 mx-auto'>
                <Start className="fs-15"/>
                <span className='fw-7 ms-2'>Посмотреть</span>
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/imgs/companies/xiao-logo.png" alt="xiao" className='img-fluid d-block mx-auto'/>
              <img src="/imgs/companies/xiao-cover.png" alt="xiao" className='img-fluid d-block mx-auto'/>
              <button type='button' className='btn-secondary hmax mt-4 mx-auto'>
                <Start className="fs-15"/>
                <span className='fw-7 ms-2'>Посмотреть</span>
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/imgs/companies/dream-logo.png" alt="dream" className='img-fluid d-block mx-auto'/>
              <img src="/imgs/companies/dream-cover.png" alt="dream" className='img-fluid d-block mx-auto'/>
              <button type='button' className='btn-secondary hmax mt-4 mx-auto'>
                <Start className="fs-15"/>
                <span className='fw-7 ms-2'>Посмотреть</span>
              </button>
            </SwiperSlide>
          </Swiper>
        </Container>
      </section>
    </main>
  )
}

export default Home;