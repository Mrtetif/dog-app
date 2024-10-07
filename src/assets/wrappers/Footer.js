import styled from 'styled-components';

const Wrapper = styled.footer`
  background: var(--white);
  text-align: center;
  h4 {
    padding: 0 1rem;
    font-size: 1.475rem;
    text-align: center;
    font-family: 'Playwrite CU';
    font-weight: 400;
    line-height: 1.8;
  }
  .img {
    width: 20rem;
    margin: 0 auto;
    margin-top: 1rem;
  }
  .copyright {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    width: 100%;
    height: 100%;
    background: var(--primary-500);
  }
  .btn {
    text-transform: capitalize;
    margin: 0;
  }
  .call-to-action {
    margin-bottom: 2rem;
  }
  .links-container {
    /* max-width: var(--max-width);
    margin: 0 auto;
    padding: 1rem 2rem; */
    padding: 1rem;
    display: flex;
    flex-flow: column;
    background: var(--secondary-100);
  }
  .links-container span {
    color: var(--primary-800);
    font-weight: 700;
    text-transform: capitalize;
  }
  .links-container p {
    color: var(--secondary-700);
  }
  .links a {
    display: block;
  }
  .links {
    display: flex;
  }
  .icon {
    font-size: 1.75rem;
    color: rgba(175, 75, 75, 1);
  }
  .icon {
    padding: 0.25rem;
  }
  .social {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.25rem 0;
  }
  @media (min-width: 768px) {
    .links-container {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
    }
    .left,
    .right {
      flex-grow: 1;
      flex-basis: 0;
    }
  }
`;

export default Wrapper;
