// import React, { useEffect } from 'react'
// import { BiPhone } from 'react-icons/bi'
// import { GrLocationPin } from 'react-icons/gr'
// import { VscMail } from 'react-icons/vsc'
// import { Link, useNavigate, useParams } from 'react-router-dom'
// import { Button, Card, Col, Row } from 'reactstrap'
// import profile from '../Studentview/profile2.jpeg'
// import Layout from '../Layout/Layout'
// import { useDispatch, useSelector } from 'react-redux'
// import { courseSingleViewApi } from '../../CourseCategory/useApi'

// function CourseSingleView() {

//     const dispatch=useDispatch()
//     const params=useParams()
//     const navigate=useNavigate()

//     useEffect(() =>{
//         dispatch(courseSingleViewApi(params.id))
//     },[dispatch])

//     const {singleViewCourse}  = useSelector((state) => ({
//         singleViewCourse:state.CourseCategory.singleViewCourse
        
//         }));

//         console.log(singleViewCourse);

//   return (
//     <div> 
//         <Layout>
//         <div className='banner-main'>
//             <h5 className='banner-heading'>Create Students</h5>
//             <div className='card-div'>
//                 <Card className='table-card shadow-lg p-3 mb-5 bg-white rounded'>
//                     <Row>
//                         <Col md-6>
//                             <h5 style={{paddingTop:'5px'}}>{singleViewCourse.course_category_name}</h5>
//                             <p style={{color:'rgb(135 135 135)'}}>phone</p>

//                             <div className='d-flex'>
//                                 <div>
//                                     <GrLocationPin/>
//                                 </div>
//                                 <div>
//                                     <p className='student-para'>address</p>
//                                 </div>
//                             </div>

//                             <div className='d-flex'>
//                                 <div>
//                                 <BiPhone/>
//                                 </div>
//                                 <div>
//                                 <p className='student-para'>phone</p>
//                                 </div>
//                             </div>

//                             <h5>Contact Deatils:</h5>

//                             <div className='d-flex'>
//                                 <div>
//                                 <VscMail/>
//                                 </div>
//                                 <div>
//                                 <p className='student-para'>email</p>
//                                 </div>
//                             </div>
//                             <div className='d-flex'>
//                                 <div>
//                                 <BiPhone/>
//                                 </div>
//                                 <div>
//                                 <p className='student-para'>phone</p>
//                                 </div>
//                             </div>

//                         </Col>

//                         <Col md-6>
                            
//                             <img src={profile} alt='' className='student-img'/>
//                             <p className='developer-para'>App Developer</p>
                            
//                         </Col>
//                     </Row>
                    
//                     <Row>
//                     <div className='button-main'>   
//                         <div>
//                         <Link  color='light' className='shadow form-back-button btn btn-success' style={{backgroundColor:"#4C6A61",color:'white'}}>
//                             Update
//                         </Link>
//                         </div>
//                         <div>
//                         <Button color='success' className='shadow form-update-button' style={{backgroundColor:"#E6555E",color:'white',border:'none'}}>
//                             Delete
//                         </Button>
//                         </div>
//                     </div>
//                     </Row>
//                 </Card>
//             </div>
//         </div>
//         </Layout>

//     </div>
//   )
// }

// export default CourseSingleView
