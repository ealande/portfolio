import { Outlet } from 'react-router-dom';
import NavBar from '../components/navbar/NavBar.tsx';
import GlobalStyle from '../globalStyles.ts';
import Header from '../components/hero/Hero.tsx';
import SectionAos from '../components/section/Section.tsx';
import Footer from '../components/footer/Footer.tsx';
import 'aos/dist/aos.css';
import Techs from '../components/tech/Tech.tsx';
import GitHubRepo from '../components/githubRepos/GitHubRepo.tsx';


const Root = () => {
  return (
    <>
      <GlobalStyle />

      <Outlet />

      <NavBar />

      <Header />

      <SectionAos id="about" title="Full Stack Web Developer" subtitle="and an eager learner 📚" backgroundColor="#E0FFF5" >
        <p className='toolSetTitle'>My Toolset</p>
        <div className='techsContainer'>
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
          <Techs imageslink="../../public/git.svg"></Techs>
          <Techs imageslink="../../public/insomnia.svg"></Techs>
        </div>
      </SectionAos>

      <SectionAos id="experience" title="Education" subtitle="subtitle" backgroundColor="#78D5A3">
        <div id="educationContainer">
          <div className="timeline">
            <div className="container left">
              <div className="content">
                <h2>2017</h2>
                <p>Lorem ipsum..</p>
              </div>
            </div>
            <div className="container right">
              <div className="content">
                <h2>2016</h2>
                <p>Lorem ipsum..</p>
              </div>
            </div>
          </div>
        </div>
      </SectionAos>

      <SectionAos id="projects" title="Project" subtitle="subtitle" backgroundColor="#DFF8E1"><GitHubRepo /><p>Texto</p></SectionAos>

      <Footer />
    </>
  );
};

export default Root;
