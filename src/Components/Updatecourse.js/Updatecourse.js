import { map } from 'lodash';
import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {Card,Row,Form,FormGroup,Label,Input, Button} from 'reactstrap'
import { courseSingleViewApi, updateCourseApi } from '../../CourseCategory/useApi';
import Layout from '../Layout/Layout'

function Updatecourse() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const [storage,setStorage]=useState();

    const {updateCourse,singleViewCourse}  = useSelector((state) => ({
        updateCourse:state.CourseCategory.updateCourse,
        singleViewCourse: state.CourseCategory.singleViewCourse    
      }));

      const catId=params.id

      useEffect(() =>{
        dispatch(courseSingleViewApi(catId))
    },[dispatch])

    useEffect(() => {
        setStorage(singleViewCourse);
      }, [singleViewCourse]);

      console.log(singleViewCourse);
    

    const HandleSubmitUpdateCourse = (e) => {
        e.preventDefault();
        dispatch(updateCourseApi(catId, navigate, storage));
      };


  return (
    <div>
        <Layout>
        <div className='banner-main'>
            <h5 className='banner-heading'>Update Course</h5>
            <div className='card-div'>
                <Card className='table-card-create shadow-lg p-3 mb-5 bg-white rounded'>
                    <Row>
                        <Col md-6>
                        <Form onSubmit={HandleSubmitUpdateCourse}>
                            <FormGroup>
                                <Label for="exampleEmail" className='form-label'>
                                Course Name:
                                </Label>
                                <Input
                                className='form-text'
                                name="course_name"
                                placeholder="Enter course name"
                                type="text"
                                value={storage?.course_name}
                                style={{backgroundColor:"#f3f3f3",color:'#4c6a61',border:'none',width:'330px'}}
                                onChange={(e) =>
                                    setStorage({ ...storage, course_name: e.target.value })
                                  }
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail" className='form-label'>
                                Duration:
                                </Label>
                                <Input
                                className='form-text'
                                name="duration"
                                placeholder="Enter your duration"
                                type="text"
                                value={storage?.duration}
                                style={{backgroundColor:"#f3f3f3",color:'#4c6a61',border:'none',width:'330px'}}
                                onChange={(e) =>
                                    setStorage({ ...storage, duration: e.target.value })
                                  }
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail" className='form-label'>
                                Course Category:
                                </Label><br/>

                                <Input style={{width:'330px'}} value={storage?.course_category}></Input>
                            </FormGroup>
                            <Row>
                                <div className='button-main'>   
                                <div>
                                <Button color='light' className='shadow form-back-button' style={{backgroundColor:"#f3f3f3",color:'#4c6a61'}}>
                                    Back
                                </Button>
                                </div>
                                <div>
                                <Button color='success' className='shadow form-update-button' style={{backgroundColor:"#4C6A61"}}>
                                    Update
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

export default Updatecourse
