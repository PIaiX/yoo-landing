import React from 'react'
import {Outlet, ScrollRestoration} from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Container from 'react-bootstrap/Container';

const AppLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Container>
        <Header />
        <Outlet />
        <Footer />
      </Container>
    </>
  )
}

export default AppLayout