import Wrapper from '../assets/wrappers/Footer';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { comunidad } from '../images/images';

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const Footer = () => {
  return (
    <Wrapper className="page-footer">
      <div className="call-to-action">
        <h4>Ayúdanos a seguir ayudando</h4>
        <Link onClick={scrollToTop} to={'colabora'} className="btn">
          quiero ayudar
        </Link>
        <img className="img" src={comunidad} alt={comunidad} />
      </div>
      <div className="links-container">
        <p className="left">
          <span>spab,</span> plataforma de adopción
        </p>
        <div className="social">
          {/* <span>siguenos:</span> */}
          <ul className="links">
            <li>
              <a className="icon" href="https://www.facebook.com/spaburjassot/">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a className="icon" href="https://www.instagram.com/spab_burjassot/">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a className="icon" href="https://x.com/SPAB_Burjassot?s=20&t=lpM1A5hlm-xJTQdGtnfiSQ">
                <FaSquareXTwitter />
              </a>
            </li>
          </ul>
        </div>
        <p className="right">
          {/* <span>contacto:</span>  */}
          protectoraburjassot@gmail.com
        </p>
      </div>
      <p className="copyright">
        &copy; <span id="date"></span>
        <span className="footer-logo">juntos es mejor</span> Built by Roberto Merani
      </p>
    </Wrapper>
  );
};
export default Footer;
