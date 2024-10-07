import styled from 'styled-components';

const Wrapper = styled.article`
  background: var(--white);
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: var(--borderRadius);
  img {
    height: 18rem;
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
  }
  .footer {
    /* background: var(--secondary-100); */
    padding: 1.5rem;
    h5,
    h6 {
      margin-bottom: 1rem;
      color: var(--grey-900);
      text-transform: capitalize;
    }
    h5 {
      font-weight: 700;
    }
    p {
      color: var(--grey-900);
      margin-bottom: 1rem;
    }
  }
`;

export default Wrapper;
