import React from 'react'
import './Banner.css'
import {Container,Row,Col,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import certificate from '../Banner/certificate.jpeg'
function Banner() {
  return (
    <div className='banner'>
        <Container>  
            <Row> 
                <Col md-6>
                    <div className="right-section">
                        <h2>Maker Your Career <br></br> with EddisonValley</h2>
                        <p className='banner-para'>We are a bunch of tech enthusiasts determined to uplift the society utilising the latest technologies around us</p> 
                        <Link to="/login">
                        <Button className='bg-warning login-button'>Login</Button>
                        </Link>
                    </div>
                </Col>
                <Col md-6>
                    <div className="left-section">
                        <img src={certificate} alt='certificate' className='certificate-img'></img>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Banner
