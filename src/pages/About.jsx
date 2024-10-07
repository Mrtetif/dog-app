import Wrapper from '../assets/wrappers/About';

const About = () => {
  return (
    <Wrapper>
      <h3>10 AÑOS DE SPAB</h3>
      <p>
        Gracias a todas esas personas que durante este tiempo han dedicado parte de sus vidas, de
        forma totalmente altruista a cuidar de los animales de burjassot ¡mil gracias a los
        voluntarios y voluntarias que hacéis real la prote!
      </p>
      <div className="members-container">
        <ul>
          <li className="members">raquel</li>
          <li className="members">samuel</li>
          <li className="members">deva</li>
          <li className="members">sandra</li>
          <li className="members">pilar</li>
        </ul>
        <ul>
          <li className="members">elena</li>
          <li className="members">mónica</li>
          <li className="members">cristina</li>
          <li className="members">vicky</li>
          <li className="members">maribel</li>
        </ul>
      </div>
    </Wrapper>
  );
};
export default About;
