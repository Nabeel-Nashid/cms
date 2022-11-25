import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {Card,Row,Form,FormGroup,Label,Input, Button} from 'reactstrap'
import { createCourseCategoryApi } from '../../CourseCategory/useApi'
import Layout from '../Layout/Layout'
import './Createcoursecategory.css'

function Createcoursecategory() {


    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [input,setInput]=useState()

    // const Handle=(e)=>{
    //     setInput({
    //         ...input,
    //         [e.target.name]:e.target.value
    //     })
    // }

    const Createcourse=(e)=>{
        e.preventDefault()

        if(input){
            dispatch(createCourseCategoryApi(input,navigate))
        }
    }

  return (
    <div>
      <Layout>
        <div className='banner-main'>
            <h5 className='banner-heading'>CREATE COURSE CATEGORY</h5>
            <div className='card-div'>
                <Card className='table-card-category shadow-lg p-3 mb-5 bg-white rounded'>
                    <Row>
                        <Col md-6>
                        <Form onSubmit={Createcourse}> 
                            <FormGroup>
                                <Label for="exampleEmail" className='form-label'>
                                Course Category:
                                </Label>
                                <Input
                                className='form-text'
                                name="course_category_name"
                                placeholder="Enter a course Category"
                                type="text"
                                style={{backgroundColor:"#f3f3f3",color:'#4c6a61',border:'none',width:'40%'}}
                                onChange={(e) =>
                                    setInput({ ...input, course_category_name: e.target.value })
                                  }
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail" className='form-label'>
                                Designation:
                                </Label>
                                <Input
                                className='form-text'
                                name="designation"
                                placeholder="Enter designation"
                                type="text"
                                style={{backgroundColor:"#f3f3f3",color:'#4c6a61',border:'none',width:'40%'}}
                                onChange={(e) =>
                                    setInput({ ...input, designation: e.target.value })
                                  }
                                />
                            </FormGroup>
                            <div className='empty-div'>

                            </div>
                            <Row>
                            <div className='button-main'>   
                                <div>
                                <Button color='light' className='shadow form-back-button' style={{backgroundColor:"#f3f3f3",color:'#4c6a61'}}
                                >
                                    Back
                                </Button>
                                </div>
                                <div>
                                <Button type='submit' color='success' className='shadow form-update-button' style={{backgroundColor:"#4C6A61"}}>
                                    Create
                                </Button>
                                </div>
                            </div>
                            </Row>
                        </Form>
                        </Col>
                        
                    </Row>
                    
                    </Card>
                </div>
            </div>
        </Layout>
    </div>
  )
}

export default Createcoursecategory
