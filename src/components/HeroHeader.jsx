import Wrapper from '../assets/wrappers/HeroHeader';
import { heroImage } from '../images/images';

const HeroHeader = () => {
  return (
    <Wrapper>
      <h4>" Un país se puede juzgar por la forma en que trata a sus animales."</h4>
      <img
        style={{ marginBottom: '4rem', marginTop: '2rem' }}
        className="img"
        src={heroImage}
        alt="perro"
      />
    </Wrapper>
  );
};
export default HeroHeader;
