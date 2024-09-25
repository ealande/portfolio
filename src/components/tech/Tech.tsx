import 'aos/dist/aos.css';
import { Stack } from './styles';


interface TechsProps {
  imageslink: string;
  alt: string;
}

const Techs: React.FC<TechsProps> = ({ imageslink, alt }) => {
  return (
    <>
      <Stack alt={alt} src={imageslink} width="80px" height="80px"></Stack>
    </>
  );
};

export default Techs;
