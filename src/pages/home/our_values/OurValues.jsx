import React from "react";
import "./OurValues.css";
import icon1 from "../../../logos/icon1.png";
import icon2 from "../../../logos/icon2.png";
import icon3 from "../../../logos/icon3.png";
import icon4 from "../../../logos/icon4.png";
import icon5 from "../../../logos/icon5.png";
import icon6 from "../../../logos/icon6.png";
import slaqjax from "../../../logos/slaqjax.png";
import slaqach from "../../../logos/slacach.png";

const OurValues = ({ theme }) => {
  return (
    <div className='section_value' id={theme}>
      <div className='section_title' id={theme}>
        Our Values
      </div>
      <img
        className='slaqjax_for_values'
        src={slaqjax}
        alt=''
        width={10}
        height={20}
      />
      <img
        className='slaqach_for_values'
        src={slaqach}
        alt=''
        width={10}
        height={20}
      />
      <div className='values_wrapper'>
        <div className='values_box'>
          <img src={icon1} alt='' width={70} height={70} />
          <div className='values_text'>
            <h2 id={theme}>GROWTH</h2>
            <p id={theme}>
              This is what we will bring to your business. More fame between
              your individual type of businesses. More clients and which by
              itself means more sales. Our clients have experienced it just
              after months. Making your business grow also.
            </p>
          </div>
        </div>

        <div className='values_box'>
          <img src={icon2} alt='' width={70} height={70} />
          <div className='values_text'>
            <h2 id={theme}>STRATEGY</h2>
            <p id={theme}>
              With plenty of experience from our work and in-depth analysis of
              more advanced agencies, we process the most effective method to
              grow your business in a short time. Many companies collapse with
              no strategy.
            </p>
          </div>
        </div>

        <div className='values_box'>
          <img src={icon3} alt='' width={70} height={70} />
          <div className='values_text'>
            <h2 id={theme}>TRANSPARENCY</h2>
            <p id={theme}>
              We are open, honest, and straight forward to our clients. This is
              how we gain trust, and this is how we keep our agency's name
              clear. In return, we get the same clear and friendly
              relationships. Whatever we do, this is the most valuable thing for
              us.
            </p>
          </div>
        </div>

        <div className='values_box'>
          <img src={icon4} alt='' width={70} height={70} />
          <div className='values_text'>
            <h2 id={theme}>TRUST</h2>
            <p id={theme}>
              Trust is one of the most meaningful things in our job. By growing
              up with our partners we have gained irreplaceable things such as
              experience and trust. And this gives us the most value.
            </p>
          </div>
        </div>

        <div className='values_box'>
          <img src={icon5} alt='' width={70} height={70} />
          <div className='values_text'>
            <h2 id={theme}>UNIQUENESS</h2>
            <p id={theme}>
              Most of our clients are not the only ones in their sphere. So we
              work on making them unique and creative, separating them from the
              gray crowd. From the plenty of fish, you will notice at first the
              one that shines the best with its uniqueness.
            </p>
          </div>
        </div>

        <div className='values_box'>
          <img src={icon6} alt='' width={70} height={70} />
          <div className='values_text'>
            <h2 id={theme}>RESPONSIBILITY</h2>
            <p id={theme}>
              We are open, honest, and straight forward to our clients. This is
              how we gain trust, and this is how we keep our agency's name
              clear. In return, we get the same clear and friendly
              relationships. Whatever we do, this is the most valuable thing for
              us. us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
