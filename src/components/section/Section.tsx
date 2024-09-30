import 'aos/dist/aos.css';
import { SectionA } from './styles';
import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children?: ReactNode;
  backgroundColor: string;

}

const SectionAos: React.FC<SectionProps> = ({
  id,
  title,
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
      <p className='techs'>{children}</p>
    </SectionA>
  );
};

export default SectionAos;

