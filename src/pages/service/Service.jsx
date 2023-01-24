import "./Service.css";

export const Service = ({ theme }) => {
  return (
    <div className='wrapper' id={theme}>
      <div className='service_section'>
        <div className='section_title' id={theme}>
          Service
        </div>
        <p className='service_text' id={theme}>
          We specialize in transforming your business ideas into reality
        </p>
        <div className='service_wrapper'>
          <div
            className={
              theme === "light" ? "service_box light" : "service_box dark"
            }
          >
            <h2 className={theme === "light" ? "light" : "dark"}>
              Web Design & Integration
            </h2>
            <p className={theme === "light" ? "light" : "dark"}>
              From mockup to functioning site, we can take care of every step of
              the website creation process.
            </p>
          </div>

          <div
            className={
              theme === "light" ? "service_box light" : "service_box dark"
            }
          >
            <h2 className={theme === "light" ? "light" : "dark"}>
              SOCIAL MEDIA MARKETING
            </h2>
            <p className={theme === "light" ? "light" : "dark"}>
              We'll take care of all your social media design needs. Logo's,
              Banners, giveaway graphics and more!
            </p>
          </div>
          <div
            className={
              theme === "light"
                ? "service_box_large light"
                : "service_box_large dark"
            }
          >
            <h2 className={theme === "light" ? "light" : "dark"}>
              Animation & Promo Videos
            </h2>
            <p className={theme === "light" ? "light" : "dark"}>
              Want to showcase your project? Let us create an on brand
              masterpiece that captures your holders attention.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
