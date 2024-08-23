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

      <SectionAos id="about" title="" subtitle="" backgroundColor="#E0FFF5" >
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

      <SectionAos id="experience" title="Education" backgroundColor="#78D5A3">

        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h4>Latest News</h4>
              <ul className="timeline">
                <li>
                  <a href="#">Specialization in Web Development with Modern Frameworks</a>
                  <a href="#" className="float-end"> Aug/2023 - Aug/2025 (expected)</a>
                  <p>Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin...</p>
                </li>
                <li>
                  <a target="_blank" href="">Bachelor's Degree in Computer Engineering</a>
                  <a href="#" className="float-end"> Jan/2023 - Dec/2026 (expected)</a>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
                </li>
                <li>
                  <a href="#">Full Stack Java Developer</a>
                  <a href="#" className="float-end"> Oct/2022 - Apr/2024</a>
                  <p>Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit. Sed nec tempor nibh...</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </SectionAos>

      <SectionAos id="projects" title="Project" subtitle="subtitle" backgroundColor="#DFF8E1"><GitHubRepo /></SectionAos>

      <Footer />
    </>
  );
};

export default Root;
