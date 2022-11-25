import { height } from '@mui/system'
import { map } from 'lodash'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, FormGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Input, Label } from 'reactstrap'
import { allCourseApi, createStudentCourseApi } from '../../CourseCategory/useApi'
import { studentApi } from '../../Students/useApi'
import Layout from '../Layout/Layout'

function Createstudentcourse() {

    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [input,setInput]=useState()
    // const [store,setStore]=useState()

    const {students} = useSelector((state)=>({
        students:state.CreateReducer.all_students,

    }))

    const studentName=students?.results;

    useEffect(() =>{
        dispatch(studentApi())
    },[dispatch])




    const { allCourse } = useSelector((state) => ({
        allCourse: state.CourseCategory.allCourse
      }));

    const courseName=allCourse?.results;

      useEffect(() =>{
        dispatch(allCourseApi())
      },[dispatch])



      const HandleCreateStudentCourse=(e)=>{
        e.preventDefault()

        if(input){
            dispatch(createStudentCourseApi(input,navigate))
        }
    }





  return (
    <div>
        <Layout>
        <div className='banner-main'>
            <h5 className='banner-heading'>Create Student Course</h5>
            <div className='card-div'>
                <Card className='table-card-create shadow-lg p-3 mb-5 bg-white rounded'>
                    <Row>
                        <Col md-6>
                        <Form onSubmit={HandleCreateStudentCourse}>
                            <FormGroup>
                                <Label for="exampleEmail" className='form-label'>
                                Student Name:
                                </Label>
                                <br/>
                                <select style={{backgroundColor:"#f3f3f3",color:'#4c6a61',border:'none',width:'330px', height:'30px'}}
                                    onChange={(e)=>setInput({...input,student:e.target.value})}
                                > 
                                        <option>Choose name</option>
                                        {map(studentName, (item, key) => (
                                        <option value={item.id}>
                                            {item?.full_name}
                                            
                                        </option>
                                        ))}
                                </select>


                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail" className='form-label'>
                                Course Name:
                                </Label>
                                <br/>
                                <select style={{backgroundColor:"#f3f3f3",color:'#4c6a61',border:'none',width:'330px', height:'30px'}}
                                    onChange={(e)=>setInput({...input,course:e.target.value})}
                                > 
                                        <option>Choose course</option>
                                        {map(courseName, (item, key) => (
                                        <option value={item.id}>
                                            {item?.course_name}
                                            
                                        </option>
                                        ))}
                                </select>


                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail" className='form-label'>
                                Progress:
                                </Label><br/>
                                <Input placeholder='eg:8/10'
                                onChange={(e)=>setInput({...input,progress:e.target.value})}
                                ></Input>

                               
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

export default Createstudentcourse
