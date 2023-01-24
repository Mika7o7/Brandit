import React from "react";
import "./Header.css";
import monitor from "../../../logos/monitor.png";
import light from "../../../logos/Ellipse 2.png";
import panel from "../../../logos/Frame 98.png";
import { Link } from "react-router-dom";

const Header = ({ theme }) => {
  return (
    <>
      <div className='header' id={theme}>
        <div className='content' id={theme}>
          <img className='monitor' src={monitor} />

          <div className='info' id={theme}>
            <h1 className='info_title' id={theme}>
              Brand identity and logo design
            </h1>
            <p className='info_text' id={theme}>
              The first step for high quality brand is to have quality logo and
              design!
            </p>
            <p className='info_subtitle' id={theme}>
              Lets’s Get Started
            </p>
            <Link to='/startproject'>
              <button className='info_button'>Start A Project</button>
            </Link>

            {/* <img className='bg_light' src={light} alt='' /> */}
          </div>
          <div className='panel'>
            <img src={panel} alt='' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
