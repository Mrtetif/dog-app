import styled from 'styled-components';

const Wrapper = styled.section`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  gap: 2rem;
  h5 {
    margin: 0;
    padding: 2rem 1rem 0rem 2rem;
  }
  img {
    height: 20rem;
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
  }
  ul {
    list-style-type: circle;
    padding: 0 3rem;
    font-size: 0.85rem;
  }
  a {
    width: max-content;
  }
  .socios-card {
    background: beige;
    display: flex;
    flex-direction: column;
    border-radius: var(--borderRadius);
    background: var(--grey-100);
    box-shadow: var(--shadow-1);
    overflow: hidden;
  }
  .socios-info p {
    font-size: 0.85rem;
  }
  .socios-card p {
    text-align: justify;
    padding: 1rem 2.5rem 0rem 2rem;
  }
  .container-img {
    flex-shrink: 0;
  }
  .btn {
    text-transform: capitalize;
    margin: 0 2rem;
    margin-bottom: 1rem;
    padding: 0.75rem;
  }

  @media (min-width: 688px) {
    grid-template-columns: repeat(auto-fill, minmax(23rem, 1fr));
    img {
      width: 8rem;
      height: 100%;
      border-top-left-radius: var(--borderRadius);
      border-top-right-radius: var(--borderRadius);
    }
    .socios-card {
      flex-direction: row;
    }
    .socios-info {
      display: flex;
      flex-direction: column;
    }
  }
  @media (min-width: 816px) {
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));

    .socios-info p {
      width: var(--maxCharWidth);
    }
  }
  @media (min-width: 1044px) {
    grid-template-columns: repeat(auto-fill, minmax(23rem, 1fr));
    img {
      width: 9rem;
      height: 100%;
      border-top-left-radius: var(--borderRadius);
      border-top-right-radius: var(--borderRadius);
    }
    .socios-info p {
      width: 100%;
    }
    .socios-info a {
      display: flex;
      align-items: flex-end;
      height: 100%;
    }
  }
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(23rem, 1fr));
  gap: 2rem;
  .socios-card {
    background: beige;
    display: flex;
    }
    .container-img {
      flex: 1 0 auto;
  }
  img {
    width: 8rem;
    height: 20rem;
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
  } */
`;

export default Wrapper;
