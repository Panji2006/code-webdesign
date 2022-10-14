import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className='footer pb-3 pt-4'>
        <Container>
            <Row>
                <Col>
                    <h3 className='fw-bold text-white'>Ngoding.</h3>
                </Col>
                <Col className='text-end'>
                    <i class="fa-brands fa-facebook text-white fs-1 mx-lg-3 mx-2"></i>
                    <i class="fa-brands fa-instagram text-white fs-1 mx-lg-3 mx-2"></i>
                    <i class="fa-brands fa-twitter text-white fs-1 mx-lg-3 mx-2"></i>
                    <i class="fa-brands fa-whatsapp text-white fs-1 mx-lg-3 mx-2"></i>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='text-center text-white-50'>&copy; Copyright by Darel 2022, All Right Reserved</p>
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default Footer;