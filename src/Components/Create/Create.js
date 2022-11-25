// import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Card, Col, Container, Input, Label, Row, Button } from "reactstrap";
// import { studentCreateApi } from "../../Store";
import { createApi } from '../../Students/useApi'
import Layout from "../Layout/Layout";

function CreateStudent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({});
  console.log(state);

  const HandleCreateStudent = (e) => {
    e.preventDefault();
    dispatch(createApi(state, navigate));
  };
  return (
    <div style={{ backgroundColor: "#F8F8FB" }}>
      <Layout>
      {/* <div className='banner-main'> */}
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
            CREATE STUDENT
          </h5>
          <div>
      
              <Row>
                <Col md="6">
                  <Card>
                    <Container>
                      <Form onSubmit={HandleCreateStudent}>
                        <Row className="p-2 m-2">
                          <Col md="6">
                            <Label>Full Name :</Label>
                            <Input
                              placeholder="Enter your full name"
                              style={{ backgroundColor: "#F3F3F3" }}
                              name="full_name"
                              onChange={(e) =>
                                setState({ ...state, full_name: e.target.value })
                              }
                            ></Input>
                          </Col>
                          <Col md="6">
                            <Label>Designation :</Label>
                            <Input
                              placeholder="Enter your Designation"
                              name="designation"
                              onChange={(e) =>
                                setState({
                                  ...state,
                                  designation: e.target.value,
                                })
                              }
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
                              onChange={(e) =>
                                setState({ ...state, email: e.target.value })
                              }
                              style={{ backgroundColor: "#F3F3F3" }}
                            ></Input>
                          </Col>
                          <Col md="6">
                            <Label>Joining Date :</Label>
                            <Input
                              type="date"
                              name="start_date"
                              onChange={(e) =>
                                setState({ ...state, start_date: e.target.value })
                              }
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
                              onChange={(e) =>
                                setState({ ...state, dob: e.target.value })
                              }
                              placeholder="Enter your Date of Birth"
                              style={{ backgroundColor: "#F3F3F3" }}
                            ></Input>
                          </Col>
                          <Col md="6">
                            <Label>Date of Leaving :</Label>
                            <Input
                              type="date"
                              name="end_date"
                              onChange={(e) =>
                                setState({ ...state, end_date: e.target.value })
                              }
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
                              onChange={(e) =>
                                setState({ ...state, address: e.target.value })
                              }
                              style={{ backgroundColor: "#F3F3F3" }}
                            ></Input>
                          </Col>
                          <Col md="6">
                            <Label>Phone number :</Label>
                            <Input
                              type="number"
                              name="phone"
                              onChange={(e) =>
                                setState({ ...state, phone: e.target.value })
                              }
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
                              onChange={(e) =>
                                setState({ ...state, img: e.target.value })
                              }
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
                            Create
                          </Button>
                        </div>
                      </Form>
                    </Container>
                  </Card>
                </Col>
              </Row>
            
          </div>
        </Container>
      {/* </div> */}
      </Layout>
    </div>
   
  );
}

export default CreateStudent;











// import React, { useState } from 'react'
// import { Col, Form, FormGroup, Row } from 'react-bootstrap'
// import { useDispatch } from 'react-redux'
// import { Link, useNavigate } from 'react-router-dom'
// import { Button, Card, Input, Label } from 'reactstrap'
// import { createApi } from '../../Students/useApi'
// import Layout from '../Layout/Layout'
// import './Create.css'

// function Create() {

//     const dispatch=useDispatch()
//     const navigate=useNavigate()
//     const [input,setInput]=useState({})
    
//     const handleSubmitApi = (e) =>{
//         e.preventDefault()
//         dispatch(createApi(input,navigate))
//     }
//     console.log(input); 

//   return (
    
