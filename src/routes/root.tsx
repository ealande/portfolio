import { Outlet } from 'react-router-dom';
import NavBar from '../components/navbar/NavBar.tsx';
import GlobalStyle from '../globalStyles.ts';
import Header from '../components/hero/Hero.tsx';
import SectionAos from '../components/section/Section.tsx';
import Footer from '../components/footer/Footer.tsx';

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
      <SectionAos id="experience" title="Texto titulo" subtitle="subtitle" backgroundColor="black"><p>Texto</p></SectionAos>
      <Footer />
    </>
  );
};

export default Root;
