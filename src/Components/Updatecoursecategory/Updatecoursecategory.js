import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {Card,Row,Form,FormGroup,Label,Input, Button} from 'reactstrap'
import { studentViewCourseApi, updateCourseCategoryApi } from '../../CourseCategory/useApi';
import Layout from '../Layout/Layout'
// import './Createcoursecategory.css'

function Updatecoursecategory() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const [storage,setStorage]=useState({
        // course_category_name: "",
        // designation: "",
        // id:"",
    })

    console.log();

    const {updateCourseCategory,CourseCategory,singleView}  = useSelector((state) => ({
        updateCourseCategory:state.CourseCategory.updateCourseCategory,
        // CourseCategory:state.CourseCategory.nabeel.results,
        singleView: state.CourseCategory.singleViewCategory
        
        
      }));
      console.log(singleView);

      useEffect(() =>{
        dispatch(updateCourseCategoryApi(catId))
    },[dispatch])

    const catId = params.id;

    useEffect(() =>{
        dispatch(studentViewCourseApi(catId))
    },[dispatch])

    useEffect(() => {
        setStorage(singleView);
      }, [singleView]);

      const Handle = (e) => {
        setStorage({
          ...storage,
          [e.target.name]: e.target.value,
        });
      };

      const HandleSubmitUpdateCourseCategory = (e) => {
        e.preventDefault();
        dispatch(updateCourseCategoryApi(catId, navigate, storage));
      };

  return (
    <div>
      <Layout>
        <div className='banner-main'>
            <h5 className='banner-heading'>UPDATE COURSE CATEGORY</h5>
            <div className='card-div'>
                <Card className='table-card-category shadow-lg p-3 mb-5 bg-white rounded'>
                    <Row>
                        <Col md-6>
                        <Form onSubmit={HandleSubmitUpdateCourseCategory}>
                            <FormGroup>
                                <Label for="exampleEmail" className='form-label'>
                                Course Category:
                                </Label>
                                <Input
                                className='form-text'
                                name="course_category_name"
                                placeholder="Enter a course Category"
                                type="text"
                                value={storage?.course_category_name}
                                style={{backgroundColor:"#f3f3f3",color:'#4c6a61',border:'none',width:'40%'}}
                                onChange={(e) => Handle(e)}
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
                                value={storage?.designation}
                                type="text"
                                style={{backgroundColor:"#f3f3f3",color:'#4c6a61',border:'none',width:'40%'}}
                                onChange={(e) => Handle(e)}
                                />
                            </FormGroup>
                            <div className='empty-div'>

                            </div>
                            <Row>
                                <div className='button-main'>   
                                    <div>
                                    <Button color='light' className='shadow form-back-button' style={{backgroundColor:"#f3f3f3",color:'#4c6a61'}}>
                                        Back
                                    </Button>
                                    </div>
                                    <div>
                                    <Button color='success' className='shadow form-update-button' style={{backgroundColor:"#4C6A61"}} type='submit'>
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

export default Updatecoursecategory
