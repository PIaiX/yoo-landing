import React from 'react';
import Tomato2 from '../assets/imgs/tomato2.svg';
import Container from 'react-bootstrap/Container';

const Footer = () => {
  return (
    <Container>
      <footer>
        <img src={Tomato2} alt="Tomato2" className='mb-2'/>
        <p className='fs-08 text-center'>© All rights reserved<br/>
        made by minimals.cc</p>
      </footer>
    </Container>
  )
}

export default Footer