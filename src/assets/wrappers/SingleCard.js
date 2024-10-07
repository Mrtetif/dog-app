import styled from 'styled-components';

const Wrapper = styled.div`
  header {
    background: var(--white);
    box-shadow: var(--shadow-2);
    border-radius: var(--borderRadius);
    text-align: justify;
    margin-bottom: 3rem;
    padding: 0.75rem 1.25rem;
    h4 {
      color: var(--grey-900);
    }
    .btn {
      margin-bottom: 1rem;
      margin-right: 1rem;
    }
    .img {
      border-radius: var(--borderRadius);
      box-shadow: var(--shadow-4);
    }
    .single-info {
      padding-top: 1.75rem;
    }
    .single p {
      color: var(--grey-900);
      margin-bottom: 1rem;
      text-transform: capitalize;
      max-width: max-content;
    }
    .single p:nth-child(3) {
      text-transform: none;
      white-space: break-spaces;
    }
    .single-data {
      font-weight: 800;
      color: var(--grey-900);
    }
    @media (min-width: 992px) {
      .single {
        display: grid;
        grid-template-columns: 2fr 3fr;
        gap: 1.25rem;
        align-items: start;
      }
      .single-info {
        padding-top: 0;
      }
    }
  }
`;

export default Wrapper;
