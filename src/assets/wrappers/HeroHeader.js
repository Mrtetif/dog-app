import styled from 'styled-components';

const Wrapper = styled.div`
  .img {
    height: 50%;
  }
  h4 {
    font-size: 1.475rem;
    text-align: center;
    font-family: 'Playwrite CU';
    font-weight: 400;
    line-height: 1.8;
  }

  @media (min-width: 992px) {
    .img {
      height: 40vh;
    }
    h4 {
      font-size: 1.975rem;
      line-height: 1.7;
    }
  }
`;

export default Wrapper;
