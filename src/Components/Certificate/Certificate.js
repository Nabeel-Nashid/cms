import React, { useEffect } from "react";
import "./Certificate.css";
import xanthron from "../Certificate/xanthron-removebg.png";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { studentViewApi } from "../../Students/useApi";
import { map } from "lodash";
import { Button, Col, Row } from "reactstrap";

function Certificate() {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(studentViewApi(params.id));
  }, [dispatch]);

  const { singleView } = useSelector((state) => ({
    singleView: state.CreateReducer.singleView,
  }));

  const progressArray=singleView?.student_courses?. map((item)=>
    parseInt(item?.progress)
  )

  const Total=progressArray?. reduce((x,y) => x+y ,0)
  console.log(Total);

  const length = singleView?.student_courses?.length
  console.log(length);

  const gtotal = length*10
  console.log(gtotal);

  const rating = (Total/gtotal)*10
  console.log(rating);

  const course = singleView?.student_courses;
  const totalStars = 10;

  const mainStar = 10

  const HandlePrint=(e)=>{
    e.preventDefault();
    window.print()
  }
  return (
    <div>
      <section className="section-1">
        <div className="main-div">
          <img src={xanthron}></img>
        </div>
        <h1 className="c-main-heading">Certificate</h1>
        <h4 className="c-sub-heading">of Experiance</h4>
        <h4 className="c-sub-heading-2">this certify that</h4>
        <h3 className="c-name">{singleView.full_name}</h3>
        <h3 className="c-name-1">{rating}/10</h3>

        <div style={{textAlign:'center'}}>
        {[...new Array(mainStar)].map((Array, index) => {
                      return index <  Math.floor(rating)? (
                        <AiFillStar size={15} color={"01579b"} />
                      ) : (
                        <AiOutlineStar size={15} color={"01579b"} />
                      );
                    })}
        </div>
        <p className="c-para">
          was employed at <b>Xanthron e-solutions</b> as a{" "}
          <b>web application developer,</b>
          from{" "}
          <b>
            {singleView.start_date} to {singleView.end_date}
          </b>{" "}
          while showcasing aprofessional commandable work attitude throughout
          the specified time period.
        </p>
        <p className="c-para-2">
          We wish all the best in his/her future endeavors
        </p>
        <h6 className="c-ceo">CEO</h6>
      </section>

    
      <div>
        <h1 className="score">Score</h1>
        <p className="c-para-3">(Based on Practices and Assenssments)</p>
        <h1 className="c-heading-web">Web Application Developer</h1>


        {map(course, (item, key) => (
              <div className="d-flex justify-content-center" style={{alignItems:'baseline'}}>
                
                    <h3 style={{minWidth:"150px",marginBottom:'3px'}}>
                      {item.course.course_name}
                    </h3>
                  
                  <div>
                    {[...new Array(totalStars)].map((arr, index) => {
                      return index < item.progress ? (
                        <AiFillStar size={20} color={"cab987"} />
                      ) : (
                        <AiOutlineStar size={20} color={"cab987"} />
                      );
                    })}
                  </div>
                 
                 
              </div>
          ))}


          {/* <button id="print" onClick={HandlePrint}>Print</button> */}

          <div className="d-flex justify-content-center mt-5"> 
           <Button id="print" onClick={HandlePrint} >Print</Button>
          </div>

      </div>

    </div>
  );
}

export default Certificate;
