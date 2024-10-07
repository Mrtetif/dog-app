import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/AdoptaCard';

const AdoptaCard = ({ id, img, name, sexo, type, desc }) => {
  return (
    <Wrapper>
      <div className="container-img">
        <img src={img} alt={name} className="img" />
      </div>
      <div className="footer">
        <h5>{name}</h5>
        {/* <h6>{type}</h6> */}
        {/* <p>{desc}</p> */}
        <Link to={`/adopta/${name}`} className="btn">
          más info
        </Link>
      </div>
    </Wrapper>
  );
};
export default AdoptaCard;
