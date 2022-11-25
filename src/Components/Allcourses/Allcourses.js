import React, { useEffect } from 'react'
import { Card, Input, Table } from 'reactstrap'
import Layout from '../Layout/Layout'
import { VscChromeClose, VscEdit } from "react-icons/vsc";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './Allcourses.css'
import { useDispatch, useSelector } from 'react-redux';
import { allCourseApi, allCourseCategoryApi, courseDeleteApi } from '../../CourseCategory/useApi';
import { Link } from 'react-router-dom';
import { map } from 'lodash';

function Allcourses() {

    const dispatch=useDispatch()

    const { allCourse } = useSelector((state) => ({
        allCourse: state.CourseCategory.allCourse
      }));
  
      useEffect(() =>{
        dispatch(allCourseApi())
      },[dispatch])

      const deleteCourse =(id)=>{
        dispatch(courseDeleteApi(id));
      }

  return (
    <div>
      <Layout>
        <div className='banner-main'>
        <h5 className='banner-heading'>Courses</h5>
        <div className='card-div'>
            <Card className='table-card-allcourse shadow-lg p-3 mb-5 bg-white rounded'>
                <Table responsive>
                        <thead>
                            <tr>
                            <th className='th-allcourse'>
                                ID
                            </th>
                            <th className='th-allcourse'>
                                Course Name
                            </th>
                            <th className='th-allcourse'>
                                Duration
                            </th>
                            <th className='th-allcourse'>
                                Course Category
                            </th>
                            <th className='th-allcourse'>
                                Action
                            </th>
                            </tr>
                        </thead>
                        <tbody>

                            {map(allCourse?.results,(item,key)=>(
                                <tr key={key}>
                                    <th scope="row" className='th-allcourse'>
                                        {key+1}
                                    </th>
                                    <td className='th-allcourse'>
                                        {item.course_name}
                                    </td>
                                    <td className='th-allcourse'> 
                                        {item.duration}
                                    </td>
                                    <td className='th-allcourse'>
                                        {item.course_category} 
                                    </td>    

                                     <td>
                                        <div className='d-flex justify-content-center'>
                                            <div className='edit-icon'>
                                            <Link to={`/upadatecourse/${item.id}`}>
                                                <VscEdit/>
                                            </Link>
                                            </div>
                                            <div className='x-icon ps-2'>
                                            <VscChromeClose onClick={()=>{deleteCourse(item.id)}}/>
                                            </div>
                                        </div>
                                    </td>      

                                </tr>
                            ))}
    

                        </tbody>                        
                    </Table>
                    <div className="pageno">
            <Pagination
              className="page"
              aria-label="Page navigation example">

              <PaginationItem disabled className='page-nation'>
                <PaginationLink style={{border:'none'}} className="page-link" href="#" previous />
              </PaginationItem>
              <PaginationItem disabled>
                <PaginationLink style={{border:'none'}} href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink style={{border:'none'}} href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink style={{border:'none'}} href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink style={{border:'none'}} href="#">4</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink style={{border:'none'}} href="#">5</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink style={{border:'none'}} href="#" next />
              </PaginationItem>
            </Pagination>
        </div>
            </Card>
        </div>
        </div>
      </Layout>
    </div>
  )
}

export default Allcourses
