import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useTranslation } from "react-i18next";
import { Link as LinkRoute, useParams } from "react-router-dom";
import { Link } from "react-scroll";
import useIsMobile from "../hooks/useIsMobile";
import LanguageSwitcher from "./LanguageSwitcher";
import data from "../assets/data.json";

const Header = () => {
  const { hostname } = window.location;
  const phones = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : hostname
    ? data.find((e) => e.value === hostname)
    : false;

  const { t } = useTranslation();
  const isMobileLG = useIsMobile("991px");

  const [showMenu, setShowMenu] = useState(false);
  const handleCloseMenu = () => setShowMenu(false);
  const handleShowMenu = () => setShowMenu(true);

  return (
    <header>
      <Container className="wide">
        <div className="box d-flex justify-content-between">
          {isMobileLG && (
            <LinkRoute to="/">
              <svg
                className="logo"
                width="122"
                height="20"
                viewBox="0 0 122 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5949 0.753033L8.67061 12.0475H7.86952L8.36431 10.7363L3.72271 0.753033H0L5.44269 12.0015C5.96104 13.1977 6.76213 13.6117 8.05801 13.6807L9.30677 16.9012H5.01859V19.4545H13.7834L11.498 13.8878L17.1527 0.753033H13.5949Z"
                  fill={"white"}
                />
                <path
                  d="M27.3701 0.5C23.2233 0.5 18.6759 2.86931 18.6759 7.30889C18.6759 11.4954 22.7521 14.0718 27.2523 14.0718C31.6818 14.0718 35.6873 11.5875 35.6873 7.30889C35.6873 2.68529 31.352 0.5 27.3701 0.5ZM22.1866 7.26289C22.1866 5.03159 23.883 2.47826 27.2759 2.47826C30.386 2.47826 32.1531 4.64054 32.1531 7.26289C32.1531 10.0923 30.1268 12.2315 27.2052 12.2315C24.26 12.2315 22.1866 10.0693 22.1866 7.26289Z"
                  fill={"white"}
                />
                <path
                  d="M46.5598 0.5C42.413 0.5 37.8656 2.86931 37.8656 7.30889C37.8656 11.4954 41.9417 14.0718 46.442 14.0718C50.8715 14.0718 54.877 11.5875 54.877 7.30889C54.877 2.68529 50.5417 0.5 46.5598 0.5ZM41.3763 7.26289C41.3763 5.03159 43.0727 2.47826 46.4655 2.47826C49.5756 2.47826 51.3428 4.64054 51.3428 7.26289C51.3428 10.0923 49.3165 12.2315 46.3949 12.2315C43.4497 12.2315 41.3763 10.0693 41.3763 7.26289Z"
                  fill={"white"}
                />
                <path
                  d="M57.2202 12.0705C57.2202 13.1747 58.0449 13.9108 59.2701 13.9108C60.4953 13.9108 61.3199 13.1747 61.3199 12.0705C61.3199 10.9434 60.4953 10.2073 59.2701 10.2073C58.0449 10.2073 57.2202 10.9434 57.2202 12.0705Z"
                  fill={"white"}
                />
                <path
                  d="M63.5176 9.6092C63.5176 12.3696 66.3449 13.9338 69.243 13.9338C71.4578 13.9338 74.6386 13.0366 76.2172 9.58619L76.924 9.95424C76.6884 10.2993 76.2407 11.6565 76.2407 12.3926C76.2407 12.9216 76.5706 13.7267 77.3246 13.7267L77.7722 13.7037V13.7267H81.9191V11.1504H79.5865V6.80283C79.5865 2.57027 77.5837 0.753033 73.1071 0.753033H64.9548L64.9784 3.23736H71.8583C74.8978 3.23736 76.0523 4.18048 76.0523 6.48079C76.0523 6.84883 76.0758 7.76895 76.0523 8.18301C74.4501 7.14787 72.1175 5.79069 69.031 5.79069C66.1565 5.79069 63.5176 6.94085 63.5176 9.6092ZM67.0518 9.6552C67.0518 7.81496 69.2901 7.49292 70.3033 7.49292C72.683 7.49292 75.3925 9.21814 75.3925 9.21814C75.3925 9.21814 73.9553 11.9555 70.586 11.9555C68.7953 11.9555 67.0518 11.1734 67.0518 9.6552Z"
                  fill={"white"}
                />
                <path
                  d="M94.3591 13.9338C98.0583 13.9338 101.522 11.7025 101.522 7.21688C101.522 2.7773 98.1525 0.546005 94.4534 0.546005C91.4611 0.546005 88.4923 2.0182 87.3614 3.78943H86.5603L87.6206 2.24823V0.753033H84.0863V19.4545H87.6206V12.0475L86.5132 9.72421H87.2436C88.4216 12.0245 90.9663 13.9338 94.3591 13.9338ZM93.1104 2.54727C96.409 2.54727 97.9876 4.20349 97.9876 7.00985C97.9876 9.72421 96.5032 11.5645 93.2046 11.5645C89.5761 11.5645 87.6441 9.33316 87.6441 6.87184C87.6441 4.27249 89.7646 2.54727 93.1104 2.54727Z"
                  fill={"white"}
                />
                <path
                  d="M114.837 13.9338C118.536 13.9338 122 11.7025 122 7.21688C122 2.7773 118.631 0.546005 114.932 0.546005C111.939 0.546005 108.971 2.0182 107.84 3.78943H107.038L108.099 2.24823V0.753033H104.565V19.4545H108.099V12.0475L106.991 9.72421H107.722C108.9 12.0245 111.444 13.9338 114.837 13.9338ZM113.589 2.54727C116.887 2.54727 118.466 4.20349 118.466 7.00985C118.466 9.72421 116.981 11.5645 113.683 11.5645C110.054 11.5645 108.122 9.33316 108.122 6.87184C108.122 4.27249 110.243 2.54727 113.589 2.54727Z"
                  fill={"white"}
                />
              </svg>
            </LinkRoute>
          )}
          {isMobileLG && <LanguageSwitcher />}
          <button
            type="button"
            className="d-flex d-lg-none"
            onClick={handleShowMenu}
          >
            <svg
              className="fs-18"
              width="1em"
              height="1em"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0001 15.7857C14.5386 15.7857 15.7858 14.5385 15.7858 13C15.7858 11.4615 14.5386 10.2143 13.0001 10.2143C11.4616 10.2143 10.2144 11.4615 10.2144 13C10.2144 14.5385 11.4616 15.7857 13.0001 15.7857Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.75 15.3214C24.0321 15.3214 25.0714 14.2821 25.0714 13C25.0714 11.7179 24.0321 10.6786 22.75 10.6786C21.4679 10.6786 20.4286 11.7179 20.4286 13C20.4286 14.2821 21.4679 15.3214 22.75 15.3214Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.25002 15.3214C4.53211 15.3214 5.57145 14.2821 5.57145 13C5.57145 11.7179 4.53211 10.6786 3.25002 10.6786C1.96793 10.6786 0.928589 11.7179 0.928589 13C0.928589 14.2821 1.96793 15.3214 3.25002 15.3214Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <Offcanvas
            show={showMenu}
            onHide={handleCloseMenu}
            placement={"end"}
            responsive="lg"
            className="home w-100"
          >
            <Offcanvas.Body>
              <button
                type="button"
                className="d-lg-none close"
                onClick={handleCloseMenu}
              >
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
              <nav className={"w-100" + (isMobileLG ? " mobile-menu" : "")}>
                <ul
                  className={
                    "d-flex w-100 justify-content-evenly" +
                    (isMobileLG ? " flex-column" : "")
                  }
                  onClick={handleCloseMenu}
                >
                  {/* <li>
                  <a href="/#resh">Решения</a>
                </li> */}
                  <li className={isMobileLG ? "lang" : ""}>
                    <LinkRoute to="/">YooEda</LinkRoute>
                  </li>

                  <li>
                    <Link to="voz">{t("Возможности")}</Link>
                  </li>
                  <li>
                    <Link to="tarif">{t("Тарифы")}</Link>
                  </li>
                  <li>
                    <Link to="example">{t("Примеры")}</Link>
                  </li>
                  <li>
                    <a
                      href={
                        "https://lk.yooapp.ru/" +
                        (phones?.source
                          ? "?source=" + new URL(phones.source)
                          : "")
                      }
                      target="_blank"
                    >
                      {t("Войти")}
                    </a>
                  </li>
                  {phones?.phone ? (
                    <li>
                      <a className="fw-7" href={"tel:" + phones.phone}>
                        {phones.phone}
                      </a>
                    </li>
                  ) : (
                    <>
                      <li>
                        <a className="fw-7" href="tel:+79274299903">
                          +7(927)429-99-03
                        </a>
                      </li>
                      <li>
                        <a className="fw-7" href="tel:+79172555060">
                          +7(917)255-50-60
                        </a>
                      </li>
                    </>
                  )}
                  {!isMobileLG && (
                    <li>
                      <LanguageSwitcher />
                    </li>
                  )}
                </ul>
              </nav>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </Container>
    </header>
  );
};

export default Header;
