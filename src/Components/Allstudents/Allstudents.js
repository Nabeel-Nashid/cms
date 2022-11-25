import { map, range } from 'lodash'
import React, { useEffect, useState } from 'react'
import { Card, Row, Table } from 'react-bootstrap'
import { BsChevronLeft, BsChevronRight, BsEye } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Col, Dropdown, Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { studentApi } from '../../Students/useApi'
import Layout from '../Layout/Layout'
import './Allstudents.css'


function Allstudents() {

    
    const {count,students} = useSelector((state)=>({
        students:state.CreateReducer.all_students,
        count:state.CreateReducer.all_students.count
    }))
    
    
    const dispatch=useDispatch()
    const tableData=students?.results;
    const totalPages=Math.round(count/10);
    const pageArray=range(1,totalPages+1);
    
    const [pages, setPages]=useState(1);
    
    useEffect(() =>{
        dispatch(studentApi(pages))
    },[dispatch,pages])
    

  return (
    <div>
      <Layout>
        <div className='banner-main'>
        <h5 className='banner-heading'>Students</h5>
        <div className='card-div'>
        <Card className='table-card shadow-lg p-3 mb-5 bg-white rounded'>
        <div className='search-div'>
            <div className='d-flex justify-content-between'>
                <div>
                <input placeholder='Search....' className='all-search'/>
                </div>
                <div>
                    Show <input type={'text'} style={{width:'50px'}}/> Entities
                </div>
            </div>
        </div>
        <Table responsive>
            <thead>
                <tr>
                <th>
                    ID
                </th>
                <th>
                    Name
                </th>
                <th>
                    Phone
                </th>
                <th>
                    e-mail
                </th>
               
                <th>
                    Action
                </th>
                </tr>
            </thead>
            <tbody>
                {map(tableData,(item,key)=>(
                    <tr key={key}>
                        <th scope="row">
                            {key+1}
                        </th>
                        <td>
                            {item?.full_name}
                        </td>
                        <td>
                            {item?.phone}
                        </td>
                        <td>
                            {item?.email}
                        </td>
                        <td>
                            <Link to={`/student/${item?.id}`}><BsEye/></Link>
                        </td>

                    </tr>

                ))}
                
                
                
                
            </tbody>
        </Table>
        
            
        <Row>
            <Col>
                <BsChevronLeft onClick={()=>setPages(pages-1)}/>
            </Col>

            
                {map(pageArray,(page)=>(
                    <Col style={{cursor:'pointer'}}
                    className={pages === page && 'active'}
                    onClick={()=> setPages(page)}
                    >
                        {page}
                    </Col>
                ))}
            

            <Col>
                <BsChevronRight onClick={()=>setPages(pages+1)}/>
            </Col>
        </Row>
        
        </Card>
        </div>
        </div>
    </Layout>
    </div>
  )
}

export default Allstudents
