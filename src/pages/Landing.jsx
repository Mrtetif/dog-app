import Ayuda from '../components/Ayuda';
import Destacados from '../components/Destacados';
import Hero from '../components/Hero';
import HeroHeader from '../components/HeroHeader';

const Landing = () => {
  return (
    <>
      <HeroHeader />
      <Hero />
      <Ayuda />
      <Destacados />
    </>
  );
};
export default Landing;
