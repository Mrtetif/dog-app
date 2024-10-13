import Wrapper from '../assets/wrappers/Destacados';
import { destacados } from '../data';

// const filter = destacados.map((el) => {
//   return el.desc;
// });

// const filterName = filter
//   .find((el) => el.includes('los perros niñera'))
//   .split(' ')
//   .slice(19, 22)
//   .join(' ');

// console.log(filterName);

const Destacados = () => {
  // const sizeStyle = {
  //   height: `${sizeContainerRef.current.getBoundingClientRect().height}px`,
  // };

  return (
    <Wrapper>
      <div className="relative"></div>
      <h4>destacados</h4>
      {destacados.map((item) => {
        const { id, img, name, title, desc } = item;
        return (
          <div key={id}>
            <article className="destacados">
              <div className="title-img">
                <img src={img} alt={name} className="img" />
                <h5>{title}</h5>
              </div>
              <div>
                <p>{desc}</p>
              </div>
            </article>
          </div>
        );
      })}
    </Wrapper>
  );
};
export default Destacados;
