import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";

const Redirect = () => {
  let { brandId } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [redirectStatus, setRedirectStatus] = useState("");
  const [deviceInfo, setDeviceInfo] = useState({
    isIpad: false,
    isIphone: false,
    isIos: false,
    isAndroid: false,
    isMobile: false,
    isDesktop: false,
    browser: "unknown",
  });

  // Детектор браузера и устройства
  const detectDeviceAndBrowser = () => {
    const userAgent = navigator.userAgent.toLowerCase();

    const isIpad = /ipad/.test(userAgent);
    const isIphone =
      !isIpad && (/iphone/.test(userAgent) || /ipod/.test(userAgent));
    const isIos = isIpad || isIphone;
    const isAndroid = !isIos && /android/.test(userAgent);
    const isMobile = isIos || isAndroid;
    const isDesktop = !isMobile;

    let browser = "unknown";
    if (/chrome/.test(userAgent) && !/edg/.test(userAgent)) browser = "chrome";
    else if (/safari/.test(userAgent) && !/chrome/.test(userAgent))
      browser = "safari";
    else if (/firefox/.test(userAgent)) browser = "firefox";
    else if (/edg/.test(userAgent)) browser = "edge";
    else if (/samsung/.test(userAgent)) browser = "samsung";

    return { isIpad, isIphone, isIos, isAndroid, isMobile, isDesktop, browser };
  };

  // Запрет выделения, перетаскивания и контекстного меню
  useEffect(() => {
    const preventDefaultActions = (e) => {
      e.preventDefault();
      return false;
    };

    document.ondragstart = preventDefaultActions;
    document.onselectstart = preventDefaultActions;
    document.oncontextmenu = preventDefaultActions;

    return () => {
      document.ondragstart = null;
      document.onselectstart = null;
      document.oncontextmenu = null;
    };
  }, []);

  // Получение всех ссылок из данных
  const getAllLinks = (data) => {
    const appOptions = data?.app?.options || {};
    const siteOptions = data?.site?.options || {};

    // Данные приложения
    const androidPackage = appOptions.nameAndroid || appOptions.name;
    const iosAppId = appOptions.accountApple;
    const appName = appOptions.title || appOptions.titleIos || "Приложение";
    const appScheme = appOptions.scheme;

    // Данные сайта
    const siteDomains = siteOptions.domains || [];
    const primaryDomain = siteDomains[0] || "example.com";
    const websiteUrl = `https://${primaryDomain}`;

    // Генерация ссылок для приложения
    const androidMarket = androidPackage
      ? `market://details?id=${androidPackage}`
      : "";
    const androidSiteMarket = androidPackage
      ? `https://play.google.com/store/apps/details?id=${androidPackage}`
      : "";

    const iosMarket = iosAppId
      ? `https://apps.apple.com/ru/app/id${iosAppId}`
      : "";

    const universalLink = androidPackage
      ? `https://${androidPackage}.app.goo.gl/`
      : "";

    const deepLink = appScheme ? `${appScheme}://open` : "";

    return {
      // Приложение
      androidPackage,
      iosAppId,
      appName,
      appScheme,
      androidMarket,
      androidSiteMarket,
      iosMarket,
      universalLink,
      deepLink,

      // Сайт
      websiteUrl,
      siteDomains,
      siteTitle: siteOptions.title || appName,
    };
  };

  // Проверка активности приложения и сайта
  const checkAvailability = (data) => {
    const currentTime = new Date();

    // Проверка приложения
    const appActive = data?.app?.status === 1;
    const appStart = new Date(data?.app?.start);
    const appEnd = new Date(data?.app?.end);
    const appInTimeRange = currentTime >= appStart && currentTime <= appEnd;
    const appAvailable = appActive && appInTimeRange;

    // Проверка сайта
    const siteActive = data?.site?.status === 1;
    const siteStart = new Date(data?.site?.start);
    const siteEnd = new Date(data?.site?.end);
    const siteInTimeRange = currentTime >= siteStart && currentTime <= siteEnd;
    const siteAvailable = siteActive && siteInTimeRange;

    return { appAvailable, siteAvailable };
  };

  // Умный редирект с приоритетами
  const performSmartRedirect = async (links, deviceInfo, availability) => {
    const { appAvailable, siteAvailable } = availability;

    const {
      appScheme,
      deepLink,
      androidMarket,
      androidSiteMarket,
      iosMarket,
      universalLink,
      websiteUrl,
    } = links;

    // Для десктопов - редирект на сайт
    if (deviceInfo.isDesktop && siteAvailable) {
      setRedirectStatus("Перенаправление на сайт...");
      setTimeout(() => {
        window.location.href = websiteUrl;
      }, 500);
      return;
    }

    // Для мобильных устройств
    if (deviceInfo.isMobile && appAvailable) {
      if (deviceInfo.isAndroid && links.androidPackage) {
        // Android логика
        setRedirectStatus("Открываем приложение...");

        // 1. Пробуем кастомную схему
        if (appScheme) {
          setTimeout(() => {
            window.location.href = deepLink;
          }, 100);
        }

        // 2. Fallback на маркет
        setTimeout(() => {
          if (!document.hidden) {
            window.location.href = androidMarket;
          }
        }, 800);

        // 3. Final fallback на Play Store в браузере
        setTimeout(() => {
          if (!document.hidden) {
            window.location.href = androidSiteMarket;
          }
        }, 2000);
      } else if (deviceInfo.isIos && links.iosAppId) {
        // iOS логика
        setRedirectStatus("Открываем приложение...");

        // 1. Пробуем Universal Link или кастомную схему
        const primaryUrl = universalLink || (appScheme ? deepLink : iosMarket);
        setTimeout(() => {
          window.location.href = primaryUrl;
        }, 100);

        // 2. Fallback на App Store
        setTimeout(() => {
          if (!document.hidden && !universalLink) {
            window.location.href = iosMarket;
          }
        }, 1500);
      }
    } else if (siteAvailable) {
      // Если приложение недоступно, но сайт доступен - редирект на сайт
      setRedirectStatus("Перенаправление на сайт...");
      setTimeout(() => {
        window.location.href = websiteUrl;
      }, 1000);
    } else {
      // Если ничего не доступно
      setRedirectStatus("Сервис временно недоступен");
      setLoading(false);
    }

    // Если редирект не сработал через 3 секунды, показываем кнопки
    setTimeout(() => {
      if (!document.hidden) {
        setLoading(false);
      }
    }, 3000);
  };

  // Загрузка данных при монтировании компонента
  useEffect(() => {
    const fetchDataAndRedirect = async () => {
      try {
        const detectedDevice = detectDeviceAndBrowser();
        setDeviceInfo(detectedDevice);

        // Загружаем данные по brandId
        const response = await axios.get(
          `https://api.yooapp.ru/site/one/?brandId=${brandId}`,
          {
            mode: "cors",
            timeout: 10000,
          }
        );

        setData(response.data);
        const links = getAllLinks(response.data);
        const availability = checkAvailability(response.data);

        // Запускаем умный редирект
        await performSmartRedirect(links, detectedDevice, availability);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);

        if (error.response?.status === 404) {
          setRedirectStatus("Бренд не найден. Проверьте ID.");
        } else if (
          error.code === "NETWORK_ERROR" ||
          error.code === "ECONNABORTED"
        ) {
          setRedirectStatus("Ошибка сети. Проверьте подключение к интернету.");
        } else {
          setRedirectStatus("Произошла ошибка при загрузке данных.");
        }

        setLoading(false);
      }
    };

    if (brandId) {
      fetchDataAndRedirect();
    } else {
      setRedirectStatus("ID бренда не указан в URL");
      setLoading(false);
    }
  }, [brandId]);

  // Ручной редирект по клику
  const handleManualRedirect = (type, links) => {
    const {
      appScheme,
      deepLink,
      androidMarket,
      androidSiteMarket,
      iosMarket,
      websiteUrl,
    } = links;

    switch (type) {
      case "app":
        // Прямое открытие приложения через схему
        if (appScheme) {
          window.location.href = deepLink;
        }
        break;

      case "android":
        // Открытие в маркете или Play Store
        if (deviceInfo.isAndroid && androidMarket) {
          window.location.href = androidMarket;
        } else {
          window.open(androidSiteMarket, "_blank");
        }
        break;

      case "ios":
        // Открытие в App Store
        if (iosMarket) {
          window.open(iosMarket, "_blank");
        }
        break;

      case "website":
        // Открытие сайта
        if (websiteUrl) {
          window.open(websiteUrl, "_blank");
        }
        break;

      default:
        break;
    }
  };

  // Получение данных для отображения
  const getDisplayData = () => {
    if (!data) {
      return {
        appName: "Приложение",
        siteName: "Сайт",
        versionAndroid: "0.0.1",
        versionIos: "0.0.1",
        colorMain: "#698ca1",
        colorText: "#954225",
        websiteUrl: "#",
      };
    }

    const appOptions = data.app?.options || {};
    const siteOptions = data.site?.options || {};
    const links = getAllLinks(data);

    return {
      appName: appOptions.title || appOptions.titleIos || "Приложение",
      siteName: siteOptions.title || appOptions.title || "Сайт",
      versionAndroid: appOptions.versionAndroid || "0.0.1",
      versionIos: appOptions.versionIos || "0.0.1",
      colorMain: appOptions.colorMain || "#698ca1",
      colorText: appOptions.colorText || "#954225",
      scheme: appOptions.scheme || null,
      websiteUrl: links.websiteUrl,
      siteDomains: links.siteDomains,
    };
  };

  const displayData = getDisplayData();
  const links = data ? getAllLinks(data) : null;
  const availability = data
    ? checkAvailability(data)
    : { appAvailable: false, siteAvailable: false };

  if (loading) {
    return (
      <div
        style={{
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundColor: "#fff",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
          color: "#999",
          zIndex: 1000,
          fontFamily: '"Open Sans", "Arial", "Tahoma", "Verdana"',
        }}
      >
        <div
          style={{
            fontSize: "20px",
            marginBottom: "15px",
            color: displayData.colorText,
            fontWeight: "600",
          }}
        >
          {deviceInfo.isDesktop ? displayData.siteName : displayData.appName}
        </div>
        <div style={{ fontSize: "16px", marginBottom: "10px" }}>
          {redirectStatus || "Подготовка редиректа..."}
        </div>
        <div
          style={{
            width: "40px",
            height: "40px",
            border: `3px solid ${displayData.colorMain}`,
            borderTop: `3px solid transparent`,
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        ></div>
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    );
  }

  // Если редирект не произошел, показываем кнопки для ручного перехода
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
        backgroundColor: "#f9f9f9",
        fontFamily: '"Open Sans", "Arial", "Tahoma", "Verdana"',
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
        padding: "20px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "15px",
            color: displayData.colorText,
          }}
        >
          {deviceInfo.isDesktop ? displayData.siteName : displayData.appName}
        </h1>

        <div
          style={{
            color: "#666",
            marginBottom: "10px",
            fontSize: "16px",
          }}
        >
          {redirectStatus}
        </div>

        {data && (
          <div
            style={{
              color: "#999",
              marginBottom: "30px",
              fontSize: "14px",
            }}
          >
            {deviceInfo.isDesktop ? (
              <>Доступен сайт: {displayData.siteDomains?.[0]}</>
            ) : (
              <>
                Версия для Android: {displayData.versionAndroid} | Версия для
                iOS: {displayData.versionIos}
                {displayData.scheme && ` | Схема: ${displayData.scheme}`}
              </>
            )}
          </div>
        )}

        {/* Кнопки для ручного редиректа */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
            marginBottom: "30px",
          }}
        >
          {/* Основная кнопка в зависимости от устройства */}
          {deviceInfo.isDesktop && availability.siteAvailable && (
            <button
              onClick={() => handleManualRedirect("website", links)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "15px 30px",
                borderRadius: "25px",
                backgroundColor: displayData.colorMain,
                color: "white",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "600",
                width: "100%",
                maxWidth: "300px",
                transition: "all 0.3s ease",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0px 6px 20px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.1)";
              }}
            >
              🌐 Перейти на сайт
            </button>
          )}

          {!deviceInfo.isDesktop &&
            availability.appAvailable &&
            links?.appScheme && (
              <button
                onClick={() => handleManualRedirect("app", links)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "15px 30px",
                  borderRadius: "25px",
                  backgroundColor: displayData.colorMain,
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "600",
                  width: "100%",
                  maxWidth: "300px",
                  transition: "all 0.3s ease",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0px 6px 20px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.1)";
                }}
              >
                📱 Открыть приложение
              </button>
            )}

          {/* Второстепенные кнопки */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "15px",
              width: "100%",
              maxWidth: "300px",
              flexWrap: "wrap",
            }}
          >
            {/* Кнопка Google Play */}
            {availability.appAvailable &&
              links?.androidPackage &&
              !deviceInfo.isDesktop && (
                <button
                  onClick={() => handleManualRedirect("android", links)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "15px",
                    borderRadius: "15px",
                    backgroundColor: "#fff",
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.08)",
                    transition: "all 0.3s ease",
                    border: "none",
                    cursor: "pointer",
                    flex: "1",
                    minWidth: "120px",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow =
                      "0px 6px 20px rgba(0, 0, 0, 0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow =
                      "0px 4px 15px rgba(0, 0, 0, 0.08)";
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#000",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginBottom: "8px",
                    }}
                  >
                    G
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#000",
                    }}
                  >
                    Play Store
                  </div>
                </button>
              )}

            {/* Кнопка App Store */}
            {availability.appAvailable &&
              links?.iosAppId &&
              !deviceInfo.isDesktop && (
                <button
                  onClick={() => handleManualRedirect("ios", links)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "15px",
                    borderRadius: "15px",
                    backgroundColor: "#fff",
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.08)",
                    transition: "all 0.3s ease",
                    border: "none",
                    cursor: "pointer",
                    flex: "1",
                    minWidth: "120px",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow =
                      "0px 6px 20px rgba(0, 0, 0, 0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow =
                      "0px 4px 15px rgba(0, 0, 0, 0.08)";
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#000",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginBottom: "8px",
                    }}
                  >
                    A
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#000",
                    }}
                  >
                    App Store
                  </div>
                </button>
              )}

            {/* Кнопка сайта для всех устройств */}
            {availability.siteAvailable && (
              <button
                onClick={() => handleManualRedirect("website", links)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "15px",
                  borderRadius: "15px",
                  backgroundColor: "#fff",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.08)",
                  transition: "all 0.3s ease",
                  border: "none",
                  cursor: "pointer",
                  flex: "1",
                  minWidth: "120px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0px 6px 20px rgba(0, 0, 0, 0.12)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.08)";
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: displayData.colorMain,
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: "8px",
                  }}
                >
                  🌐
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#000",
                  }}
                >
                  Веб-сайт
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Redirect;
