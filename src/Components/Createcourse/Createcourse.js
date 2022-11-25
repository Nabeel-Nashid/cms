import { useSelect } from '@mui/base'
import { map } from 'lodash'
import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {Card,Row,Form,FormGroup,Label,Input, Button} from 'reactstrap'
import { allCourseCategoryApi, createCourseApi } from '../../CourseCategory/useApi'
import { createStudentCourseApi } from '../../Students/useApi'
import Layout from '../Layout/Layout'

function Createcourse() {

    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [input,setInput]=useState()

    // const Handle=(e)=>{
    //     setInput({
    //         ...input,
    //         [e.target.name]:e.target.value
    //     })
    // }

    const HandleCreateCourse=(e)=>{
        e.preventDefault()

        if(input){
            dispatch(createCourseApi(input,navigate))
        }
    }

    const {createCourseDetails}  = useSelector((state) => ({
        createCourseDetails:state.CourseCategory.createCourseDetails
        
      }));

      console.log(createCourseDetails);

      const { CourseCategory } = useSelector((state) => ({
        CourseCategory: state.CourseCategory.nabeel
      }));

      console.log(createCourseDetails?.results);

      useEffect(() => {
        dispatch(allCourseCategoryApi());
      }, []);

  return (
    <div>
        <Layout>
        <div className='banner-main'>
            <h5 className='banner-heading'>Create Course</h5>
            <div className='card-div'>
                <Card className='table-card-create shadow-lg p-3 mb-5 bg-white rounded'>
                    <Row>
                        <Col md-6>
                        <Form onSubmit={HandleCreateCourse}>
                            <FormGroup>
                                <Label for="exampleEmail" className='form-label'>
                                Course Name:
                                </Label>
                                <Input
                                className='form-text'
                                name="course_name"
                                placeholder="Enter your Course name"
                                type="text"
                                style={{backgroundColor:"#f3f3f3",color:'#4c6a61',border:'none',width:'330px'}}
                                onChange={(e)=>setInput({...input,course_name:e.target.value})}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail" className='form-label'>
                                Duration:
                                </Label>
                                <Input
                                className='form-text'
                                name="duration"
                                placeholder="Duration of course"
                                type="text"
                                style={{backgroundColor:"#f3f3f3",color:'#4c6a61',border:'none',width:'330px'}}
                                onChange={(e)=>setInput({...input,duration:e.target.value})}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail" className='form-label'>
                                Course Category:
                                </Label><br/>


                                <select style={{width:'330px'}}
                                    onChange={(e)=>setInput({...input,course_category:e.target.value})}
                                > 
                                        <option>Choose option</option>
                                        {map(CourseCategory?.results, (item, key) => (
                                        <option value={item.id}>
                                            {item?.course_category_name}
                                            {console.log(item)}
                                        </option>
                                        ))}
                                </select>
                            </FormGroup>
                            <Row>
                                <div className='button-main'>   
                                    <div>
                                    <Button color='light' className='shadow form-back-button' style={{backgroundColor:"#f3f3f3",color:'#4c6a61'}}>
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

export default Createcourse
