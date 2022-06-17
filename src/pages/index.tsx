import { NextPage } from 'next';

import React, { useState } from 'react';

import Data from 'service/data.json' assert { type: 'json' };
import TshirtsList from '../pages/components/TshirtsList';
import Filters from './components/Filters';

const HomePage: NextPage = () => {
  const [filterName, setFilterName] = React.useState('');
  const [filterPrice, setFilterPrice] = React.useState('');

  //handling functions
  const handleChangeName = (filterNameValue) => {
    setFilterName(filterNameValue);
  };
  const handleChangePrice = (filterPriceValue) => {
    setFilterPrice(filterPriceValue);
  };

  return (
    <div>
      <Filters
        filterName={filterName}
        filterPrice={filterPrice}
        handleChangeName={handleChangeName}
        handleChangePrice={handleChangePrice}
      />
      <TshirtsList filterPrice={filterPrice} filterName={filterName} data={Data} />
    </div>
  );
};

export default HomePage;
