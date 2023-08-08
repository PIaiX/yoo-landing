import React from 'react';
import Tomato2 from '../assets/imgs/tomato2.svg';
import Container from 'react-bootstrap/Container';
import Start from './svg/Start';
import useIsMobile from '../hooks/useIsMobile';

const Footer = () => {
  const isMobileLG = useIsMobile('991px');
  
  return (
    (isMobileLG)
    ? <footer className='mobile'>
      <Container className='d-flex gap-2'>
        <button type='button' className='btn-primary px-2'>
          <span>Связаться</span>
          <Start className="fs-15 ms-2"/>
        </button>
        <button type='button' className='btn-secondary px-2'>
          <span>Войти</span>
        </button>
      </Container>
    </footer>
    : <footer className='desktop'>
      <Container>
        <div className="box">
          <img src={Tomato2} alt="Tomato2" className='mb-2'/>
          <p className='fs-08 text-center'>© All rights reserved<br/>
          made by minimals.cc</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer