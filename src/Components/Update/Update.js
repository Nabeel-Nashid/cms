import React, { useEffect, useState } from 'react'
import { Col, Form, FormGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Card, Container, Input, Label } from 'reactstrap'
import { studentViewApi, updateApi } from '../../Students/useApi'
import Layout from '../Layout/Layout'
import './Update.css'

function Update() {

  const navigate=useNavigate()
  const params=useParams()
  const dispatch=useDispatch()
  const [store,setStore]=useState()

  const {singleView}  = useSelector((state) => ({
    singleView:state.CreateReducer.singleView
    
  }));

    console.log(singleView);

  useEffect(() =>{
      dispatch(studentViewApi(catId))
  },[dispatch])

  const catId = params.id;

  useEffect(()=>{
    setStore(singleView);
  },[singleView])

  const Handle = (e, catId) => {
    setStore({
      ...store,
      [e.target.name]: e.target.value,
    });
  };
  const HandleUpdate = (e)=>{
    e.preventDefault()
    dispatch(updateApi(catId,navigate,store))
  }
  return (
    <div>
    <Layout>
    <div className='banner-main'>
        <Container>
          <h5
            style={{
              color: "#495057",
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "24px",
              marginTop: "20px",
            }}
          >
            UPDATE STUDENT
          </h5>
          <div>
      
              <Row>
                <Col md="6">
                  <Card>
                    <Container>
                      <Form onSubmit={HandleUpdate}>
                        <Row className="p-2 m-2">
                          <Col md="6">
                            <Label>Full Name :</Label>
                            <Input
                              placeholder="Enter your full name"
                              style={{ backgroundColor: "#F3F3F3" }}
                              name="full_name"
                              onChange={(e) => Handle(e)}
                              value={store?.full_name}
                              
                            //   onChange={(e) =>
                            //     setState({ ...state, full_name: e.target.value })
                            //   }
                            ></Input>
                          </Col>
                          <Col md="6">
                            <Label>Designation :</Label>
                            <Input
                              placeholder="Enter your Designation"
                              name="designation"
                              onChange={(e) => Handle(e)}
                              value={store?.designation}
                            //   onChange={(e) =>
                            //     setState({
                            //       ...state,
                            //       designation: e.target.value,
                            //     })
                            //   }
                              style={{ backgroundColor: "#F3F3F3" }}
                            ></Input>
                          </Col>
                        </Row>
                        <Row className="p-2 m-2">
                          <Col md="6">
                            <Label>Email :</Label>
                            <Input
                              placeholder="Enter your Email"
                              name="email"
                              onChange={(e) => Handle(e)}
                              value={store?.email}
                            //   onChange={(e) =>
                            //     setState({ ...state, email: e.target.value })
                            //   }
                              style={{ backgroundColor: "#F3F3F3" }}
                            ></Input>
                          </Col>
                          <Col md="6">
                            <Label>Joining Date :</Label>
                            <Input
                              type="date"
                              name="start_date"
                              onChange={(e) => Handle(e)}
                              value={store?.start_date}
                            //   onChange={(e) =>
                            //     setState({ ...state, start_date: e.target.value })
                            //   }
                              placeholder="pic a date"
                              style={{ backgroundColor: "#F3F3F3" }}
                            ></Input>
                          </Col>
                        </Row>
                        <Row className="p-2 m-2">
                          <Col md="6">
                            <Label>Date of Birth :</Label>
                            <Input
                              type="date"
                              name="dob"
                              onChange={(e) => Handle(e)}
                              value={store?.dob}
                            //   onChange={(e) =>
                            //     setState({ ...state, dob: e.target.value })
                            //   }
                              placeholder="Enter your Date of Birth"
                              style={{ backgroundColor: "#F3F3F3" }}
                            ></Input>
                          </Col>
                          <Col md="6">
                            <Label>Date of Leaving :</Label>
                            <Input
                              type="date"
                              name="end_date"
                              onChange={(e) => Handle(e)}
                              value={store?.end_date}
                            //   onChange={(e) =>
                            //     setState({ ...state, end_date: e.target.value })
                            //   }
                              placeholder="pic a date"
                              style={{ backgroundColor: "#F3F3F3" }}
                            ></Input>
                          </Col>
                        </Row>
                        <Row className="p-2 m-2">
                          <Col md="6">
                            <Label>Address :</Label>
                            <Input
                              placeholder="Enter your Address"
                              name="address"
                              onChange={(e) => Handle(e)}
                              value={store?.address}
                            //   onChange={(e) =>
                            //     setState({ ...state, address: e.target.value })
                            //   }
                              style={{ backgroundColor: "#F3F3F3" }}
                            ></Input>
                          </Col>
                          <Col md="6">
                            <Label>Phone number :</Label>
                            <Input
                              type="number"
                              name="phone"
                              onChange={(e) => Handle(e)}
                              value={store?.phone}
                            //   onChange={(e) =>
                            //     setState({ ...state, phone: e.target.value })
                            //   }
                              placeholder="Enter your Phone number"
                              style={{ backgroundColor: "#F3F3F3" }}
                            ></Input>
                          </Col>
                        </Row>
                        <Row className="p-2 m-2">
                          <Col md="3">
                            <Label>Image :</Label>
                            <input
                              name="img"
                            //   onChange={(e) =>
                            //     setState({ ...state, img: e.target.value })
                            //   }
                              placeholder="Enter your Designation"
                              type="file"
                              style={{ backgroundColor: "#F3F3F3" }}
                          
                            ></input>
                          </Col>
                        </Row>
                        <div className="d-flex justify-content-end p-3">
                          <Button
                            className="m-1"
                            style={{
                              backgroundColor: "#F3F3F3",
                              color: "#4C6A61",
                              borderRadius: "9.67391px",
                              width: "124.61px",
                              height: "45.88px",
                            }}
                          >
                            Back
                          </Button>
                          <Button
                            type="submit"
                            className="shadow m-1"
                            style={{
                              backgroundColor: "#4C6A61",
                              borderRadius: "9.67391px",
                              width: "124.61px",
                              height: "45.88px",
                            }}
                          >
                            Update
                          </Button>
                        </div>
                      </Form>
                    </Container>
                  </Card>
                </Col>
              </Row>
            
          </div>
        </Container>
      </div>

       
    </Layout>
    </div>
  )
}

export default Update
