import React from "react";
import "./Portfolio.css";
import imag1 from "../../logos/Rectangle 22.png";
import imag2 from "../../logos/Rectangle 20.png";
import imag3 from "../../logos/Rectangle 17.png";
import imag4 from "../../logos/image 5.png";
import imag5 from "../../logos/Rectangle 21.png";
import imag6 from "../../logos/Rectangle 19.png";

export const Portfolio = ({ theme }) => {
  return (
    <div className='wrapper' id={theme}>
      <div className='section' id={theme}>
        <h2 className='section_title' id={theme}>
          Portfolio
        </h2>
        <p className='info_text_portfolio' id={theme}>
          Some of the projects we have worked on
        </p>
        <div className='portfolio_navbar'>
          <p id={theme}>All</p>
          <p id={theme}>Branding</p>
          <p id={theme}>Packaging Design</p>
          <p id={theme}>Logo Design</p>
          <p id={theme}>Naming</p>
          <p id={theme}>Ads & Media</p>
          <p id={theme}>UI/UX Design</p>
        </div>
        <div className='img_wrapper'>
          <img className='img_projcet' src={imag1} alt='' />
          <img className='img_projcet' src={imag2} alt='' />
          <img className='img_projcet the' src={imag3} alt='' />
        </div>

        <img src={imag4} alt='' />

        <div className='img_wrapper'>
          <img className='img_second' src={imag5} alt='' />
          <img className='img_second' src={imag6} alt='' />
        </div>
      </div>
    </div>
  );
};
