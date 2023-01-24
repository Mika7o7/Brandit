import "./About.css";
import About_us from "../../logos/About us 1.png";
import About_img from "../../logos/Pexels Photo by fauxels.png";

export const About = ({ theme }) => {
  return (
    <div className='wrapper' id={theme}>
      <div className='section_wrapper' id={theme}>
        <div className='section'>
          <div className='section_title' id={theme}>
            About
          </div>
          <img className='smole_img' src={About_img} alt='' />

          <p className='about_text' id={theme}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Natoque vel
            pellentesque nulla mauris et vitae ultricies lorem. Dignissim
            pulvinar auctor vel aenean ornare diam vulputate. Amet purus nulla
            mi consequat libero augue aliquet id diam. Leo, nisi faucibus
            maecenas facilisis. Mauris venenatis augue a semper. Dui et massa
            tellus in viverra in lorem elementum, sed. Suspendisse ut dolor et
            fermentum consectetur. Lectus eget bibendum viverra arcu, sit duis
            ultrices. Sit ultricies nulla dictumst vestibulum at id. Tellus ut
            viverra massa amet habitasse arcu, sapien aliquam.
          </p>
        </div>
        <img className='about_img' src={About_us} alt='' />
      </div>
    </div>
  );
};
