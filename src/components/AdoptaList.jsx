import AdoptaCard from './AdoptaCard';
import Wrapper from '../assets/wrappers/AdoptaList';

const AdoptaList = ({ items, categories, filterItems }) => {
  return (
    <>
      <div className="btn-container">
        {categories.map((category) => {
          return (
            <button
              key={category}
              className="btn btn-hipster"
              onClick={() => {
                filterItems(category);
              }}
            >
              {category}
            </button>
          );
        })}
      </div>
      <Wrapper>
        {items.map((item, index) => {
          return <AdoptaCard key={index} {...item} />;
        })}
      </Wrapper>
    </>
  );
};
export default AdoptaList;
