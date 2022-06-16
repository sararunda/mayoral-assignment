import { NextPage } from "next";

import React, { useState } from 'react';

import Data from 'service/data.json' assert { type: 'json' };
import TshirtsList from "../pages/components/TshirtsList"; 
import Filter from "../pages/components/Filter";




const HomePage: NextPage = () => {
  const [filter, setFilter] = React.useState(''); 


  //handling functions
const handleChangeFilter = (filterTshirtValue)=>{
  setFilter(filterTshirtValue)
  }
  
  return <div>
    <Filter filter={filter} handleChangeFilter={handleChangeFilter}/>
   <TshirtsList data = {Data}/>
  </div>;
};

export default HomePage;
