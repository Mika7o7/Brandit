import "./ContactUs.css";
import phone from "../../logos/Rectangle 2324.png";

export const ContactUs = ({ theme }) => {
  return (
    <div className='wrapper_contact' id={theme}>
      <div className='section_wrapper' id={theme}>
        <div className='contact_section'>
          <div className='contact_content'>
            <div className='section_title' id={theme}>
              Contact Us
            </div>
            <h2 id={theme}>Start your project with Brandit</h2>
            <p id={theme} className='contact_text'>
              Send us a message today to get started.
            </p>
          </div>

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

        <img className='contact_img' src={phone} alt='' />
      </div>
    </div>
  );
};
