import styled from 'styled-components';

const Wrapper = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  gap: 2rem; */
  text-align: center;
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  margin-top: 4rem;
  h5 {
    position: relative;
    margin-bottom: 0.5rem;
    color: rgba(175, 75, 75, 1);
  }
  .icon {
    color: rgba(175, 75, 75, 1);
    font-size: 2.75rem;
    margin-bottom: 1rem;
  }
  .info-card {
    flex: auto;
    padding: 2rem;
    border-radius: 0.75rem;
    background: var(--grey-50);
    box-shadow: var(--shadow-4);
  }
  @media (min-width: 992px) {
    flex-flow: row nowrap;
  }
  @media (min-width: 721px) {
    .info-card {
      width: 18rem;
    }
  }
`;

export default Wrapper;
