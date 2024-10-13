import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 4rem;
  padding-bottom: 0.1rem;
  position: relative;
  h4 {
    padding-top: 4rem;
    text-align: center;
    text-transform: uppercase;
  }
  h5 {
    text-align: left;
    position: absolute;
    bottom: 0;
    color: var(--grey-100);
    text-transform: uppercase;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .title-img {
    position: relative;
  }
  .img {
    height: 300px;
    object-fit: cover;
    object-position: 0 25%;
    filter: brightness(0.6);
  }
  .destacados {
    margin: 0 auto;
    margin-bottom: 4rem;
    max-width: var(--fixed-width);
    text-align: justify;
    border-radius: var(--borderRadius);
    background: var(--grey-100);
    box-shadow: var(--shadow-1);
    overflow: hidden;
  }
  .destacados p {
    white-space: break-spaces;
    padding: 1rem 1rem 0rem 1rem;
    z-index: 2;
  }
  .destacados span {
    font-weight: 800;
  }
  .relative {
    margin-left: -50vw;
    background: var(--secondary-200);
    width: calc(100vw - 10px);
    position: absolute;
    top: 0;
    bottom: 0;
    right: 100%;
    left: 50%;
    z-index: -1;
  }
`;

export default Wrapper;
