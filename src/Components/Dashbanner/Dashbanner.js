import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Button, Card, Container } from 'reactstrap'
// import { BsArrowRightShort } from "react-icons/bs";
import './Dashbanner.css'
import Avtar from '../Dashbanner/avatar.png'
import logo1 from '../Dashbanner/emblem1.jpg'
import logo2 from '../Dashbanner/emblem2.jpg'
import logo3 from '../Dashbanner/emblem3.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { profileApi } from '../../Login/useApi'



function Dashbanner() {

  const dispatch=useDispatch()
  useEffect(() =>{
    dispatch(profileApi())
  },[])

  const {profileDetails} = useSelector((state)=>({
    profileDetails:state.ProfileReducer.profileDetails
  }))

  console.log(profileDetails);

  return (
    <div className='banner-main'>


    <Container>
            <h5 className="dash-heading" style={{padding:'10px'}}>DASHBOARD</h5>
            <Row>
              <Col md="4">
                <Card
                  className="card-one shadow"
                  style={{ minHeight: "308px" }}
                >
                  <div className="card-one-top d-flex">
                    <div>
                      <h1 className="card-h1-1 m-2">Welcome Back !</h1>
                      <h1 className="card-h1-2 m-2">
                        It will seem like simplified
                      </h1>
                    </div>
                    <div>
                      {/* <img
                        src={Avtar}
                        className="card-one-img"
                        alt="certificate"
                      ></img> */}
                    </div>
                  </div>
                  <Row className="card-one-bottom d-flex">
                    <Col md="4" className="card-one-bottom-section-1">
                      <div className=" card-one-bottom-section-1-img">
                        <img
                          src={Avtar}
                          alt="certificate"
                          style={{width:'50px',height:'50px'}}
                          className='avatar-img'
                        ></img>
                      </div>
                      <div className="mt-5 mx-2">
                        <h5 style={{ fontSize: "12px", fontWeight: "500px" }}>
                          {profileDetails.username}
                        </h5>
                        <h5 style={{ fontSize: "13px", fontWeight: "400px",color:'#74788D' }}>
                          {profileDetails.email}
                        </h5>
                      </div>
                    </Col>
                    <Col md="4" className="mt-5">
                      <h5 style={{ fontSize: "15px", fontWeight: "500px" }}>125</h5>
                      <h5 style={{ fontWeight: "500px",color:'#74788D',fontSize:'13px' }}>Projects</h5>
                      <Button
                        className="card-view-button mb-2"
                        style={{ fontSize: "12px", fontWeight: "200",backgroundColor:'#556EE6',border:'none'}}
                      >
                        View Profile
                      </Button>
                    </Col>
                    <Col md="4" className="mt-5">
                      <h5 style={{ fontSize: "15px", fontWeight: "500px" }}>$1245</h5>
                      <h5 style={{ fontWeight: "500px",color:'#74788D',fontSize:'13px' }}>Revenue</h5>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md="8">
                <Row>
                  <Col md="6">
                    <Card
                      className="mb-2 cards-part-2 shadow"
                      style={{ minHeight: "150px" }}
                    >
                      <div className="d-flex justify-content-between">
                        <div className="p-2">
                          <h6>Available Courses</h6>
                          <h6>55</h6>
                        </div>
                        <div>
                          <img
                            src={logo3}
                            alt="certificate"
                            style={{ marginRight: "40px", marginTop: "40px" }}
                          ></img>
                        </div>
                      </div>
                    </Card>
                    <Card
                      className=" cards-part-2 shadow"
                      style={{ minHeight: "150px" }}
                    >
                      <div className="d-flex justify-content-between">
                        <div className="p-2">
                          <h6>Total Students </h6>
                          <h6>55</h6>
                        </div>
                        <div>
                          <img
                            src={logo2}
                            alt="certificate"
                            style={{ marginRight: "40px", marginTop: "40px" }}
                          ></img>

                  </div>
                      </div>
                    </Card>
                  </Col>
                  <Col md="6">
                    <Card
                      className="mb-2 cards-part-2 shadow"
                      style={{ minHeight: "150px" }}
                    >
                      <div className="d-flex justify-content-between">
                        <div className="p-2">
                          <h6>Course Completed Students</h6>
                          <h6>55</h6>
                        </div>
                        <img
                          src={logo1}
                          alt="certificate"
                          style={{ marginRight: "40px", marginTop: "40px" }}
                        ></img>
                      </div>
                    </Card>
                    <Card
                      className=" cards-part-2 shadow"
                      style={{ minHeight: "150px" }}
                    >
                      <div className="d-flex justify-content-between">
                        <div className="p-2">
                          <h6>Total Students</h6>
                          <h6>55</h6>
                        </div>
                        <div>
                          <img
                            src={logo2}
                            alt="certificate"
                            style={{ marginRight: "40px", marginTop: "40px" }}
                          ></img>
                        </div>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>

    </div>
  )
}

export default Dashbanner
