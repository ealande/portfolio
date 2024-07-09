import AOS from 'aos';
import 'aos/dist/aos.css';

const SectionAos = ({ id, title, children, backgroundColor }) => {
  return (
    <section id={id} style={{ backgroundColor, padding: '15rem 3rem 6rem' }}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default SectionAos


