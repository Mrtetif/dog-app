import { Link, useParams } from 'react-router-dom';
// import axios from 'axios';
import { adopts } from '../data';
import Wrapper from '../assets/wrappers/SingleCard';

// const singleCardUrl = `http://localhost:5173/adopta/`;

// export const loader = async ({ params }) => {
//   const { id } = params;
//   const { data } = await axios.get(`${singleCardUrl}${id}`);
//   console.log(data);

//   return { id, data };
// };

const SingleCard = () => {
  let { id } = useParams();
  const adopt = adopts.find((item) => String(item.id) === id);
  // console.log(adopts);

  return (
    <Wrapper>
      <header>
        <h4>{adopt.name.toLowerCase()}</h4>
        <div className="single">
          <img src={adopt.img} alt={adopt.name} className="img" />
          <div className="single-info">
            <p>
              <span className="single-data">sexo: </span>
              {adopt.sexo}
            </p>
            <p>
              <span className="single-data">especie: </span>
              {adopt.type}
            </p>
            <p>
              <span className="single-data">Mi historia : </span>
              {adopt.desc}
            </p>
            <Link to={'/dog-app/adopta'} className="btn">
              VOLVER
            </Link>
            <Link to={'/dog-app/colabora'} className="btn">
              ADOPTA
            </Link>
          </div>
        </div>
      </header>
    </Wrapper>
  );
};
export default SingleCard;
