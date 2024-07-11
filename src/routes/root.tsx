import { Outlet } from 'react-router-dom';
import NavBar from '../components/navbar/NavBar.tsx';
import GlobalStyle from '../globalStyles.ts';
import Header from '../components/hero/Hero.tsx';
import SectionAos from '../components/section/Section.tsx';
import Footer from '../components/footer/Footer.tsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Techs from '../components/tech/Tech.tsx';

const Root = () => {
  return (
    <>
      <GlobalStyle />

      <Outlet />

      <NavBar />

      <Header />

      <SectionAos id="about" title="Full Stack Web Developer" subtitle="and an eager learner 📚" backgroundColor="bege" >
        <p>teste</p>
      </SectionAos>

      <SectionAos id="experience" title="Education" subtitle="subtitle" backgroundColor="black">
        <Techs imageslink="../../public/c.svg"></Techs>
        <Techs imageslink="../../public/angular.svg"></Techs>
        <Techs imageslink="../../public/react.svg"></Techs>
        <Techs imageslink="../../public/redux.svg"></Techs>
        <Techs imageslink="../../public/typescript.svg"></Techs>
        <Techs imageslink="../../public/linux.svg"></Techs>
        <Techs imageslink="../../public/docker.svg"></Techs>
        <Techs imageslink="../../public/java.svg"></Techs>
        <Techs imageslink="../../public/postgresql.svg"></Techs>
        <Techs imageslink="../../public/html.svg"></Techs>
        <Techs imageslink="../../public/css.svg"></Techs>
        <Techs imageslink="../../public/bootstrap.svg"></Techs>
        <p>Texto</p>
      </SectionAos>

      <SectionAos id="experience" title="Project" subtitle="subtitle" backgroundColor="black"><p>Texto</p></SectionAos>

      <Footer />
    </>
  );
};

export default Root;
