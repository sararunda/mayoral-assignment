import { NextPage } from 'next';
import React, { useState } from 'react';
import TshirtsList from '../components/TshirtsList';
import Filters from '../components/Filters';
import { OrderByPriceFilterValues, Tshirt } from '../types/types';
interface HomePageProps {
  data: Array<Tshirt>;
}

const HomePage: NextPage = (props: HomePageProps) => {
  const [filterName, setFilterName] = useState('');
  const [filterPrice, setFilterPrice] = useState(OrderByPriceFilterValues.none);

  //handling functions
  const handleChangeName = (filterNameValue: string) => {
    setFilterName(filterNameValue);
  };
  const handleChangePrice = (filterPriceValue: OrderByPriceFilterValues) => {
    setFilterPrice(filterPriceValue);
  };

  return (
    <div className="flex-container">
      <div className="main-container">
        <Filters
          filterName={filterName}
          filterPrice={filterPrice}
          handleChangeName={handleChangeName}
          handleChangePrice={handleChangePrice}
        />
        <TshirtsList filterPrice={filterPrice} filterName={filterName} data={props.data} />
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/data.json`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}

export default HomePage;
