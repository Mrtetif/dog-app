import { NavLink } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Navbar';
import { useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height: showLinks ? `${linksRef.current.getBoundingClientRect().height}px` : '0px',
  };

  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">
          Juntos es Mejor{' '}
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </span>

        <div className="nav-links" ref={linksContainerRef} style={linkStyles}>
          <div className="nav-container" ref={linksRef}>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/adopta" className="nav-link">
              Adopta
            </NavLink>
            <NavLink to="/animalesAdoptados" className="nav-link">
              Animales Adoptados
            </NavLink>
            <NavLink to="/colabora" className="nav-link">
              Colabora
            </NavLink>
            {/* <NavLink to="/campanas" className="nav-link">
              Campañas
            </NavLink>
            <NavLink to="/eventos" className="nav-link">
              Eventos
            </NavLink> */}
            <NavLink to="/contacto" className="nav-link">
              Contacto
            </NavLink>
            <NavLink to="/about" className="nav-link">
              SPAB
            </NavLink>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
