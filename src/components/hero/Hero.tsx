import { HeroImage, HeroSection } from "./styles";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Header = () => {
  return (
    <div>
      <HeroSection className="light hero" >
        <div className="heroInner" >
          <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
            <HeroImage src="../../../public/profileRound.jpg">
            </HeroImage>
          </div>
          <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
            <h1>Hi! <br /> I'm Erick Lima 😊</h1>
            <h2>Full Stack Web Developer</h2>
            <a href="#" className="btn btn-light" >
              Download Resume
            </a>

          </div>
        </div>
      </HeroSection>
    </div>
  );
};

export default Header;
