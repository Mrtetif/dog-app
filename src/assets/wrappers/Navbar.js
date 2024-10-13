import styled from 'styled-components';

const Wrapper = styled.nav`
  background-color: var(--secondary-400);
  .nav-center {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
  }
  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    font-size: clamp(1.5rem, 3%, 3rem);
    color: var(--primary-500);
    font-weight: 700;
    letter-spacing: var(--letterSpacing);
  }
  .nav-links {
    overflow: hidden;
  }
  .nav-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-top: 1rem;
  }
  .nav-link {
    color: var(--primary-800);
    padding: 0.5rem 0.5rem 0.5rem 0;
    font-weight: 700;
    transition: var(--transition);
    letter-spacing: var(--letterSpacing);
  }
  .nav-link:hover {
    color: var(--secondary-700);
  }

  .nav-toggle {
    font-size: 1.5rem;
    color: var(--primary-500);
    background: transparent;
    border-color: transparent;
    cursor: pointer;
  }
  .nav-toggle:hover {
    font-size: 1.5rem;
    color: var(--primary-300);
  }

  /* active */
  .active {
    color: var(--secondary-700);
  }

  @media (min-width: 950px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem 2rem;
    }
    .nav-container {
      flex-direction: row;
      margin: 0 auto;
      padding-top: 0;
    }
  }

  @media (min-width: 735px) {
    .nav-links {
      height: auto !important;
    }
    .nav-container {
      flex-direction: row;
      justify-content: space-between;
      margin-top: 0.375rem;
    }
    .nav-toggle {
      display: none;
    }
  }
`;

export default Wrapper;
