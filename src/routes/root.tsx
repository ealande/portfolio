import { Outlet } from 'react-router-dom';
import NavBar from '../components/navbar/NavBar.tsx';
import GlobalStyle from '../globalStyles.ts';
import Header from '../components/hero/Hero.tsx';
import SectionAos from '../components/section/Section.tsx';

const Root = () => {
  return (
    <>
      <GlobalStyle />
      <Outlet />
      <NavBar />
      <Header />
      <SectionAos id="about" title="About Me" backgroundColor="black" >
        <p>teste</p>
      </SectionAos>
    </>
  );
};

export default Root;
