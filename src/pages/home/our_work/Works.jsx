import React from "react";
import { Link } from "react-router-dom";
import "./Works.css";
import img_1 from "../../../logos/work_area/work1.png";
import img_2 from "../../../logos/work_area/work2.png";
import img_3 from "../../../logos/work_area/work3.png";
import img_4 from "../../../logos/work_area/work4.png";
import img_5 from "../../../logos/work_area/work5.png";
import vector from "../../../logos/Vector.png";

const Works = ({ theme }) => {
  return (
    <>
      <div className='our_works' id={theme}>
        <h2 className='section_title' id={theme}>
          Our Works
        </h2>
        <p className='info_text wid' id={theme}>
          Some of the projects we have worked on
        </p>
        <div className='works_box'>
          <div className='works_box_1'>
            <img src={img_1} alt='' />
            <img src={img_2} alt='' />
            <img src={img_5} alt='' />
            <img src={img_3} alt='' />
            <img src={img_1} alt='' />
            <img src={img_5} alt='' />
          </div>
          <div className='works_box_2'>
            <img src={img_2} alt='' />
            <img src={img_3} alt='' />
            <img src={img_1} alt='' />
            <img src={img_4} alt='' />
            <img src={img_5} alt='' />
            <img src={img_5} alt='' />
          </div>
          <div className='works_box_3'>
            <img src={img_3} alt='' />
            <img src={img_2} alt='' />
            <img src={img_4} alt='' />
            <img src={img_2} alt='' />
            <img src={img_1} alt='' />
            <img src={img_5} alt='' />
          </div>
        </div>
        <div className='works_wrapper'>
          <Link to='/works'>
            <button className='info_button'>
              View More <img src={vector} className='vector rek' />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Works;
