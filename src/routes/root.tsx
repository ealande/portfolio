import { Outlet } from 'react-router-dom';
import NavBar from '../components/navbar/NavBar.tsx';
import GlobalStyle from '../globalStyles.ts';
import Header from '../components/hero/Hero.tsx';
import SectionAos from '../components/section/Section.tsx';
import Footer from '../components/footer/Footer.tsx';
import 'aos/dist/aos.css';
import Techs from '../components/tech/Tech.tsx';
import GitHubRepo from '../components/githubRepos/GitHubRepo.tsx';
import FrontProjects from '../components/frontProjects/FrontProjects.tsx';


const Root = () => {
  return (
    <>
      <GlobalStyle />

      <Outlet />

      <NavBar />

      <Header />

      <SectionAos id="about" title="About Me" backgroundColor="#E0FFF5" >
        <div className='aboutMeContainer' data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1800">
          <p>
            I’m a dedicated full stack developer passionate about crafting impactful, user-centric web solutions.
          </p>
          <p>
            With expertise in modern technologies like React, Angular, TypeScript, and Java, I focus on building dynamic, responsive, and scalable applications.
          </p>
          <p>
            I thrive in staying ahead of the curve, continuously expanding my skill set to meet the demands of the ever-evolving tech landscape.
          </p>
          <p>
            Let's build something amazing together!
          </p>
        </div>
        <div data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1800">

          <h2>My Toolset</h2>
        </div>

        <div className='techsContainer' data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="2000">
          <Techs alt="C language" imageslink="/c.svg"></Techs>
          <Techs alt="Angular" imageslink="/angular.svg"></Techs>
          <Techs alt="React" imageslink="/react.svg"></Techs>
          <Techs alt="Redux" imageslink="/redux.svg"></Techs>
          <Techs alt="Typescript" imageslink="/typescript.svg"></Techs>
          <Techs alt="Javascript" imageslink="/jsLogo.svg"></Techs>
          <Techs alt="Linux" imageslink="/linux.svg"></Techs>
          <Techs alt="Docker" imageslink="/docker.svg"></Techs>
          <Techs alt="Java" imageslink="/java.svg"></Techs>
          <Techs alt="Postgresql" imageslink="/postgresql.svg"></Techs>
          <Techs alt="HTML" imageslink="/html.svg"></Techs>
          <Techs alt="CSS" imageslink="/css.svg"></Techs>
          <Techs alt="Bootstrap" imageslink="/bootstrap.svg"></Techs>
          <Techs alt="GIT" imageslink="/git.svg"></Techs>
          <Techs alt="Insomnia" imageslink="/insomnia.svg"></Techs>
        </div>
      </SectionAos >

      <SectionAos id="education" title="Education" backgroundColor="#78D5A3">

        <div className="container mt-5 mb-5" data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1800">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <ul className="timeline">
                <li>
                  <a href="#">Specialization in Web Development with Modern Frameworks</a>
                  <a href="#" className="float-end"> Aug/2023 - Aug/2025 (expected)</a>
                  <p>This specialization, offered by the Federal University of Technology - Paraná (UTFPR), consists of 360 hours dedicated to exploring frameworks such as Spring, Angular, React, Vue, and Ember. The course also covers Agile methodologies, security, database design, architecture, and deployment, providing comprehensive knowledge of the essential tools needed to become a proficient web developer.</p>
                </li>
                <li>
                  <a target="_blank" href="">Bachelor's Degree in Computer Engineering</a>
                  <a href="#" className="float-end"> Jan/2023 - Dec/2026 (expected)</a>
                  <p>As I reach the halfway point of my Computer Engineering course, I’ve had the opportunity to work with both hardware and software, gaining hands-on experience. I’m thoroughly enjoying learning the fundamental principles behind the technologies I work with, which continue to deepen my understanding and problem-solving abilities.</p>
                </li>
                <li>
                  <a href="#">Full Stack Java Developer</a>
                  <a href="#" className="float-end"> Oct/2022 - Apr/2024</a>
                  <p>This course equipped me with the skills to work as a full-stack developer by covering everything from the basics to advanced levels of software development. I gained proficiency in HTML, CSS, and vanilla JavaScript, as well as in frameworks like Angular, Vue, and React. Additionally, I learned to use CSS preprocessors such as Less and Sass, and studied design patterns in Java for back-end development.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </SectionAos>

      <SectionAos id="projects" title="Projects" subtitle="" backgroundColor="#DFF8E1">
        <FrontProjects />
        <GitHubRepo />
      </SectionAos>


      <Footer />
    </>
  );
};

export default Root;
