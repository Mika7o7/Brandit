import "./WorksPage.css";
import img1 from "../../logos/image 2.png";
import img2 from "../../logos/image 3.png";
import img3 from "../../logos/image 4.png";
import img4 from "../../logos/image 7.png";
import img5 from "../../logos/image 8.png";
import img6 from "../../logos/image 11.png";
import img7 from "../../logos/Rectangle 22.png";
import img8 from "../../logos/Rectangle 26.png";
import img9 from "../../logos/Rectangle 24.png";
import img10 from "../../logos/Rectangle 19.png";

const WorksPage = ({ theme }) => {
  return (
    <div className='wrapper_work' id={theme}>
      <div className='section' id={theme}>
        <h2 className='section_title' id={theme}>
          Brandit
        </h2>
        <div className='section_wrappet'>
          <img className='same_img' src={img1} alt='' width={"100%"} />
          <div className='grafic'>
            <div>
              <p className='p1' id={theme}>
                Client
              </p>
              <h3 className='h3' id={theme}>
                Brandit
              </h3>
            </div>
            <div>
              <p className='p1' id={theme}>
                Designer
              </p>
              <h3 className='h3' id={theme}>
                Mark Jude
              </h3>
            </div>
            <div>
              <p className='p1' id={theme}>
                Year
              </p>
              <h3 className='h3' id={theme}>
                2022
              </h3>
            </div>
            <div>
              <p className='p1' id={theme}>
                Category
              </p>
              <h3 className='h3' id={theme}>
                Branding
              </h3>
            </div>
          </div>
          <div className='works_info'>
            <h3 className='h3' id={theme}>
              Brief
            </h3>
            <p className='text_1' id={theme}>
              Brief Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Natoque vel pellentesque nulla mauris et vitae ultricies lorem.
              Dignissim pulvinar auctor vel aenean ornare diam vulputate. Amet
              purus nulla mi consequat libero augue aliquet id diam. Leo, nisi
              faucibus maecenas facilisis. Mauris venenatis augue a semper. Dui
              et massa tellus in viverra in lorem elementum, sed. Suspendisse ut
              dolor et fermentum consectetur. Lectus eget bibendum viverra arcu,
              sit duis ultrices. Sit ultricies nulla dictumst vestibulum at id.
              Tellus ut viverra massa amet habitasse arcu, sapien aliquam.
            </p>
          </div>
          <div className='works_info'>
            <h3 className='h3' id={theme}>
              Design
            </h3>
            <div className='design_info'>
              <img className='img_2' src={img2} alt='' width={710} />
              <img className='img_2' src={img3} alt='' width={710} />
              <img className='img_2' src={img4} alt='' width={710} />
              <img className='img_2' src={img5} alt='' width={710} />
              <img className='img_3' src={img6} alt='' width={1440} />
            </div>
          </div>
          <div className='similar_info'>
            <h3 className='h3' id={theme}>
              Similar Project
            </h3>
            <div className='design_info'>
              <img className='img_2' src={img7} alt='' width={710} />
              <img className='img_2' src={img8} alt='' width={710} />
              <img className='img_2' src={img9} alt='' width={710} />
              <img className='img_2' src={img10} alt='' width={710} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksPage;
