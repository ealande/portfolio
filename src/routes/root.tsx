import { Outlet } from 'react-router-dom';
import NavBar from '../components/navbar/NavBar.tsx';
import GlobalStyle from '../globalStyles.ts';
import Header from '../components/hero/Hero.tsx';

const Root = () => {
  return (
    <>
      <GlobalStyle />
      <Outlet />
      <NavBar />
      <Header />
    </>
  );
};

export default Root;
