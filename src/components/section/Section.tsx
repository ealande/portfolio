import AOS from 'aos';
import 'aos/dist/aos.css';
import { SectionA } from './styles';

const SectionAos = ({ id, title, subtitle, children, backgroundColor }) => {
  return (
    <SectionA data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" id={id} style={{ backgroundColor }}>
      <h2>{title}</h2>
      <h2>{subtitle}</h2>
      <p className='techs'>{children}</p>
    </SectionA>

  );
};

export default SectionAos


