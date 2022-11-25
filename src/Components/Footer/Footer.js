import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './Footer.css'
import { BsInstagram,BsTwitter } from "react-icons/bs";
import { MdFacebook } from "react-icons/md";

function Footer() {
  return (
    <div className='footer'>
      <Container>
        <Row>
            <Col md-6>
                <h5>EDISONVALLEY</h5>
                <p className='footer-para'>2020 © Edisonvalley. Design & Develop by Osperb <br></br> We are a bunch of tech enthusiasts determined to uplift the society utilising the latest technologies around us</p>
            </Col>
            
            <Col md-6>
                <Row>
                  <Col md-4>
                    <h5>Resources</h5>
                    <p className='footer-right'>Privacy policy</p>
                    <p className='footer-right'>Terms and Condition</p>
                  </Col>
                  <Col md-3>
                    <h5>Company</h5>
                    <p className='footer-right'>About us</p>
                    <p className='footer-right'>Features</p>
                  </Col>
                  <Col md-3>
                    <h5>Social Links</h5>
                    <a href='https://www.facebook.com/' className='icon'><MdFacebook/> </a>
                    <a href='https://www.instagram.com/?hl=en' className='icon'><BsInstagram/></a>
                    <a href='https://twitter.com/i/flow/login' className='icon'><BsTwitter/></a>
                  </Col>
                </Row>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
