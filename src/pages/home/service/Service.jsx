import React from "react";
import "./Service.css";

const Service = ({ theme }) => {
  return (
    <>
      <div className='section_service' id={theme}>
        <h2 className='section_title' id={theme}>
          Services
        </h2>
        <p className='info_text' id={theme}>
          Transforming your ideas into reality
        </p>
        <div className='section_wrapper'>
          <div className='box1'>
            <h2 className='main_text'>Design</h2>
          </div>
          <div className='box2'>
            <h2 className='main_text'>Digital marketing</h2>
          </div>
          <div className='box3'>
            <h2 className='main_text'>WEB</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
