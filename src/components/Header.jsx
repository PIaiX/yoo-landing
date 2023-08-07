import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom';
import Logo from '../assets/imgs/logo.svg';

const Header = () => {
  return (
    <Container className='wide'>
      <header>
        <Link to="">
          <img src={Logo} alt="logo" className='logo'/>
        </Link>
        <nav>
            <ul>
                <li><Link to="">Решения</Link></li>
                <li><Link to="">Возможности</Link></li>
                <li><Link to="">Тарифы</Link></li>
                <li><Link to="">Примеры</Link></li>
            </ul>
            <a className='phone' href="tel:+79879877878">+7 987 987-78-78</a>
        </nav>
      </header>
    </Container>
  )
}

export default Header