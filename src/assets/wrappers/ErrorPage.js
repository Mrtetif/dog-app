import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-top: -3rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-top: 0.5rem;
    margin-bottom: 1%.5;
    color: var(--white);
  }
  a {
    color: var(--secondary-200);
    background: var(--secondary-800);
    padding: 0.75rem 0.75rem;
    border-radius: var(--borderRadius);
    text-transform: capitalize;
    transition: var(--transition);
  }
  a:hover {
    color: var(--primary-900);
    background: var(--primary-100);
  }
`;

export default Wrapper;
