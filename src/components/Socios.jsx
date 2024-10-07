import Wrapper from '../assets/wrappers/Socios';
import {
  socios,
  padrinos,
  acogidas,
  voluntariado,
  donacionesEco,
  donacionesFisicas,
} from '../images/images';

import SOCIO from '../assets/SOCIO.pdf';
import PADRINO from '../assets/PADRINO.pdf';

const Socios = () => {
  return (
    <Wrapper>
      <article className="socios-card">
        <div className="container-img">
          <img className="img" src={socios} alt={socios} />
        </div>
        <div className="socios-info">
          <h5>SOCIOS</h5>
          <p>
            De este modo, nos ayuda rás a pagar todos los gastos de nuestros animalitos. Ser socio
            tiene una cuota mínima de 36€ al año (3€ al mes), cantidad destinada íntegramente para
            su mantenimiento hasta su adopción. <br />
            <br />
            <span>Descarga y completa el formulario adjunto y reenvíanoslo.</span>
          </p>
          <a href={SOCIO} download="socio" target="_blank">
            <button className="btn">descarga</button>
          </a>
        </div>
      </article>
      <article className="socios-card">
        <div className="container-img">
          <img className="img" src={padrinos} alt={padrinos} />
        </div>
        <div className="socios-info">
          <h5>PADRINOS</h5>
          <p>
            ¿Te gustaría tener más animales, pero has llegado al límite?, ¿no puedes permitirte
            tenerlos por cualquier circunstancia? <br />
            <br /> Anímate y apadrina a alguno de nuestros animales. Ser padrino/madrina tan solo
            supone un coste de 10€ mensuales, los cuales se destinarán a pagar todos sus gastos.
            Siendo su padrino/madrina, podrás pasearlo, llevarlo contigo unos días y, disfrutar de
            su compañía hasta que encuentre un hogar. <br />
            <br />
            <span>Rellena nuestro formulario y reenvíanoslo por email.</span>
          </p>
          <a href={PADRINO} download="padrino" target="_blank">
            <button className="btn">descarga</button>
          </a>
        </div>
      </article>
      <article className="socios-card">
        <div className="container-img">
          <img className="img" src={acogidas} alt={acogidas} />
        </div>
        <div className="socios-info">
          <h5>ACOGIDAS</h5>
          <p>
            ¿Tienes espacio en tu hogar y tiempo para cuidar de algún peludete, pero no puedes
            permitirte su adopción? <br />
            <br /> <span>HAZTE CASA DE ACOGIDA.</span> <br /> <br /> Ofrecer un hogar temporal
            supone cuidar y querer al animal como si fuera tuyo (el tiempo que puedas o hasta su
            adopción), mientras tanto SPAB asume sus costes. Anímate y ayúdales. <br />
            <br />
            <span>Llámanos a los teléfonos:</span>
            <br />
            655685859 o 675740732 <br />
            <br />
            <span>Escríbenos:</span>
            <br />
            protectoraburjassot@gmail.com
          </p>
        </div>
      </article>
      <article className="socios-card">
        <div className="container-img">
          <img className="img" src={voluntariado} alt={voluntariado} />
        </div>
        <div className="socios-info">
          <h5>VOLUNTARIADO</h5>
          <p>
            Cualquier ayuda es buena, ya sea desde pasear perros, medicar animales enfermos, limpiar
            y pasar tiempo con los gatos o colaborar con las colonias felinas. <br />
            <br /> Estas últimas se encargan de los gatos que viven en la calle y a través del
            método CES (Captura Esterilización y Suelta) se controla la superproblación y las
            enfermedades de estos animales. <br />
            <br />
            <span>Llámanos a los teléfonos:</span>
            <br />
            655685859 o 675740732 <br />
            <br />
            <span>Escríbenos:</span>
            <br />
            protectoraburjassot@gmail.com
          </p>
        </div>
      </article>
      <article className="socios-card">
        <div className="container-img">
          <img className="img" src={donacionesEco} alt={donacionesEco} />
        </div>
        <div className="socios-info">
          <h5>DONACIONES ECONÓMICAS</h5>
          <p>
            Si quieres ayudarnos puedes realizar tu aportación por: <br />
            <br />
            Transferencia bancaria: <br /> CAIXA POPULAR -CAIXA RURAL <br />
            <br /> Bizum: <br /> Código identificador 06256 <br />
            <br />
            Nombre: SOC PROTECTORA ANIMALES <br /> DE BURJASSOT
          </p>
        </div>
      </article>
      <article className="socios-card">
        <div className="container-img">
          <img className="img" src={donacionesFisicas} alt={donacionesFisicas} />
        </div>
        <div className="socios-info">
          <h5>DONACIONES FÍSICAS</h5>
          <p>Necesitamos:</p>
          <ul>
            <li>Comida húmeda de gatos;</li>
            <li>Pienso de gatos y perros;</li>
          </ul>
          <p>
            Podéis hacer donaciones en los siguientes puntos: <br />
            <br /> Av Mártires de la Libertad, 5, 46100 Burjassot, Valencia
          </p>
        </div>
      </article>
    </Wrapper>
  );
};
export default Socios;
