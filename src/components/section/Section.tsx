import 'aos/dist/aos.css';
import { SectionA } from './styles';
import { ReactNode } from 'react'; // Import ReactNode

interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  children?: ReactNode; // Change this line
  backgroundColor: string;
}

const SectionAos: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  backgroundColor,
}) => {
  return (
    <SectionA
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
      id={id}
      style={{ backgroundColor }}
    >
      <h2>{title}</h2>
      <h2>{subtitle}</h2>
      <p className='techs'>{children}</p>
    </SectionA>
  );
};

export default SectionAos;

