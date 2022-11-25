  import React, { useEffect } from 'react'
  import { Card, Input, Table } from 'reactstrap'
  import Layout from '../Layout/Layout'
  import { VscChromeClose, VscEdit } from "react-icons/vsc";
  import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
  import './Coursecategory.css'
  import { useDispatch, useSelector } from 'react-redux';
  import { Link, useNavigate, useParams } from 'react-router-dom';
  import { allCourseCategoryApi, deleteCourseApi } from '../../CourseCategory/useApi';
  import { map } from 'lodash';
import { BsEye } from 'react-icons/bs';

  function Coursecategory() {

    const dispatch=useDispatch()
    const params=useParams()

    const deleteStudent =(id)=>{
      dispatch(deleteCourseApi(id));
    };
    

    
    const { CourseCategory } = useSelector((state) => ({
      CourseCategory: state.CourseCategory.nabeel,
    }));

    useEffect(() =>{
      dispatch(allCourseCategoryApi())
    },[dispatch])
    
    const table = CourseCategory?.results
    const catId = params.id;
    // console.log(CourseCategory?.results.id);







    return (
      <div>
        <Layout>
          <div className='banner-main'>
          <h5 className='banner-heading'>Courses</h5>
          <div className='card-div'>
              <Card className='table-card-coursecategory shadow-lg p-3 mb-5 bg-white rounded'>
                  <Table responsive>
                          <thead>
                              <tr>
                              <th className='th-allcourse'>
                                  ID
                              </th>
                              <th className='th-allcourse'>
                                  Course Category Name
                              </th>
                              <th className='th-allcourse'>
                                  Designation
                              </th>
                              <th className='th-allcourse'>
                                  Action
                              </th>
                              </tr>
                          </thead>
                          <tbody>

                              {map(table,(item,key)=>(
                                  <tr key={key} >
                                      <th scope="row">

                                      </th>
                                      <td>
                                          {item.course_category_name}
                                      </td>
                                      <td>
                                          {item.designation}
                                      </td>
                                      <td>

                                        <div className='d-flex justify-content-center'>
                                          <div className='edit-icon'>
                                            <Link to={`/updatecoursecategory/${item?.id}`}><VscEdit/></Link>
                                          </div>
                                          <div className='x-icon ps-2'>
                                             <VscChromeClose onClick={()=>{deleteStudent(item.id)}}/>
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

  export default Coursecategory
