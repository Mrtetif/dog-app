import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Hero';

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const Hero = () => {
  return (
    <>
      <Wrapper>
        <header>
          <h4>10 AÑOS DE SPAB</h4>
          <p>
            Gracias a todas esas personas que durante este tiempo han dedicado parte se sus vidas,
            de forma totalmente altruista a cuidar de los animales de Burjassot ¡Mil gracias a los
            voluntarios y voluntarias que hacéis real... La PROTE!
          </p>
          <h5>S.P.A.B</h5>
          <p>
            Somos la Sociedad Protectora de Animales de Burjassot y muchos animales te necesitan.{' '}
            <span>¿Quieres ayudarnos?</span>
          </p>
          <div className="btn-container">
            <Link onClick={scrollToTop} to={'about'} className="btn">
              ¿quienes somos?
            </Link>
            <Link onClick={scrollToTop} to={'adopta'} className="btn">
              adopta
            </Link>
            <Link onClick={scrollToTop} to={'colabora'} className="btn">
              ¿como puedes ayudarnos?
            </Link>
          </div>
        </header>
      </Wrapper>
    </>
  );
};
export default Hero;
