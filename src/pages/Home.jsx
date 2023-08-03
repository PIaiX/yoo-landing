import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tomato from '../assets/imgs/tomato.svg';

const Home = () => {
  return (
    <main>
      <section className='sec-1 p-5'>
        <Row>
          <Col xs={12} md={6}>
            <div className="d-flex align-items-center">
              <img src={Tomato} alt="tomato" />
              <h1 className='mb-0 ms-3 '>Yoo Appc food — приложение для кафе и ресторанов</h1>
            </div>
            
            <p>Получайте на 30% больше прибыли с помощью приложения для заказа, доставки и самовывоза готовой еды или товаров</p>
            <div className="d-flex mt-5">
              <button type='button' className='btn-info'>Пробовать бесплатно</button>
              <a href="">Скачать презентацию</a>
            </div>
            <p className='fs-08'>Подходит для любого уровня заведений</p>
          </Col>
        </Row>
      </section>
    </main>
  )
}

export default Home