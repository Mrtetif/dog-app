import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/AdoptaCard';
import styled from 'styled-components';

const LinkStyle = styled(Link)`
  cursor: pointer;
  font-size: 0.8rem;
  background: var(--btn-primary);
  color: var(--white);
  text-transform: uppercase;
  font-weight: 700;
  border: transparent;
  border-radius: var(--borderRadius);
  letter-spacing: var(--letterSpacing);
  transition: var(--transition);
  padding: 0.5rem 1.25rem;
  display: inline-block;
  &:hover {
    background-color: var(--secondary-500);
    color: var(--grey-900);
  }
`;

const AdoptaCard = ({ id, img, name, sexo, type, desc }) => {
  return (
    <Wrapper>
      <div className="container-img">
        <img src={img} alt={name} className="img" />
      </div>
      <div className="footer">
        <h5>{name.toLowerCase()}</h5>
        {/* <h6>{type}</h6> */}
        {/* <p>{desc}</p> */}
        <LinkStyle to={`/dog-app/adopta/${id}`}>más info</LinkStyle>
      </div>
    </Wrapper>
  );
};
export default AdoptaCard;
