import 'aos/dist/aos.css';
import { Stack } from './styles';


interface TechsProps {
  imageslink: string;
}

const Techs: React.FC<TechsProps> = ({ imageslink }) => {
  return (
    <>
      <Stack data={imageslink} width="80px" height="80px"></Stack>
    </>
  );
};

export default Techs;
