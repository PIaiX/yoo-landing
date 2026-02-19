import React from "react";
import Container from "react-bootstrap/Container";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="desktop">
      <Container className="wide">
        <div className="box py-3">
          &copy; {currentYear} YooApp. {t("Все права защищены.")}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
