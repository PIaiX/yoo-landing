import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/imgs/logo.svg';
import Container from 'react-bootstrap/Container';

const Header = () => {
  return (
    <Container>
      <header>
        <Link to="">
            <img src={Logo} alt="logo" />
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