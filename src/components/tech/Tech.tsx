import AOS from 'aos';
import 'aos/dist/aos.css';
import { Stack } from './styles';



const Techs = ({ imageslink }) => {

  return (
    <>
      <Stack data={imageslink} width="80px" height="80px"></Stack>
    </>
  )
};

export default Techs;
