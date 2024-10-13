import styled from 'styled-components';

const Wrapper = styled.section`
  h3,
  p {
    text-align: center;
  }
  li {
    display: inline-block;
    font-size: 1.25rem;
    text-transform: capitalize;
  }
  .members-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  .members {
    background: var(--grey-100);
    border-radius: var(--borderRadius);
    width: 100%;
    padding: 1rem;
    margin: 0.5rem;
    font-weight: 600;
  }
`;

export default Wrapper;
