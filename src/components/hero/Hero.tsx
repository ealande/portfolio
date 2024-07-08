import { HeroSection } from "./styles";

const Header = () => {
  return (
    <div>
      <HeroSection className="light hero" >
        <div className="heroInner" >
          <span>
            <h1>Hi! I'm Erick Lima :) </h1>
            <a href="#" className="btn btn-light" >
              Download Resume
            </a>
          </span>
        </div>
      </HeroSection>
    </div>
  );
};

export default Header;
