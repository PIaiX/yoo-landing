import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from 'react-router-dom';
import Logo from '../assets/imgs/logo.svg';
import useIsMobile from '../hooks/useIsMobile';
import MobileMenuIcon from './svg/MobileMenuIcon';

const Header = () => {
  const isMobileLG = useIsMobile('991px');

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className='wide'>
      <header>
        <Link to="">
          <img src={Logo} alt="logo" className='logo'/>
        </Link>
        <button type='button' className='d-flex d-lg-none' onClick={handleShow}>
          <MobileMenuIcon className="fs-18"/>
        </button>
        <Offcanvas show={show} onHide={handleClose} placement={"end"} responsive="lg">
          <Offcanvas.Body>
            <button className='d-lg-none'></button>
            <nav className={(isMobileLG) ? 'mobile-menu' : ''}>
              <ul>
                  <li><Link to="">Решения</Link></li>
                  <li><Link to="">Возможности</Link></li>
                  <li><Link to="">Тарифы</Link></li>
                  <li><Link to="">Примеры</Link></li>
              </ul>
              <a className='phone' href="tel:+79879877878">+7 987 987-78-78</a>
            </nav>
          </Offcanvas.Body>
        </Offcanvas>
      </header>
    </Container>
  )
}

export default Header