// import { useLoaderData } from 'react-router-dom';

import { useState } from 'react';
import { adopts } from '../data';

import AdoptaList from '../components/AdoptaList';

const allCategories = ['todos', ...new Set(adopts.map((item) => item.type))];
// console.log(allCategories);

// export const loader = async () => {
//   return 'something';
// };

const Adopta = () => {
  const [adoptItems, setAdoptItems] = useState(adopts);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'todos') {
      setAdoptItems(adopts);
      return;
    }

    const newItems = adopts.filter((item) => item.type === category);

    setAdoptItems(newItems);
  };

  // const data = useLoaderData();
  // console.log(data);

  return (
    <>
      <AdoptaList items={adoptItems} categories={categories} filterItems={filterItems} />
    </>
  );
};

export default Adopta;
