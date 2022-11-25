import { map } from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Card, Input, Table } from "reactstrap";
import { studentCourseApi, studentCourseDeleteApi } from "../../CourseCategory/useApi";
import Layout from "../Layout/Layout";
import "./Studentcourse.css";

function Studentcourse() {

  const dispatch=useDispatch()

  const{studentCourse}=useSelector((state)=>({
    studentCourse:state.CourseCategory.studentCourse
  }));


  const courseData=studentCourse?.results
  useEffect(()=>{
    dispatch(studentCourseApi())
  },[dispatch])

  const deleteStudentCourse =(id)=>{
    dispatch(studentCourseDeleteApi(id));
  }


  return (
    <div>
      <Layout>
        <div className="banner-main" style={{ paddingTop: "30px" }}>
          <div className="card-div">
            <Card className="table-card shadow-lg p-3 mb-5 bg-white rounded">
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <div>
                  <h5 className="banner-heading">Student Course</h5>
                </div>
                <div>
                  <Link to={'/createstudentcourse'}>
                    <Button
                      style={{ backgroundColor: "#34C38F", border: "none" }}
                    >
                      + Create New Course
                    </Button>
                  </Link>
                </div>
              </div>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Course Name</th>
                    <th>Progress</th>
                    <th>Update Progress</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                    {map(courseData,(item,key)=>(
                      <tr key={key}>
                      <td scope="row">{item.student_name}</td>
                      <td>{item.course_name}</td>
                      <td>{item.progress}</td>

                   
                    <td>
                      <Input className="w-50" type="select"></Input>
                    </td>
                    <td>
                      <div style={{ display: "flex",alignItems:'center'}}>
                        {/* <div>
                          <Button
                            style={{
                              background: 'rgba(85, 110, 230, 0.180392)',
                              color: '#556EE6',
                              border: "none",
                              width: "50px",
                              height: "20px",
                              fontSize: "12px",
                              padding:'0px'
                            }}
                          >
                            View
                          </Button>
                        </div> */}
                        <div style={{ paddingLeft: "5px" }}>
                          <Button
                            onClick={()=>{deleteStudentCourse(item.id)}}
                            style={{
                              background: '#F46A6A',
                              border: "none",
                              width: "50px",
                              height: "20px",
                              fontSize: "12px",
                              padding:'0px'
                              
                            }}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    </td>
                  </tr>
                   ))}
                  
                </tbody>
              </Table>
            </Card>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Studentcourse;
