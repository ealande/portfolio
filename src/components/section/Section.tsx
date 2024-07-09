import AOS from 'aos';
import 'aos/dist/aos.css';
import { SectionA } from './styles';

const SectionAos = ({ id, title, subtitle, children, backgroundColor }) => {
  return (
    <SectionA id={id} style={{ backgroundColor }}>
      <h2>{title}</h2>
      <h2>{subtitle}</h2>
      <p>{children}</p>
    </SectionA>

  );
};

export default SectionAos


