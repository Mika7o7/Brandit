import React from "react";
import "./Comment.css";
import underskor from "../../../logos/storaket.png";
import underskor2 from "../../../logos/storaket2.png";
import user_logo from "../../../logos/Ellipse 5.png";
import slaqjax from "../../../logos/slaqjax.png";
import slaqach from "../../../logos/slacach.png";

const Comment = ({ theme }) => {
  return (
    <>
      <div className='section_comment' id={theme}>
        <h2 className='section_title' id={theme}>
          What our clients say
        </h2>
        <p className='comment_text' id={theme}>
          See what our customer say about us. It really matter for us. How good
          or bad we will make it for evaluatin to make Brandit better.
        </p>
        <img className='slaqjax' src={slaqjax} alt='' width={10} height={20} />
        <img className='slaqach' src={slaqach} alt='' width={10} height={20} />
        <div className='section_wrapper2'>
          <div className='box'>
            <div className='box_top'>
              <img className='top_underscor' src={underskor} alt='' />
            </div>

            <div className='box_middle'>
              <p className='box_text'>
                “I don’t know in real-time where the money is spent, and I don’t
                have to lend out the company’s credit card anymore. What a
                releif!”
              </p>
            </div>

            <div className='box_butom'>
              <div className='box_user_comment'>
                <img className='box_comment_img' src={user_logo} alt='' />
                <div className='box_comment_text'>
                  <h2 className='box_user_text_title'>Denny Hilguston</h2>
                  <p className='box_user_text'>@denny_hill</p>
                </div>
              </div>
              <img className='top_underscor' src={underskor2} alt='' />
            </div>
          </div>

          <div className='box'>
            <div className='box_top'>
              <img className='top_underscor' src={underskor} alt='' />
            </div>

            <div className='box_middle'>
              <p className='box_text'>
                “I don’t know in real-time where the money is spent, and I don’t
                have to lend out the company’s credit card anymore. What a
                releif!”
              </p>
            </div>

            <div className='box_butom'>
              <div className='box_user_comment'>
                <img className='box_comment_img' src={user_logo} alt='' />
                <div className='box_comment_text'>
                  <h2 className='box_user_text_title'>Denny Hilguston</h2>
                  <p className='box_user_text'>@denny_hill</p>
                </div>
              </div>
              <img className='top_underscor' src={underskor2} alt='' />
            </div>
          </div>

          <div className='box'>
            <div className='box_top'>
              <img className='top_underscor' src={underskor} alt='' />
            </div>

            <div className='box_middle'>
              <p className='box_text'>
                “I don’t know in real-time where the money is spent, and I don’t
                have to lend out the company’s credit card anymore. What a
                releif!”
              </p>
            </div>

            <div className='box_butom'>
              <div className='box_user_comment'>
                <img className='box_comment_img' src={user_logo} alt='' />
                <div className='box_comment_text'>
                  <h2 className='box_user_text_title'>Denny Hilguston</h2>
                  <p className='box_user_text'>@denny_hill</p>
                </div>
              </div>
              <img className='top_underscor' src={underskor2} alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