//     <div>
//     <Layout>
//         {/* <div className='banner-main'>
//             <h5 className='banner-heading'>Create Students</h5>
//             <div className='card-div'>
//                 <Card className='table-card-create shadow-lg p-3 mb-5 bg-white rounded'>
//                     <Row>
//                         <Col md-6>
//                         <Form>
//                             <FormGroup>
//                                 <Label for="exampleEmail" className='form-label'>
//                                 Full Name:
//                                 </Label>
//                                 <Input
//                                 className='form-text'
//                                 name="full_name"
//                                 placeholder="Enter your full name"
//                                 type="text"
//                                 style={{backgroundColor:"#f3f3f3",color:'#4c6a61',border:'none'}}
//                                 onChange={(e)=>setInput({...input,full_name:e.target.value})}
//                                 />
//                             </FormGroup>
//                             <FormGroup>
//                                 <Label for="exampleEmail" className='form-label'>
//                                 Email:
//                                 </Label>
//                                 <Input
//                                 className='form-text'
//                                 name="email"
//                                 placeholder="Enter your Email address"
//                                 type="email"
//                                 style={{backgroundColor:"#f3f3f3",color:'#4c6a61',border:'none'}}
//                                 onChange={(e)=>setInput({...input,email:e.target.value})}
//                                 />
//                             </FormGroup>
//                             <FormGroup>
//                                 <Label for="exampleEmail" className='form-label'>
//                                 Address:
//                                 </Label>
//                                 <Input
//                                 className='form-text'
//                                 name="address"
//                                 placeholder="Enter your Address"
//                                 type="text"
//                                 style={{backgroundColor:"#f3f3f3",color:'#4c6a61',border:'none'}}
//                                 onChange={(e)=>setInput({...input,address:e.target.value})}
//                                 />
//                             </FormGroup>
//                             <FormGroup>
//                                 <Label for="exampleEmail" className='form-label'>
//                                 Date of Birth:
//                                 </Label>
//                                 <Input
//                                 className='form-text'
//                                 name="dob"
//                                 placeholder="Enter your Date of birth"
//                                 type="date"
//                                 style={{backgroundColor:"#f3f3f3",color:'#4c6a61',border:'none'}}
//                                 onChange={(e)=>setInput({...input,dob:e.target.value})}
//                                 />
//                             </FormGroup>
//                             <FormGroup>
//                                 <Label for="exampleFile" className='form-label'>
//                                 Image
//                                 </Label>
//                                 <Input
//                                 id="exampleFile"
//                                 name="file"
//                                 type="file"
//                                 style={{backgroundColor:"#f3f3f3",color:'#4c6a61',border:'none'}}
//                                 />
//                                 </FormGroup>
//                         </Form>
                            
//                         </Col>
//                         <Col md-6>
//                         <Form >
//                             <FormGroup>
//                                 <Label for="exampleEmail" className='form-label'>
//                                 Designation:
//                                 </Label>
//                                 <Input
//                                 className='form-text'
//                                 name="designation"
//                                 placeholder="lorem"
//                                 type="text"
//                                 style={{backgroundColor:"#f3f3f3",color:'#4c6a61',border:'none'}}
//                                 onChange={(e)=>setInput({...input,designation:e.target.value})}
//                                 />
//                             </FormGroup>
//                             <FormGroup>
//                                 <Label for="exampleEmail" className='form-label'>
//                                 Joining Date:
//                                 </Label>
//                                 <Input
//                                 className='form-text'
//                                 name="start_date"
//                                 placeholder="date"
//                                 type="date"
//                                 style={{backgroundColor:"#f3f3f3",color:'#4c6a61',border:'none'}}
//                                 onChange={(e)=>setInput({...input,start_date:e.target.value})}
//                                 />
//                             </FormGroup>
//                             <FormGroup>
//                                 <Label for="exampleEmail" className='form-label'>
//                                 Date of Leaving:
//                                 </Label>
//                                 <Input
//                                 className='form-text'
//                                 name="end_date"
//                                 placeholder="date"
//                                 type="date"
//                                 style={{backgroundColor:"#f3f3f3",color:'#4c6a61',border:'none'}}
//                                 onChange={(e)=>setInput({...input,end_date:e.target.value})}
//                                 />
//                             </FormGroup>
//                             <FormGroup>
//                                 <Label for="exampleEmail" className='form-label'>
//                                 Phone number:
//                                 </Label>
//                                 <Input
//                                 className='form-text'
//                                 name="phone"
//                                 placeholder="9876543210"
//                                 type="number"
//                                 style={{backgroundColor:"#f3f3f3",color:'#4c6a61',border:'none'}}
//                                 onChange={(e)=>setInput({...input,phone:e.target.value})}
//                                 />
//                             </FormGroup>
//                         </Form>
//                         </Col>
//                     </Row>
                    
//                     <div className='button-main'>   
//                         <div>
//                         <Button color='light' className='shadow form-back-button'  style={{backgroundColor:"#f3f3f3",color:'#4c6a61'}}>
//                             Back
//                         </Button>
//                         </div>
//                         <div>
//                         <Button color='success' className='shadow form-update-button' onClick={handleSubmitApi} style={{backgroundColor:"#4C6A61"}}>
//                             Create
//                         </Button>
//                         </div>
//                     </div>
//                 </Card>
//             </div>
//         </div> */}
//     </Layout>
//     </div>
//   )
// }

// export default Create
