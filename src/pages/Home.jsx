import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, FreeMode, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../assets/data.json";
import Company from "../components/Company";
import Offer from "../components/Offer";
import useIsMobile from "../hooks/useIsMobile";
import useObserver from "../hooks/useObserver";
import NewsBlock from "../components/NewsBlock";

const Home = () => {
  const { t } = useTranslation();
  const isMobileLG = useIsMobile("991px");
  const referrer = document.referrer;
  const { hostname } = window.location;

  const [objRef, isVisible] = useObserver({ threshold: 0.5 });
  const [objRef2, isVisible2] = useObserver({ threshold: 0.5 });
  const [objRef3, isVisible3] = useObserver({ threshold: 0.5 });

  const [showCallback, setShowCallback] = useState(false);
  const handleCloseCallback = () => setShowCallback(false);

  const [showQuiz, setShowQuiz] = useState(false);
  const handleCloseQuiz = () => setShowQuiz(false);

  const [quizPage, setQuizPage] = useState(1);
  const swiperRef = useRef(null);

  useLayoutEffect(() => {
    var phones = hostname ? data.find((e) => e.value === hostname) ?? {} : {};

    if (phones) {
      phones.source = referrer;
      localStorage.setItem("data", JSON.stringify(phones));
    }
  }, [hostname, referrer]);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(0, 0, false);
    }
  }, []);

  return (
    <>
      <main>
        <Container className="wide">
          <section className="sec-1 mb-6">
            <Row>
              <Col xs={12} md={10} lg={8} xl={6}>
                <div className="d-flex align-items-center mb-4">
                  <img src="/images/tomato.svg" alt="tomato" />
                  <h1 className="mb-0 ms-2 ms-sm-3">
                    YooApp - {t("Сайт и приложение для доставки еды")}
                  </h1>
                </div>
                <p>
                  {t("Получайте на 30% больше прибыли с помощью приложения")}{" "}
                  <br />
                  {t("для заказа доставки или самовывоза готовой еды")}
                </p>
                <div className="d-sm-flex mt-4 mt-lg-5">
                  <a
                    type="button"
                    href={
                      "https://lk.yooapp.ru/reg" +
                      (referrer ? "?source=" + new URL(referrer) : "")
                    }
                    target="_blank"
                    className="btn-light w-xs-100"
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
                  {/* <a
                    href="/pdf/previewyooapp.pdf"
                    className="btn-light w-xs-100 mt-3 mt-sm-0"
                    download
                  >
                    <svg
                      className="fs-12"
                      width="1em"
                      height="1em"
                      viewBox="0 0 20 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.7143 18.8572C17.7143 19.236 17.5637 19.5994 17.2959 19.8673C17.028 20.1352 16.6646 20.2857 16.2857 20.2857H3.42857C3.04969 20.2857 2.68633 20.1352 2.41841 19.8673C2.15051 19.5994 2 19.236 2 18.8572V3.14287C2 2.76398 2.15051 2.40062 2.41841 2.13271C2.68633 1.8648 3.04969 1.71429 3.42857 1.71429H12.7143L17.7143 6.71429V18.8572Z"
                        stroke="currentColor"
                        stroke-width="1.57143"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M12.7143 12.4286L9.85714 15.2857L7 12.4286"
                        stroke="currentColor"
                        stroke-width="1.57143"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M9.85718 15.2857V7.42859"
                        stroke="currentColor"
                        stroke-width="1.57143"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="ms-2">Скачать презентацию</span>
                  </a> */}
                </div>
                <div className="mt-2 d-flex align-items-center">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.33337 8.00001C1.33337 4.31811 4.31814 1.33334 8.00004 1.33334C9.76815 1.33334 11.4638 2.03572 12.7141 3.28596C13.9643 4.53621 14.6667 6.2319 14.6667 8.00001C14.6667 11.6819 11.6819 14.6667 8.00004 14.6667C4.31814 14.6667 1.33337 11.6819 1.33337 8.00001ZM7.82004 10.4067L10.8667 6.40668V6.38668C11.012 6.19614 11.0446 5.94256 10.9522 5.72146C10.8599 5.50037 10.6565 5.34535 10.4189 5.3148C10.1812 5.28424 9.94533 5.3828 9.80004 5.57334L7.28004 8.90668L6.19337 7.52001C6.0469 7.33185 5.81116 7.23613 5.57497 7.2689C5.33878 7.30168 5.13802 7.45797 5.0483 7.6789C4.95859 7.89984 4.99356 8.15185 5.14004 8.34001L6.76671 10.4133C6.89392 10.5743 7.08819 10.6678 7.29337 10.6667C7.4997 10.6662 7.69418 10.5702 7.82004 10.4067Z"
                      fill="currentColor"
                    />
                  </svg>
                  <p className="fs-08 fw-5 ms-2">
                    {t("Запустите собственный сервис доставки за 10 дней")}
                  </p>
                </div>
              </Col>
            </Row>
          </section>
        </Container>

        <section className="sec-2 mb-6">
          <Container>
            <Row xs={1} md={3} className="g-3 g-lg-4">
              <Col>
                <div className="pros-1">
                  <h4>
                    {t("Увеличим количество заказов на 43% и выручку на 52%*")}
                  </h4>
                </div>
                <p className="fs-08 mt-1">
                  {t("*статистика действующего клиента")}
                </p>
              </Col>
              <Col>
                <div className="pros-2">
                  <img
                    src="/images/replacement1.png"
                    alt="animate"
                    className="d-block ms-auto"
                  />
                  <h4>{t("Сформируем максимально подробную статистику")}</h4>
                </div>
              </Col>
              <Col>
                <div className="pros-3">
                  <img
                    src="/images/replacement2.png"
                    alt="animate"
                    className="d-block ms-auto"
                  />
                  <h4>
                    {t(
                      "Автоматизируем процесс заказа на доставку и в заведениях"
                    )}
                  </h4>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="resh" className="sec-3 mb-6">
          <Container>
            <h2>{t("Кому подойдёт сервис?")}</h2>
            <Row
              xs={2}
              md={3}
              lg={4}
              className="justify-content-center g-2 g-sm-3 g-xl-5"
            >
              <Col>
                <figure>
                  <img src="/images/img1.png" alt={t("Кафе и ресторанам")} />
                  <figcaption>{t("Кафе и ресторанам")}</figcaption>
                </figure>
              </Col>
              <Col>
                <figure>
                  <img src="/images/img2.png" alt={t("Сервисам доставки")} />
                  <figcaption>{t("Сервисам доставки")}</figcaption>
                </figure>
              </Col>
              <Col>
                <figure>
                  <img
                    src="/images/img3.png"
                    alt={t("Пиццериям и суши-барам")}
                  />
                  <figcaption>{t("Пиццериям и суши-барам")}</figcaption>
                </figure>
              </Col>
              <Col>
                <figure>
                  <img
                    src="/images/img4.jpg"
                    alt={t("Пекарням и кондитерским")}
                  />
                  <figcaption>{t("Пекарням и кондитерским")}</figcaption>
                </figure>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="sec-4 mb-6">
          <Container>
            <div className="top mb-2 mb-sm-4">
              <h3 className="fw-7 mb-0">{t("В сервис YooApp входит:")}</h3>
              {/* <a href="/" className="d-none d-lg-flex align-items-center">
                <svg
                  className="fs-15"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 11C19.7348 11 19.4804 11.1054 19.2929 11.2929C19.1054 11.4804 19 11.7348 19 12V18C19 18.2652 18.8946 18.5196 18.7071 18.7071C18.5196 18.8946 18.2652 19 18 19H6C5.73478 19 5.48043 18.8946 5.29289 18.7071C5.10536 18.5196 5 18.2652 5 18V6C5 5.73478 5.10536 5.48043 5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5H12C12.2652 5 12.5196 4.89464 12.7071 4.70711C12.8946 4.51957 13 4.26522 13 4C13 3.73478 12.8946 3.48043 12.7071 3.29289C12.5196 3.10536 12.2652 3 12 3H6C5.20435 3 4.44129 3.31607 3.87868 3.87868C3.31607 4.44129 3 5.20435 3 6V18C3 18.7956 3.31607 19.5587 3.87868 20.1213C4.44129 20.6839 5.20435 21 6 21H18C18.7956 21 19.5587 20.6839 20.1213 20.1213C20.6839 19.5587 21 18.7956 21 18V12C21 11.7348 20.8946 11.4804 20.7071 11.2929C20.5196 11.1054 20.2652 11 20 11Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16 5H17.58L11.29 11.28C11.1963 11.373 11.1219 11.4836 11.0711 11.6054C11.0203 11.7273 10.9942 11.858 10.9942 11.99C10.9942 12.122 11.0203 12.2527 11.0711 12.3746C11.1219 12.4964 11.1963 12.607 11.29 12.7C11.383 12.7937 11.4936 12.8681 11.6154 12.9189C11.7373 12.9697 11.868 12.9958 12 12.9958C12.132 12.9958 12.2627 12.9697 12.3846 12.9189C12.5064 12.8681 12.617 12.7937 12.71 12.7L19 6.42V8C19 8.26522 19.1054 8.51957 19.2929 8.70711C19.4804 8.89464 19.7348 9 20 9C20.2652 9 20.5196 8.89464 20.7071 8.70711C20.8946 8.51957 21 8.26522 21 8V4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3H16C15.7348 3 15.4804 3.10536 15.2929 3.29289C15.1054 3.48043 15 3.73478 15 4C15 4.26522 15.1054 4.51957 15.2929 4.70711C15.4804 4.89464 15.7348 5 16 5Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="fs-11 ms-2">Посмотреть демо-версию</span>
              </a> */}
            </div>
            <ul className="list-unstyled row row-cols-1 row-cols-md-2 g-2 g-sm-4">
              <li>
                <Offer
                  title={t("Мобильное приложение")}
                  text={t(
                    "Стильный дизайн и мощный функционал позволит выделиться среди конкурентов и увеличить количество заказов."
                  )}
                  img="/images/mobile-app.png"
                />
              </li>
              <li>
                <Offer
                  title={t("Сайт")}
                  text={t(
                    "Максимально удобен как с компьютера так и с телефона. Поможет легко набрать базу постоянных клиентов."
                  )}
                  img="/images/site.jpg"
                />
              </li>
              <li>
                <Offer
                  title={t("QR-меню")}
                  text={t(
                    "Упростим процедуру заказа в заведениях. Получайте заказы уже с номером стола, меняйте статусы и выставляйте чек."
                  )}
                  img="/images/qrmenu.jpg"
                />
              </li>
              <li>
                <Offer
                  title={t("Система учета")}
                  text={t(
                    "Приём заказов, ведение склада, управление каталогом, акциями, рассылками, полная статистика и многое другое что должно быть в системе управления заведением."
                  )}
                  img="/images/yoo-system.jpg"
                />
              </li>
            </ul>
          </Container>
        </section>

        {/* <Container>
          <section className="sec-5 mb-6">
            <div className="row">
              <div className="col-12 col-lg-8 col-xl-7">
                <h2>
                  Пройдите опрос и получите <br />
                  скидку <span>— 10 тыс. ₽</span> на запуск
                </h2>
                <p>
                  Нужен ещё текст про условия акции или что‑то, что расказывает
                  о выгодне прохождения этого опроса
                </p>
                <div className="sec-5-img">
                  <img src="/images/img5.png" alt="img5" />
                </div>
                <button
                  type="button"
                  onClick={handleShowQuiz}
                  className="btn-info w-xs-100 mt-4 mt-lg-5"
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
                  <span className="ms-2">Пройти опрос</span>
                </button>
              </div>
            </div>
          </section>
        </Container> */}

        <section className="sec-6 mb-6">
          <Container className="wide">
            <h2 className="text-start">{t("Принцип работы")}</h2>
            <Row className="g-2 g-xl-4">
              <Col xs={12} lg={5}>
                <div className="grayBlock-1">
                  <h3 className="text-uppercase deepblue mb-2">{t("старт")}</h3>
                  <h4>{t("Подключение YooApp")}</h4>
                  <p>
                    {t(
                      "Внедрим сайт и мобильное приложение за 2 недели. Интегрируем"
                    )}
                    {" "}
                    {t(
                      "с системой управления заведением, настроим зоны доставки и"
                    )}
                    {t("подключим к онлайн-оплате.")}
                  </p>
                  <svg
                    className="btnPulse"
                    width="146"
                    height="146"
                    viewBox="0 0 146 146"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="146"
                      height="146"
                      rx="73"
                      fill="url(#paint0_linear_98_11080)"
                      fill-opacity="0.7"
                    />
                    <rect
                      x="13"
                      y="13"
                      width="120"
                      height="120"
                      rx="60"
                      fill="url(#paint1_linear_98_11080)"
                      fill-opacity="0.8"
                    />
                    <rect
                      x="13"
                      y="13"
                      width="120"
                      height="120"
                      rx="60"
                      fill="url(#paint2_radial_98_11080)"
                    />
                    <path
                      d="M34.876 65.2024L30.9365 74.238H30.2956L30.6914 73.1891L26.9782 65.2024H24L28.3542 74.2012C28.7688 75.1581 29.4097 75.4894 30.4464 75.5446L31.4454 78.1209H28.0149V80.1636H35.0268L33.1984 75.7102L37.7222 65.2024H34.876Z"
                      fill={isMobileLG ? "black" : "white"}
                    />
                    <path
                      d="M45.8961 65C42.5786 65 38.9407 66.8954 38.9407 70.4471C38.9407 73.7964 42.2016 75.8574 45.8018 75.8574C49.3455 75.8574 52.5498 73.87 52.5498 70.4471C52.5498 66.7482 49.0816 65 45.8961 65ZM41.7493 70.4103C41.7493 68.6253 43.1064 66.5826 45.8207 66.5826C48.3088 66.5826 49.7225 68.3124 49.7225 70.4103C49.7225 72.6738 48.1014 74.3852 45.7641 74.3852C43.408 74.3852 41.7493 72.6554 41.7493 70.4103Z"
                      fill={isMobileLG ? "black" : "white"}
                    />
                    <path
                      d="M61.2478 65C57.9304 65 54.2925 66.8954 54.2925 70.4471C54.2925 73.7964 57.5534 75.8574 61.1536 75.8574C64.6972 75.8574 67.9016 73.87 67.9016 70.4471C67.9016 66.7482 64.4333 65 61.2478 65ZM57.101 70.4103C57.101 68.6253 58.4582 66.5826 61.1724 66.5826C63.6605 66.5826 65.0742 68.3124 65.0742 70.4103C65.0742 72.6738 63.4532 74.3852 61.1159 74.3852C58.7597 74.3852 57.101 72.6554 57.101 70.4103Z"
                      fill={isMobileLG ? "black" : "white"}
                    />
                    <path
                      d="M69.7762 74.2564C69.7762 75.1397 70.4359 75.7286 71.4161 75.7286C72.3962 75.7286 73.0559 75.1397 73.0559 74.2564C73.0559 73.3547 72.3962 72.7658 71.4161 72.7658C70.4359 72.7658 69.7762 73.3547 69.7762 74.2564Z"
                      fill={isMobileLG ? "black" : "white"}
                    />
                    <path
                      d="M74.8141 72.2874C74.8141 74.4956 77.076 75.747 79.3944 75.747C81.1662 75.747 83.7109 75.0293 84.9738 72.269L85.5392 72.5634C85.3507 72.8394 84.9926 73.9252 84.9926 74.514C84.9926 74.9373 85.2565 75.5814 85.8597 75.5814L86.2178 75.563V75.5814H89.5352V73.5203H87.6692V70.0423C87.6692 66.6562 86.067 65.2024 82.4857 65.2024H75.9639L75.9827 67.1899H81.4867C83.9182 67.1899 84.8418 67.9444 84.8418 69.7846C84.8418 70.0791 84.8607 70.8152 84.8418 71.1464C83.5601 70.3183 81.694 69.2326 79.2248 69.2326C76.9252 69.2326 74.8141 70.1527 74.8141 72.2874ZM77.6414 72.3242C77.6414 70.852 79.4321 70.5943 80.2426 70.5943C82.1464 70.5943 84.314 71.9745 84.314 71.9745C84.314 71.9745 83.1642 74.1644 80.4688 74.1644C79.0363 74.1644 77.6414 73.5387 77.6414 72.3242Z"
                      fill={isMobileLG ? "black" : "white"}
                    />
                    <path
                      d="M99.4873 75.747C102.447 75.747 105.217 73.962 105.217 70.3735C105.217 66.8218 102.522 65.0368 99.5627 65.0368C97.1689 65.0368 94.7939 66.2146 93.8891 67.6315H93.2482L94.0965 66.3986V65.2024H91.2691V80.1636H94.0965V74.238L93.2105 72.3794H93.7949C94.7373 74.2196 96.773 75.747 99.4873 75.747ZM98.4883 66.6378C101.127 66.6378 102.39 67.9628 102.39 70.2079C102.39 72.3794 101.203 73.8516 98.5637 73.8516C95.6609 73.8516 94.1153 72.0665 94.1153 70.0975C94.1153 68.018 95.8117 66.6378 98.4883 66.6378Z"
                      fill={isMobileLG ? "black" : "white"}
                    />
                    <path
                      d="M115.87 75.747C118.829 75.747 121.6 73.962 121.6 70.3735C121.6 66.8218 118.905 65.0368 115.945 65.0368C113.551 65.0368 111.176 66.2146 110.272 67.6315H109.631L110.479 66.3986V65.2024H107.652V80.1636H110.479V74.238L109.593 72.3794H110.177C111.12 74.2196 113.156 75.747 115.87 75.747ZM114.871 66.6378C117.51 66.6378 118.773 67.9628 118.773 70.2079C118.773 72.3794 117.585 73.8516 114.946 73.8516C112.043 73.8516 110.498 72.0665 110.498 70.0975C110.498 68.018 112.194 66.6378 114.871 66.6378Z"
                      fill={isMobileLG ? "black" : "white"}
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M73 0C32.6832 0 0 32.6832 0 73C0 113.317 32.6832 146 73 146C113.317 146 146 113.317 146 73C146 32.6832 113.317 0 73 0ZM73 7C36.5492 7 7 36.5492 7 73C7 109.451 36.5492 139 73 139C109.451 139 139 109.451 139 73C139 36.5492 109.451 7 73 7Z"
                      fill="#CCE4FF"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_98_11080"
                        x1="73"
                        y1="0"
                        x2="73"
                        y2="146"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          stop-color={isMobileLG ? "black" : "white"}
                          stop-opacity="0.36"
                        />
                        <stop
                          offset="1"
                          stop-color={isMobileLG ? "black" : "white"}
                        />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_98_11080"
                        x1="73"
                        y1="13"
                        x2="73"
                        y2="133"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#CCE4FF" />
                        <stop
                          offset="1"
                          stop-color="#0070F0"
                          stop-opacity="0.63"
                        />
                      </linearGradient>
                      <radialGradient
                        id="paint2_radial_98_11080"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(73 83) rotate(90) scale(50)"
                      >
                        <stop stop-color="#0077FF" stop-opacity="0.58" />
                        <stop
                          offset="1"
                          stop-color="#8EC3FF"
                          stop-opacity="0"
                        />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              </Col>
              <Col xs={12} lg={7}>
                <Row xs={1} sm={2} className="g-2 g-xl-4">
                  <Col>
                    <div className="grayBlock-2">
                      <h3 className="text-uppercase deepblue mb-2">01</h3>
                      <h4>{t("Клиент совершает заказ")}</h4>
                      <p>
                        {t(
                          "Удобное меню и простота оформления обеспечат быстрый"
                        )}{" "}
                        {t("заказ как на доставку, так и в заведении. А умная")}{" "}
                        {t(
                          "корзина и функционал модификации товаров повысят средний"
                        )}{" "}
                        {t("чек.")}
                      </p>
                    </div>
                  </Col>
                  <Col>
                    <div className="grayBlock-3">
                      <h3 className="text-uppercase deepblue mb-2">02</h3>
                      <h4>
                        {t("Заказ поступает в систему управления заведением")}
                      </h4>
                      <p>
                        iiko, r_keeper, frontpad {t("и т.")}д.{" "}
                        {t("Если у вас нет подобной")}{" "}
                        {t(
                          "системы, то мы настроим управление через админ-панель"
                        )}
                        YooApp {t("или поможем внедрить.")}
                      </p>
                    </div>
                  </Col>
                  <Col>
                    <div className="grayBlock-4">
                      <h3 className="text-uppercase deepblue mb-2">04</h3>
                      <h4>{t("Один раз клиент — всегда клиент")}</h4>
                      <p>
                        {t(
                          "Отправьте клиенту персональное предложение на основе его"
                        )}{" "}
                        {t(
                          "заказов, управляйте акциями и скидками, и он придёт к"
                        )}{" "}
                        {t("вам снова.")}
                      </p>
                    </div>
                  </Col>
                  <Col>
                    <div className="grayBlock-5">
                      <h3 className="text-uppercase deepblue mb-2">03</h3>
                      <h4>{t("Взаимодействие с пользователем")}</h4>
                      <p>
                        {t(
                          "Клиент будет получать уведомления о каждой смене статуса"
                        )}{" "}
                        {t(
                          "заказа. Если доставка задерживается, система уведомит"
                        )}{" "}
                        {t(
                          "его, сохранив лояльность. А после завершения соберёт"
                        )}{" "}
                        {t("обратную связь и попросит оставить отзыв.")}
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="sec-7 mb-6">
          <Container>
            <h2 className="text-start">
              {t("Сихронизируемся с любой системой по API")}
            </h2>
            <img
              src="/images/scheme.png"
              alt="scheme"
              className="d-none d-md-block img-fluid mx-auto"
            />
            <img
              src="/images/schemeMobile.png"
              alt="scheme"
              className="d-block d-md-none img-fluid mx-auto"
            />
          </Container>
        </section>

        <section className="sec-8 mb-6">
          <Container>
            <h2>
              {t("Управление заведением ")} <br />
              {t("станет")} <img src="/images/eyes.png" alt="eyes" />{" "}
              {t("ещё проще")}
            </h2>
            <p className="fs-09 text-center">
              {t("Соберём все заказы, оцифруем работу сотрудников, напомним")}{" "}
              {t("заказать")} <br />
              {t("продукты, подготовим необходимый отчёт")}
            </p>
            {/* <button type="button" className="btn-secondary hmax mt-5 mx-auto">
              <span className="fw-7">Узнать больше о возможностях</span>
            </button> */}
          </Container>
        </section>

        <section className="sec-9 mb-6">
          <Container>
            <Swiper
              className="swiperFade"
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
                <Row xs={1} md={2} className="flex-md-row-reverse g-4">
                  <Col>
                    <div className="textBox">
                      <img
                        src="/images/img7.png"
                        alt={t("Система лояльности")}
                      />
                      <h3>{t("Система лояльности есть, даже если её нет")}</h3>
                      <p>
                        {t(
                          "Мы продумали систему лояльности для заведений которые"
                        )}{" "}
                        {t("пользуются сервисами без системы лояльности.")}
                      </p>
                    </div>
                  </Col>
                  <Col>
                    <div className="img">
                      <img
                        src="/images/img6.png"
                        alt={t("Система лояльности")}
                        className="img-main"
                        ref={objRef}
                      />
                      <img
                        src="/images/img8.png"
                        alt={t("Система лояльности")}
                        className="img-popup"
                        data-observing={isVisible}
                      />
                    </div>
                  </Col>
                </Row>
              </SwiperSlide>
              <SwiperSlide>
                <Row xs={1} md={2} className="flex-md-row-reverse g-4">
                  <Col>
                    <div className="textBox">
                      <img
                        src="/images/img10.png"
                        alt={t("Таргетинг добрался и до Push")}
                      />
                      <h3>{t("Таргетинг добрался и до Push")}</h3>
                      <p>
                        {t("Отсортируйте пользователей, по дню рождения, зоне")}{" "}
                        {t(
                          "доставки или любимому блюду, и отправьте им уведомление"
                        )}{" "}
                        {t("о ваших акциях.")}
                      </p>
                    </div>
                  </Col>
                  <Col>
                    <div className="img2">
                      <img
                        src="/images/img9.png"
                        alt={t("Таргетинг добрался и до Push")}
                        className="img2-main"
                        ref={objRef2}
                      />
                      <img
                        src="/images/img11.png"
                        alt={t("Таргетинг добрался и до Push")}
                        className="img2-popup"
                        data-observing={isVisible2}
                      />
                    </div>
                  </Col>
                </Row>
              </SwiperSlide>
              <SwiperSlide>
                <Row xs={1} md={2} className="flex-md-row-reverse g-4">
                  <Col>
                    <div className="textBox">
                      <img
                        src="/images/img13.png"
                        alt={t("Настроим зоны доставок")}
                      />
                      <h3>{t("Настроим зоны доставок")}</h3>
                      <p>
                        {t(
                          "С нами вы сможете разделить доставку по зонам, исходя из"
                        )}{" "}
                        {t(
                          "этого настроим автоматический расчёт стоимости доставки,"
                        )}{" "}
                        {t("суммы бесплатной доставки и минимального чека.")}
                      </p>
                    </div>
                  </Col>
                  <Col>
                    <div className="img3">
                      <img
                        src="/images/img12.png"
                        alt={t("Настроим зоны доставок")}
                        className="img3-main"
                        ref={objRef3}
                      />
                      <img
                        src="/images/img14.png"
                        alt={t("Настроим зоны доставок")}
                        className="img3-popup"
                        data-observing={isVisible3}
                      />
                    </div>
                  </Col>
                </Row>
              </SwiperSlide>
            </Swiper>
          </Container>
        </section>

        <section id="voz" className="sec-10 mb-6">
          <Container>
            <h2>{t("Предоставляем полную статистику по заказам")}</h2>
            <p className="text-center">
              {t("Отслеживайте ключевые показатели и формируйте ")} <br />
              {t("отчеты, чтобы зарабатывать еще больше")}
            </p>
            <img
              src="/images/stats.jpg"
              alt="statistics"
              className="img-fluid"
            />
          </Container>
        </section>

        <section className="sec-11 mb-6">
          <Container>
            <div className="grid-info">
              <div className="info1">
                <h4>{t("Онлайн-оплата без ограничнений")}</h4>
                <p className="mb-3">
                  {t(
                    "Принимайте оплату в мобильном приложении и на сайте через"
                  )}{" "}
                  {t("популярные платёжные сервисы")}
                </p>
                <ul className="list-unstyled row row-cols-3 g-2">
                  <li>
                    <div className="logotip">
                      <img src="/images/logotips/sber.svg" alt="sber" />
                    </div>
                  </li>
                  <li>
                    <div className="logotip">
                      <img src="/images/logotips/tinkoff.svg" alt="tinkoff" />
                    </div>
                  </li>
                  <li>
                    <div className="logotip">
                      <img
                        src="/images/logotips/maybebank.svg"
                        alt="maybebank"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="logotip">
                      <img src="/images/logotips/alfa.svg" alt="alfa" />
                    </div>
                  </li>
                  <li>
                    <div className="logotip">
                      <img src="/images/logotips/Yoomoney.svg" alt="Yoomoney" />
                    </div>
                  </li>
                  <li>
                    <div className="logotip fw-6">{t("+ другие")}</div>
                  </li>
                </ul>
              </div>
              <div className="info2">
                <div>
                  <h4>{t("Бонусная система")}</h4>
                  <p>
                    {t(
                      "Завоюйте лояльность клиентов, поощряя покупки бонусами на"
                    )}{" "}
                    {t("сайте и в приложении")}
                  </p>
                </div>
                <img
                  src="/images/iPhone.png"
                  alt="iPhone"
                  className="mx-auto"
                />
              </div>
              <div className="info3">
                <h4>{t("Будьте всегда на связи с клиентом")}</h4>
                <p className="mb-3">
                  {t(
                    "Внутренний чат экономит время клиента и деньги на содержании"
                  )}{" "}
                  call-{t("центра")}
                </p>
                <img
                  src="/images/iPhone2.png"
                  alt="iPhone"
                  className="mx-auto"
                />
              </div>
              <div className="info4">
                <div>
                  <h4>{t("Не упустите ни одного клиента!")}</h4>
                  <p>
                    {t("Настройте бонусную систему под свои нужны")} —{" "}
                    {t("меняйте скидки")} {t("в")}{" "}
                    {t(
                      "два клика, оповещайте об акциях и делитесь промокодами."
                    )}
                  </p>
                </div>
                <img
                  src="/images/iPhone3.png"
                  alt="iPhone"
                  className="ms-auto"
                />
              </div>
              <div className="info5">
                <h4>{t("Все управление в одном месте")}</h4>
                <p>
                  {t(
                    "Объедините с YooApp все заведения, или даже бренды, в одном"
                  )}{" "}
                  {t("кабинете")}
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section id="tarif" className="sec-12 mb-6">
          <Container className="wide">
            <Row className="g-3 g-xl-4">
              <Col xs={12} md={4} className="order-1">
                <h3>{t("Выберите план развития вашего бизнеса")}</h3>
              </Col>
              <Col xs={12} md={8} className="order-3 order-md-2">
                <div className="box d-flex align-items-center">
                  <img src="/images/icons/icon1.png" alt="Icon1" />
                  <p className="ms-4">
                    {t(
                      "Админ-панель, обновления приложения, техническая поддержка"
                    )}{" "}
                    {t("и")}{" "}
                    {t("система лояльности включены в стоимость тарифов.")}
                  </p>
                </div>
              </Col>
              <Col xs={12} className="order-2 order-md-3">
                <Swiper
                  className="swiperTarif"
                  spaceBetween={16}
                  slidesPerView={"auto"}
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
                            <h4 className="fw-7 text-uppercase">
                              {t("Аренда")}
                            </h4>
                            <p className="mb-lg-3">{t("8 900 ₽/мес")}</p>
                          </div>
                          <img
                            src="/images/icons/icon2.png"
                            alt={t("Аренда")}
                          />
                        </div>
                        <ul>
                          <li>
                            <span>{t("Запуск")}</span>
                            <span>20 000 ₽</span>
                          </li>
                          <li>
                            <span>{t("Хостинг")}</span>
                            <span>{t("Бесплатно")}</span>
                          </li>
                          <li className="d-none justify-content-between d-lg-flex">
                            <span>
                              {t("Размещение ")} <br />в Google Play и App Store
                            </span>
                            <span>{t("Бесплатно")}</span>
                          </li>
                          <li>
                            <span className="d-none d-lg-block">
                              {t("Подключение доп.")} {t("точки")}
                            </span>
                            <span className="d-lg-none">{t("Доп. точки")}</span>
                            <span>{t("1 290 ₽ / мес")}</span>
                          </li>
                          <li>
                            <span>{t("Сайт")}</span>
                            <span>{t("3 500 ₽ / мес")}</span>
                          </li>
                          <li>
                            <span>{t("Интеграция")}</span>
                            <span>{t("10-20 тыс ₽")}</span>
                          </li>
                        </ul>
                      </div>
                      {/* <button
                        type="button"
                        className="mt-4 w-100 btn-gray hmax"
                      >
                        Подробнее
                      </button> */}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="box h-100 d-flex flex-column justify-content-between">
                      <div>
                        <div className="d-flex flex-row flex-lg-column justify-content-between align-items-center align-items-lg-start">
                          <div>
                            <h4 className="fw-7 text-uppercase">
                              {t("Выкуп")}
                            </h4>
                            <p className="mb-lg-3">350 000 ₽</p>
                          </div>
                          <img src="/images/icons/icon3.png" alt={t("Выкуп")} />
                        </div>
                        <ul>
                          <li>
                            <span>{t("Запуск")}</span>
                            <span>{t("Бесплатно")}</span>
                          </li>
                          <li>
                            <span>{t("Хостинг")}</span>
                            <span>{t("4 000 ₽ / год")}</span>
                          </li>
                          <li className="d-none justify-content-between d-lg-flex">
                            <span>
                              {t("Размещение ")} <br />в Google Play и App Store
                            </span>
                            <span>15 000 ₽</span>
                          </li>
                          <li>
                            <span className="d-none d-lg-block">
                              {t("Подключение доп.")} {t("точки")}
                            </span>
                            <span className="d-lg-none">{t("Доп. точки")}</span>
                            <span>20 000 ₽</span>
                          </li>
                          <li>
                            <span>{t("Сайт")}</span>
                            <span>80 000 ₽</span>
                          </li>
                          <li>
                            <span>{t("Интеграция")}</span>
                            <span>{t("10-20 тыс ₽")}</span>
                          </li>
                        </ul>
                      </div>
                      {/* <button
                        type="button"
                        className="mt-4 w-100 btn-gray hmax"
                      >
                        Подробнее
                      </button> */}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="box h-100 d-flex flex-column justify-content-between">
                      <div>
                        <div className="d-flex flex-row flex-lg-column justify-content-between align-items-center align-items-lg-start">
                          <div>
                            <h4 className="fw-7 text-uppercase">
                              {t("Процент от оборота через")} <br />
                              {t("сервис")}{" "}
                              <span className="fw-4">{t("от 1 до 3%")}</span>
                            </h4>
                          </div>
                          <img
                            src="/images/icons/icon4.png"
                            alt={t("Процент от выручки")}
                          />
                        </div>
                        <ul>
                          <li>
                            <span>{t("Запуск")}</span>
                            <span>20 000 ₽</span>
                          </li>
                          <li>
                            <span>{t("Хостинг")}</span>
                            <span>{t("Бесплатно")}</span>
                          </li>
                          <li className="d-none justify-content-between d-lg-flex">
                            <span>
                              {t("Размещение")} <br />в Google Play и App Store
                            </span>
                            <span>{t("Бесплатно")}</span>
                          </li>
                          <li>
                            <span className="d-none d-lg-block">
                              {t("Подключение доп.")} {t("точки")}
                            </span>
                            <span className="d-lg-none">{t("Доп. точки")}</span>
                            <span>{t("Бесплатно")}</span>
                          </li>
                          <li>
                            <span>{t("Сайт")}</span>
                            <span>{t("Бесплатно")}</span>
                          </li>
                          <li>
                            <span>{t("Интеграция")}</span>
                            <span>{t("10-20 тыс ₽")}</span>
                          </li>
                        </ul>
                      </div>
                      {/* <button
                        type="button"
                        className="mt-4 w-100 btn-gray hmax"
                      >
                        Подробнее
                      </button> */}
                    </div>
                  </SwiperSlide>
                </Swiper>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="d-none d-lg-block sec-13 mb-6">
          <Container>
            <h2 className="text-start ps-5">
              {t("Результат реального клиента")}
            </h2>
            <div className="diagram">
              <img src="/images/diagram.png" alt="Diagram" />
              <div className="text">
                <p>
                  {t(
                    "Увеличение прибыли происходит за счёт индивидуальных акций,"
                  )}{" "}
                  {t(
                    "удобной push-рассылки, умной корзины и уникального функционала"
                  )}{" "}
                  {t("приложения.")}
                </p>
                {/* <button type="button" className="btn-secondary hmax">
                  <svg
                    className="fs-15"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 11C19.7348 11 19.4804 11.1054 19.2929 11.2929C19.1054 11.4804 19 11.7348 19 12V18C19 18.2652 18.8946 18.5196 18.7071 18.7071C18.5196 18.8946 18.2652 19 18 19H6C5.73478 19 5.48043 18.8946 5.29289 18.7071C5.10536 18.5196 5 18.2652 5 18V6C5 5.73478 5.10536 5.48043 5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5H12C12.2652 5 12.5196 4.89464 12.7071 4.70711C12.8946 4.51957 13 4.26522 13 4C13 3.73478 12.8946 3.48043 12.7071 3.29289C12.5196 3.10536 12.2652 3 12 3H6C5.20435 3 4.44129 3.31607 3.87868 3.87868C3.31607 4.44129 3 5.20435 3 6V18C3 18.7956 3.31607 19.5587 3.87868 20.1213C4.44129 20.6839 5.20435 21 6 21H18C18.7956 21 19.5587 20.6839 20.1213 20.1213C20.6839 19.5587 21 18.7956 21 18V12C21 11.7348 20.8946 11.4804 20.7071 11.2929C20.5196 11.1054 20.2652 11 20 11Z"
                      fill="currentColor"
                    />
                    <path
                      d="M16 5H17.58L11.29 11.28C11.1963 11.373 11.1219 11.4836 11.0711 11.6054C11.0203 11.7273 10.9942 11.858 10.9942 11.99C10.9942 12.122 11.0203 12.2527 11.0711 12.3746C11.1219 12.4964 11.1963 12.607 11.29 12.7C11.383 12.7937 11.4936 12.8681 11.6154 12.9189C11.7373 12.9697 11.868 12.9958 12 12.9958C12.132 12.9958 12.2627 12.9697 12.3846 12.9189C12.5064 12.8681 12.617 12.7937 12.71 12.7L19 6.42V8C19 8.26522 19.1054 8.51957 19.2929 8.70711C19.4804 8.89464 19.7348 9 20 9C20.2652 9 20.5196 8.89464 20.7071 8.70711C20.8946 8.51957 21 8.26522 21 8V4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3H16C15.7348 3 15.4804 3.10536 15.2929 3.29289C15.1054 3.48043 15 3.73478 15 4C15 4.26522 15.1054 4.51957 15.2929 4.70711C15.4804 4.89464 15.7348 5 16 5Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="fw-7 ms-2">Хочу так же</span>
                </button> */}
              </div>
            </div>
          </Container>
        </section>

        <section id="example" className="sec-14 mb-6">
          <Container>
            <h2>{t("Компании, которые уже пользуются сервисом")}</h2>
            <Swiper
              ref={swiperRef}
              loop={true}
              spaceBetween={11}
              slidesPerView={6.3}
              centeredSlides={false}
              watchSlidesProgress={true}
              modules={[FreeMode, Mousewheel]}
              freeMode={{
                enabled: true,
                sticky: true,
              }}
              mousewheel={true}
              breakpoints={{
                768: {
                  slidesPerView: 3.2,
                  spaceBetween: 11,
                },
                992: {
                  slidesPerView: 6.3,
                  spaceBetween: 11,
                },
              }}
            >
              <SwiperSlide>
                <Company
                  imgLogo="/images/companies/totos-logo.png"
                  imgCover="/images/companies/totos-cover.png"
                  title="Totos Pizza"
                  ios="https://apps.apple.com/ru/app/totos-pizza-%D1%82%D0%BE%D1%82%D0%BE%D1%81-%D0%BF%D0%B8%D1%86%D1%86%D0%B0/id6450983877"
                  android="https://play.google.com/store/apps/details?id=ru.totos.app"
                  web="https://new.totospizza.ru/"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Company
                  imgLogo="/images/companies/yakinori-logo.png"
                  imgCover="/images/companies/yakinori-cover.png"
                  title={t("Якинори")}
                  ios="https://apps.apple.com/ru/app/%D1%8F%D0%BA%D0%B8%D0%BD%D0%BE%D1%80%D0%B8/id1671795711"
                  android="https://play.google.com/store/apps/details?id=com.gikami.foodapp"
                  web="https://yakinori.ru"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Company
                  imgLogo="/images/companies/dream-logo.png"
                  imgCover="/images/companies/dream-cover.png"
                  title="Dream Sushi"
                  ios="https://apps.apple.com/ru/app/dreamsushi/id6462661474"
                  android="https://play.google.com/store/apps/details?id=ru.dreamsushi.app"
                  web="https://dreamsushi.ru/"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Company
                  imgLogo="/images/companies/seko-logo.png"
                  imgCover="/images/companies/seko-cover.png"
                  title={t("Сэко")}
                  ios="https://apps.apple.com/ru/app/%D1%81%D1%8D%D0%BA%D0%BE/id6461823402"
                  android="https://play.google.com/store/apps/details?id=ru.seko.app"
                  web="https://ceko.su/"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Company
                  imgLogo="/images/companies/akari-logo.png"
                  imgCover="/images/companies/akari-cover.png"
                  title="Akari"
                  ios="https://apps.apple.com/ru/app/%D0%B0%D0%BA%D0%B0%D1%80%D0%B8/id6470714448"
                  android="https://play.google.com/store/apps/details?id=ru.akari.app"
                  web="https://akari116.ru/"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Company
                  imgLogo="/images/companies/filadelfiya-logo.png"
                  imgCover="/images/companies/filadelfiya-cover.png"
                  title={t("Филадельфия")}
                  ios="https://apps.apple.com/ru/app/%D1%84%D0%B8%D0%BB%D0%B0%D0%B4%D0%B5%D0%BB%D1%8C%D1%84%D0%B8%D1%8F/id6446284742"
                  android="https://play.google.com/store/apps/details?id=ru.file.app"
                  web="https://phila-roll.ru/"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Company
                  imgLogo="/images/companies/nyam-sushi-logo.png"
                  imgCover="/images/companies/nyam-sushi-cover.png"
                  title={t("Ням Суши")}
                  ios="https://apps.apple.com/ru/app/%D0%BD%D1%8F%D0%BC-%D1%81%D1%83%D1%88%D0%B8/id6504171451"
                  android="https://play.google.com/store/apps/details?id=ru.nyamsushi.app"
                  web=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <Company
                  imgLogo="/images/companies/parfe-logo.png"
                  imgCover="/images/companies/parfe-cover.png"
                  title={t("Парфе")}
                  ios="https://apps.apple.com/ru/app/parfe/id6479529906"
                  android="https://play.google.com/store/apps/details?id=ru.cafeparfe.app"
                  web="https://cafe-parfe.ru/"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Company
                  imgLogo="/images/companies/pizzart-logo.png"
                  imgCover="/images/companies/pizzart-cover.png"
                  title="Pizzart"
                  ios="https://apps.apple.com/ru/app/pizzart/id6470825610"
                  android="https://play.google.com/store/apps/details?id=ru.pizzart.app"
                  web="https://xn--80apugkva.xn--p1ai/"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Company
                  imgLogo="/images/companies/refettorio-logo.png"
                  imgCover="/images/companies/refettorio-cover.png"
                  title="Refettorio"
                  ios="https://apps.apple.com/ru/app/refettorio-%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7-%D0%BF%D0%B8%D1%86%D1%86%D1%8B/id1636478969"
                  android="https://play.google.com/store/apps/details?id=cafe.refettorio.app"
                  web="https://refettorio.cafe/"
                />
              </SwiperSlide>
            </Swiper>
          </Container>
        </section>
        <NewsBlock />
      </main>
      <Modal
        className="home modalCallback"
        show={showCallback}
        size="xl"
        centered
        onHide={handleCloseCallback}
      >
        <Modal.Body>
          <button type="button" className="close" onClick={handleCloseCallback}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
            </svg>
          </button>
          <Row>
            <Col xs={12} lg={8}>
              <h4>{t("Вопрос-заголовок")}</h4>
              <p className="fs-09 mb-4">
                {t(
                  "Оставьте заявку и мы перезвоним через 15 минут или раньше."
                )}
              </p>
              <div className="fs-09 d-sm-flex">
                <label className="input-labeled w-xs-100">
                  <input type="text" placeholder={t("Имя")} />
                  <span></span>
                </label>
                <label className="input-labeled w-xs-100 ms-sm-3 mt-3 mt-sm-0">
                  <input
                    type="tel"
                    placeholder="+7-___-___-__-__"
                    className=""
                  />
                </label>
                <button
                  type="button"
                  className="btn-primary  w-xs-100 ms-sm-3 mt-3 mt-sm-0"
                >
                  {t("Отправить")}
                </button>
              </div>
              <p className="fs-07 mt-2">
                {t(
                  "Нажимая кнопку «Отправить», вы даёте согласие на обработку"
                )}
                {t("персональных данных и соглашаетесь с Политикой")}
                {t("конфиденциальности")}
              </p>
            </Col>
            <Col xs={12} lg={4} className="d-none d-lg-block">
              <img
                src="/images/photo.jpg"
                alt="manager"
                className="img-fluid rounded-3"
              />
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      <Modal
        className="home"
        show={showQuiz}
        size="xl"
        onHide={handleCloseQuiz}
      >
        <Modal.Body>
          <form action="" className="quiz">
            <fieldset className={quizPage === 1 ? "" : "d-none"}>
              <legend>{t("Какое у вас заведение?")}</legend>
              <Row>
                <Col xs={12} lg={7} xl={9}>
                  <Row>
                    <Col xs={12} xl={5}>
                      <ul>
                        <li>
                          <label>
                            <input type="radio" name="type" />
                            <span className="ms-2">{t("Кафе")}</span>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="radio" name="type" />
                            <span className="ms-2">{t("Ресторан")}</span>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="radio" name="type" />
                            <span className="ms-2">{t("Суши-бар")}</span>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="radio" name="type" />
                            <span className="ms-2">{t("Пиццерия")}</span>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="radio" name="type" />
                            <span className="ms-2">{t("Пекарня")}</span>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="radio" name="type" />
                            <span className="ms-2">{t("Сервис доставки")}</span>
                          </label>
                        </li>
                        <li>
                          <input type="text" placeholder={t("Другое")} />
                        </li>
                      </ul>
                    </Col>
                    <Col className="d-none d-xl-block" xl={7}>
                      <img
                        src="/images/img15.jpg"
                        alt="cafe"
                        className="quiz-img"
                      />
                    </Col>
                  </Row>
                </Col>
                <Col
                  xs={12}
                  lg={5}
                  xl={3}
                  className="mt-4 mt-lg-0 d-flex flex-column justify-content-between"
                >
                  <div>
                    <div className="d-flex">
                      <img
                        src="/images/photo.jpg"
                        alt="replacement"
                        className="photo"
                      />
                      <div>
                        <h5>{t("Сирень")}</h5>
                        <p className="fs-09">{t("Руководитель")}</p>
                      </div>
                    </div>
                    <blockquote>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque accusamus et iusto odio dignissimos
                      </p>
                    </blockquote>
                  </div>

                  <div className="mt-3 mt-sm-4 d-flex align-items-end justify-content-between">
                    <button
                      type="button"
                      className="btn-return"
                      onClick={handleCloseQuiz}
                    >
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.7856 0.928467L7.07129 5.64275L11.7856 10.357"
                          stroke="currentColor"
                          strokeWidth="1.57143"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.2141 15.0714V11.9285C21.2141 10.2615 20.5519 8.66267 19.3731 7.48386C18.1943 6.30507 16.5956 5.64282 14.9284 5.64282H7.07129"
                          stroke="currentColor"
                          strokeWidth="1.57143"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.49993 0.928467L0.785645 5.64275L5.49993 10.357"
                          stroke="currentColor"
                          strokeWidth="1.57143"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <div className="text-center">
                      <p className="quiz-page">1/5</p>
                      <p className="deepblue fw-6">{t("вопрос")}</p>
                    </div>
                    <button
                      type="button"
                      className="btn-primary"
                      onClick={() => setQuizPage(2)}
                    >
                      {t("Далее")}
                    </button>
                  </div>
                </Col>
              </Row>
            </fieldset>
            <fieldset className={quizPage === 2 ? "" : "d-none"}>
              <legend>{t("Что вас заинтересовало больше всего?")}</legend>
              <Row>
                <Col xs={12} lg={7} xl={9}>
                  <Row>
                    <Col xs={12} xl={5}>
                      <ul>
                        <li>
                          <label>
                            <input type="checkbox" name="product" />
                            <span className="ms-2">
                              {t("Мобильное приложение")}
                            </span>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" name="product" />
                            <span className="ms-2">{t("Сайт")}</span>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" name="product" />
                            <span className="ms-2">{t("QR-меню")}</span>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" name="product" />
                            <span className="ms-2">{t("YooApp-система")}</span>
                          </label>
                        </li>
                      </ul>
                    </Col>
                    <Col className="d-none d-xl-block" xl={7}>
                      <img
                        src="/images/img15.jpg"
                        alt="cafe"
                        className="quiz-img"
                      />
                    </Col>
                  </Row>
                </Col>
                <Col
                  xs={12}
                  lg={5}
                  xl={3}
                  className="mt-4 mt-lg-0 d-flex flex-column justify-content-between"
                >
                  <div>
                    <div className="d-flex">
                      <img
                        src="/images/photo.jpg"
                        alt="replacement"
                        className="photo"
                      />
                      <div>
                        <h5>{t("Сирень")}</h5>
                        <p className="fs-09">{t("Руководитель")}</p>
                      </div>
                    </div>
                    <blockquote>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque accusamus et iusto odio dignissimos
                      </p>
                    </blockquote>
                  </div>

                  <div className="mt-3 mt-sm-4 d-flex align-items-end justify-content-between">
                    <button
                      type="button"
                      className="btn-return"
                      onClick={() => setQuizPage(1)}
                    >
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.7856 0.928467L7.07129 5.64275L11.7856 10.357"
                          stroke="currentColor"
                          strokeWidth="1.57143"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.2141 15.0714V11.9285C21.2141 10.2615 20.5519 8.66267 19.3731 7.48386C18.1943 6.30507 16.5956 5.64282 14.9284 5.64282H7.07129"
                          stroke="currentColor"
                          strokeWidth="1.57143"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.49993 0.928467L0.785645 5.64275L5.49993 10.357"
                          stroke="currentColor"
                          strokeWidth="1.57143"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <div className="text-center">
                      <p className="quiz-page">2/5</p>
                      <p className="deepblue fw-6">{t("вопрос")}</p>
                    </div>
                    <button
                      type="button"
                      className="btn-primary"
                      onClick={() => setQuizPage(3)}
                    >
                      {t("Далее")}
                    </button>
                  </div>
                </Col>
              </Row>
            </fieldset>
            <fieldset className={quizPage === 3 ? "" : "d-none"}>
              <legend>{t("Сколько у вас точек (филиалов) ?")}</legend>
              <Row>
                <Col xs={12} lg={7} xl={9}>
                  <Row xs={2} xl={3} className="g-2 g-sm-3">
                    <Col>
                      <label htmlFor="" className="variant">
                        <input type="radio" name="filials" />
                        <figure>
                          <img
                            src="/images/replacement.jpg"
                            alt="replacement"
                            className="img-fluid"
                          />
                          <figcaption>{t("один филиал")}</figcaption>
                        </figure>
                      </label>
                    </Col>
                    <Col>
                      <label htmlFor="" className="variant">
                        <input type="radio" name="filials" />
                        <figure>
                          <img
                            src="/images/replacement.jpg"
                            alt="replacement"
                            className="img-fluid"
                          />
                          <figcaption>
                            {t("больше одной точки в одном городе")}
                          </figcaption>
                        </figure>
                      </label>
                    </Col>
                    <Col>
                      <label htmlFor="" className="variant">
                        <input type="radio" name="filials" />
                        <figure>
                          <img
                            src="/images/replacement.jpg"
                            alt="replacement"
                            className="img-fluid"
                          />
                          <figcaption>
                            {t("больше одной точки в разных городах")}
                          </figcaption>
                        </figure>
                      </label>
                    </Col>
                  </Row>
                </Col>
                <Col
                  xs={12}
                  lg={5}
                  xl={3}
                  className="mt-4 mt-lg-0 d-flex flex-column justify-content-between"
                >
                  <div>
                    <div className="d-flex">
                      <img
                        src="/images/photo.jpg"
                        alt="replacement"
                        className="photo"
                      />
                      <div>
                        <h5>{t("Сирень")}</h5>
                        <p className="fs-09">{t("Руководитель")}</p>
                      </div>
                    </div>
                    <blockquote>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque accusamus et iusto odio dignissimos
                      </p>
                    </blockquote>
                  </div>

                  <div className="mt-3 mt-sm-4 d-flex align-items-end justify-content-between">
                    <button
                      type="button"
                      className="btn-return"
                      onClick={() => setQuizPage(2)}
                    >
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.7856 0.928467L7.07129 5.64275L11.7856 10.357"
                          stroke="currentColor"
                          strokeWidth="1.57143"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.2141 15.0714V11.9285C21.2141 10.2615 20.5519 8.66267 19.3731 7.48386C18.1943 6.30507 16.5956 5.64282 14.9284 5.64282H7.07129"
                          stroke="currentColor"
                          strokeWidth="1.57143"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.49993 0.928467L0.785645 5.64275L5.49993 10.357"
                          stroke="currentColor"
                          strokeWidth="1.57143"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <div className="text-center">
                      <p className="quiz-page">3/5</p>
                      <p className="deepblue fw-6">{t("вопрос")}</p>
                    </div>
                    <button
                      type="button"
                      className="btn-primary"
                      onClick={() => setQuizPage(4)}
                    >
                      {t("Далее")}
                    </button>
                  </div>
                </Col>
              </Row>
            </fieldset>
            <fieldset className={quizPage === 4 ? "" : "d-none"}>
              <legend>
                {t("С каким программным обеспечением работает ваше заведение?")}
              </legend>
              <Row>
                <Col xs={12} lg={7} xl={9}>
                  <Row xs={2} className="g-2 g-sm-3">
                    <Col>
                      <label htmlFor="" className="variant logo">
                        <input type="radio" name="software" />
                        <figure>
                          <img src="/images/iiko.jpg" alt="iiko" />
                          <figcaption>iiko</figcaption>
                        </figure>
                      </label>
                    </Col>
                    <Col>
                      <label htmlFor="" className="variant logo">
                        <input type="radio" name="software" />
                        <figure>
                          <img src="/images/r_keeper.jpg" alt="r_keeper" />
                          <figcaption>r_keeper</figcaption>
                        </figure>
                      </label>
                    </Col>
                    <Col>
                      <label htmlFor="" className="variant logo">
                        <input type="radio" name="software" />
                        <figure>
                          <img src="/images/frontpad.jpg" alt="frontpad" />
                          <figcaption>Frontpad</figcaption>
                        </figure>
                      </label>
                    </Col>
                    <Col>
                      <label htmlFor="" className="variant logo">
                        <input type="radio" name="software" />
                        <figure>
                          <img src="/images/none.jpg" alt="replacement" />
                          <figcaption>{t("нет никакой")}</figcaption>
                        </figure>
                      </label>
                    </Col>
                  </Row>
                  <input
                    type="text"
                    placeholder={t("Другое")}
                    className="mt-3"
                  />
                </Col>
                <Col
                  xs={12}
                  lg={5}
                  xl={3}
                  className="mt-4 mt-lg-0 d-flex flex-column justify-content-between"
                >
                  <div>
                    <div className="d-flex">
                      <img
                        src="/images/photo.jpg"
                        alt="replacement"
                        className="photo"
                      />
                      <div>
                        <h5>{t("Сирень")}</h5>
                        <p className="fs-09">{t("Руководитель")}</p>
                      </div>
                    </div>
                    <blockquote>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque accusamus et iusto odio dignissimos
                      </p>
                    </blockquote>
                  </div>

                  <div className="mt-3 mt-sm-4 d-flex align-items-end justify-content-between">
                    <button
                      type="button"
                      className="btn-return"
                      onClick={() => setQuizPage(3)}
                    >
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.7856 0.928467L7.07129 5.64275L11.7856 10.357"
                          stroke="currentColor"
                          strokeWidth="1.57143"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.2141 15.0714V11.9285C21.2141 10.2615 20.5519 8.66267 19.3731 7.48386C18.1943 6.30507 16.5956 5.64282 14.9284 5.64282H7.07129"
                          stroke="currentColor"
                          strokeWidth="1.57143"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.49993 0.928467L0.785645 5.64275L5.49993 10.357"
                          stroke="currentColor"
                          strokeWidth="1.57143"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <div className="text-center">
                      <p className="quiz-page">4/5</p>
                      <p className="deepblue fw-6">{t("вопрос")}</p>
                    </div>
                    <button
                      type="button"
                      className="btn-primary"
                      onClick={() => setQuizPage(5)}
                    >
                      {t("Далее")}
                    </button>
                  </div>
                </Col>
              </Row>
            </fieldset>
            <fieldset className={quizPage === 5 ? "" : "d-none"}>
              <legend></legend>
              <Row>
                <Col className="d-none d-lg-block" xs={12} lg={7} xl={9}>
                  <img
                    src="/images/replacement.jpg"
                    alt="replacement"
                    className="big-img"
                  />
                  <button
                    type="button"
                    className="btn-return mt-3"
                    onClick={() => setQuizPage(4)}
                  >
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 22 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.7856 0.928467L7.07129 5.64275L11.7856 10.357"
                        stroke="currentColor"
                        strokeWidth="1.57143"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.2141 15.0714V11.9285C21.2141 10.2615 20.5519 8.66267 19.3731 7.48386C18.1943 6.30507 16.5956 5.64282 14.9284 5.64282H7.07129"
                        stroke="currentColor"
                        strokeWidth="1.57143"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.49993 0.928467L0.785645 5.64275L5.49993 10.357"
                        stroke="currentColor"
                        strokeWidth="1.57143"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </Col>
                <Col xs={12} lg={5} xl={3}>
                  <p className="mb-3">
                    {t(
                      "Завершите опрос и получите демо-доступ для демонстрации"
                    )}
                  </p>
                  <label className="input-labeled w-xs-100 mb-3">
                    <input type="text" placeholder={t("Имя")} />
                    <span>{t("Имя")}</span>
                  </label>
                  <label className="input-labeled w-xs-100 mb-3">
                    <input type="tel" placeholder="+ 7-(9__)-___-__-__" />
                    <span>{t("Номер телефона")}</span>
                  </label>
                  <label className="input-labeled w-xs-100 mb-3">
                    <input type="text" placeholder="" />
                    <span>{t("Город")}</span>
                  </label>
                  <label className="input-labeled w-xs-100 mb-3">
                    <input type="text" placeholder="" />
                    <span>{t("Название заведения")}</span>
                  </label>

                  <div className="d-flex">
                    <button
                      type="button"
                      className="d-lg-none btn-return me-3"
                      onClick={() => setQuizPage(4)}
                    >
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.7856 0.928467L7.07129 5.64275L11.7856 10.357"
                          stroke="currentColor"
                          strokeWidth="1.57143"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.2141 15.0714V11.9285C21.2141 10.2615 20.5519 8.66267 19.3731 7.48386C18.1943 6.30507 16.5956 5.64282 14.9284 5.64282H7.07129"
                          stroke="currentColor"
                          strokeWidth="1.57143"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.49993 0.928467L0.785645 5.64275L5.49993 10.357"
                          stroke="currentColor"
                          strokeWidth="1.57143"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button type="submit" className="btn-primary">
                      {t("отправить")}
                    </button>
                  </div>
                </Col>
              </Row>
            </fieldset>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Home;
