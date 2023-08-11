import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from 'react-router-dom';
import Logo from '../assets/imgs/logo.svg';
import useIsMobile from '../hooks/useIsMobile';
import MobileMenuIcon from './svg/MobileMenuIcon';
import Close from './svg/Close';

const Header = () => {
  const isMobileLG = useIsMobile('991px');

  const [showMenu, setShowMenu] = useState(false);
  const handleCloseMenu = () => setShowMenu(false);
  const handleShowMenu = () => setShowMenu(true);

  return (
    <header>
      <Container className='wide'>
        <div className="box">
          <Link to="">
            <img src={Logo} alt="logo" className='logo'/>
          </Link>
          <button type='button' className='d-flex d-lg-none' onClick={handleShowMenu}>
            <MobileMenuIcon className="fs-18"/>
          </button>
          <Offcanvas show={showMenu} onHide={handleCloseMenu} placement={"end"} responsive="lg">
            <Offcanvas.Body>
              <button type='button' className='d-lg-none close' onClick={handleCloseMenu}>
                <Close/>
              </button>
              <nav className={(isMobileLG) ? 'mobile-menu' : ''}>
                <ul>
                    <li><Link to="">Решения</Link></li>
                    <li><Link to="">Возможности</Link></li>
                    <li><Link to="/#tarif">Тарифы</Link></li>
                    <li><Link to="/#example">Примеры</Link></li>
                </ul>
                <a className='phone' href="tel:+79879877878">+7 987 987-78-78</a>
              </nav>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </Container>
    </header>
  )
}

export default Header