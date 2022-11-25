import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Button, Card } from 'reactstrap'
import Layout from '../Layout/Layout'
import profile from '../Studentview/profile2.jpeg'
import { GrLocationPin } from "react-icons/gr";
import './Studentview.css'
import { BiPhone } from 'react-icons/bi';   
import { VscMail } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { deleteApi, studentViewApi } from '../../Students/useApi'
import { map } from 'lodash'

function Studentview() {
    const dispatch=useDispatch()
    const params=useParams()
    const navigate=useNavigate()

    useEffect(() =>{
        dispatch(studentViewApi(params.id))
    },[dispatch])

    const deleteStudent =()=>{
        dispatch(deleteApi(params.id,navigate));
    };

    const {singleView}  = useSelector((state) => ({
    singleView:state.CreateReducer.singleView
    
    }));

    const course_data=singleView.student_courses



  return (
    <div>
      <Layout>
      <div className='banner-main'>
            <h5 className='banner-heading'>Create Students</h5>
            <div className='card-div'>
                <Card className='table-card shadow-lg p-3 mb-5 bg-white rounded'>
                    <Row>
                        <Col md-6>
                            <h5 style={{paddingTop:'5px'}}>{singleView.full_name}</h5>
                            <p style={{color:'rgb(135 135 135)'}}>{singleView.start_date}</p>

                            <div className='d-flex'>
                                <div>
                                    <GrLocationPin/>
                                </div>
                                <div>
                                    <p className='student-para'>{singleView.address}</p>
                                </div>
                            </div>

                            <div className='d-flex'>
                                <div>
                                <BiPhone/>
                                </div>
                                <div>
                                <p className='student-para'>{singleView.phone}</p>
                                </div>
                            </div>

                            <h5>Contact Deatils:</h5>

                            <div className='d-flex'>
                                <div>
                                <VscMail/>
                                </div>
                                <div>
                                <p className='student-para'>{singleView.email}</p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div>
                                <BiPhone/>
                                </div>
                                <div>
                                <p className='student-para'>{singleView.phone}</p>
                                </div>
                            </div>

                        </Col>

                        <Col md-6>
                            
                            <img src={profile} alt='' className='student-img'/>
                            <p className='developer-para'>App Developer</p>
                            
                        </Col>
                    </Row>
                    
                    <Row>
                    <div className='button-main'>   
                        <div>
                        <Link to={`/update/${params.id}`} color='light' className='shadow form-back-button btn btn-success' style={{backgroundColor:"#4C6A61",color:'white'}}>
                            Update
                        </Link>
                        </div>
                        <div>
                        <Button onClick={deleteStudent} color='success' className='shadow form-update-button' style={{backgroundColor:"#E6555E",color:'white',border:'none'}}>
                            Delete
                        </Button>
                        </div>
                    </div>
                    </Row>
                </Card>
            </div>

            <div className='card-div'>

           


            {map(course_data,(item,key)=>(

                <div>
                    <Card className='student-card shadow-lg p-3 mb-5 bg-white rounded'>
                        <h6 style={{paddingBottom:'5px'}}>Course Name: <span style={{color:'red'}}>{item.course.course_name}</span></h6>
                        <h6>Duration: <span style={{color:'blue'}}>{item.course.duration}</span></h6>
                        <h6>Progress: <span style={{color:'blue'}}>{item.progress}</span></h6>
                        <h6>Course Category Name: <span style={{color:'red'}}>{item.course.course_category.course_category_name}</span></h6>
                        <h6>Designation: <span style={{color:'red'}}>{singleView.designation}</span></h6>
                    </Card>
                </div>
                
            ))}

               
            

            </div>

            <div className='student-view-button'>
                <Link to={'/createstudentcourse'}>
                        <Button
                        style={{ backgroundColor: "#34C38F", border: "none" }}
                        >
                        + Create New Course
                        </Button>
                </Link>

                <Link to={`/certificate/${params.id}`}>
                        <Button
                        style={{ backgroundColor: "#34C38F", border: "none",marginLeft:'8px' }}
                        >
                        Certificate
                        </Button>
                </Link>
            </div>
      </div>
      </Layout>
    </div>
  )
}

export default Studentview
