import React from "react";
import "./StartProject.css";
import rectangel from "../../../logos/Rectangle 3.png";

const StartProject = ({ theme }) => {
  return (
    <div className='section_project_start'>
      <div className='section_wrapper'>
        <div className='project_content'>
          <h2 className='project_section_title' id={theme}>
            Start your project with Brandit
          </h2>
          <p className='info_text' id={theme}>
            Send us a message today to get started.
          </p>
          <form className='project_form' action=''>
            <input
              className={
                theme === "light" ? "project_input light_bg" : "project_input"
              }
              type='text'
              id='text'
              placeholder='Name'
            />
            <input
              className={
                theme === "light" ? "project_input light_bg" : "project_input"
              }
              type='text'
              id='email'
              placeholder='Email'
            />
            <input
              className={
                theme === "light"
                  ? "project_input marg light_bg"
                  : "project_input marg"
              }
              type='text'
              id='message'
              placeholder='Message'
            />
            <div className='project_button'>
              <button className='info_button'>Send Message</button>
            </div>
          </form>
        </div>
        <img className='rectangel_img' src={rectangel} alt='' />
      </div>
    </div>
  );
};

export default StartProject;
