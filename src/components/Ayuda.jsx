import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Ayuda';
import { FiUsers } from 'react-icons/fi';
import { MdCampaign } from 'react-icons/md';
import { BsNewspaper } from 'react-icons/bs';

const Ayuda = () => {
  return (
    <Wrapper>
      <article className="info-card">
        <FiUsers className="icon" />
        <h5>COLABORA</h5>
        <p>Descubre como puedes ayudarnos de diferentes formas</p>
      </article>
      <article className="info-card">
        <MdCampaign className="icon" />
        <h5>CAMPAÑAS</h5>
        <p>Conoce las campañas de concienciación que tenemos activas</p>
      </article>
      <article className="info-card">
        <BsNewspaper className="icon" />
        <h5>EVENTOS</h5>
        <p>
          Ferias, rastrillos, recogidas solidarias y todo lo relacionado con los eventos de la SPAB
        </p>
      </article>
    </Wrapper>
  );
};
export default Ayuda;
