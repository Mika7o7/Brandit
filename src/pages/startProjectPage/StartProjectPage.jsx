import "./StartProjectPage.css";
import vec from "./../../logos/Vector233.png";
import vecDark from "./../../logos/skrepkaDark.png";
import { useState } from "react";

export const StartProjectPage = ({ theme }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className='wrapper_start' id={theme}>
      <div className='section'>
        <h2 className='section_title2' id={theme}>
          Start Project
        </h2>
        <p className='info_text2' id={theme}>
          What do you want?
        </p>
        <form action=''>
          <div className='proj_form'>
            <div className='question'>
              <label htmlFor='' id={theme}>
                Price Offer
              </label>
              <input
                type='radio'
                name='type_of_project'
                onClick={() => {
                  setIsActive(false);
                }}
              />
            </div>
            <div className='question'>
              <label htmlFor='' id={theme}>
                Schedule a call
              </label>
              <input
                type='radio'
                name='type_of_project'
                onClick={() => {
                  setIsActive(true);
                  console.log(isActive);
                }}
              />
            </div>
          </div>
          <div className='second_form'>
            <div className={isActive ? "huge_div" : "second_question"}>
              <label htmlFor='' id={theme}>
                {isActive ? "Project Type" : "Project Type"}
              </label>
              <input
                className={theme === "light" ? "light_bg_input" : ""}
                type='select'
                placeholder='Select Project types'
              />
            </div>
            {isActive ? (
              ""
            ) : (
              <>
                <p className='form_sub_title' id={theme}>
                  Company Details
                </p>
                <input
                  className={theme === "light" ? "light_bg_input" : ""}
                  type='text'
                  placeholder='*Company Name'
                />
                <textarea
                  className={theme === "light" ? "light_bg_input" : ""}
                  name=''
                  id=''
                  rows='10'
                  placeholder='Tell us about your project'
                ></textarea>
                <div className='file_upload'>
                  {theme === "light" ? (
                    <img src={vecDark} alt='' width={23} />
                  ) : (
                    <img src={vec} alt='' width={23} />
                  )}
                  <label
                    for='file-upload'
                    className='custom-file-upload'
                    id={theme}
                  >
                    Attach file
                  </label>
                  <input id='file-upload' type='file' />
                </div>
              </>
            )}

            <p className='form_sub_title' id={theme}>
              Personal Details
            </p>
            <div className='there_form'>
              <div className='there_sub_form'>
                <input
                  className={theme === "light" ? "light_bg_input" : ""}
                  type='text'
                  placeholder='*First Name'
                />
                <input
                  className={theme === "light" ? "light_bg_input" : ""}
                  type='text'
                  placeholder='*Surname'
                />
              </div>
              <div className='there_sub_form'>
                <input
                  className={theme === "light" ? "light_bg_input" : ""}
                  type='text'
                  placeholder='*Email'
                />
                <input
                  className={theme === "light" ? "light_bg_input" : ""}
                  type='text'
                  placeholder='*Phone Number'
                />
              </div>
            </div>
            {isActive ? (
              <div className='data_time_sec'>
                <p className='form_sub_title' id={theme}>
                  Date & Time
                </p>
                <div className='there_form_sec'>
                  <input
                    className={theme === "light" ? "light_bg_input" : ""}
                    type='text'
                    placeholder='Date'
                  />
                  <input
                    className={theme === "light" ? "light_bg_input" : ""}
                    type='text'
                    placeholder='Time'
                  />
                </div>
              </div>
            ) : (
              ""
            )}
            <button className='form_button_2'>send</button>
          </div>
        </form>
      </div>
    </div>
  );
};
