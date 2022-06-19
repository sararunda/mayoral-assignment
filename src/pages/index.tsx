import { NextPage } from 'next';
import React, { useState } from 'react';
import Data from 'service/data.json' assert { type: 'json' };
import TshirtsList from '../components/TshirtsList';
import Filters from '../components/Filters';
import { OrderByPriceFilterValues } from '../types/types';

const HomePage: NextPage = () => {
  const [filterName, setFilterName] = useState('');
  const [filterPrice, setFilterPrice] = useState(OrderByPriceFilterValues.none);

  //handling functions
  const handleChangeName = (filterNameValue) => {
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
        <TshirtsList filterPrice={filterPrice} filterName={filterName} data={Data} />
      </div>
    </div>
  );
};

export default HomePage;
