const FilterPrice = (props) => {
  const handleChangeSelect = (event) => {
    const filterPriceValue = event.currentTarget.value;
    props.handleChangePrice(filterPriceValue);
  };
  return (
    <div>
      <label htmlFor="">Precio</label>
      <select
        className="filter-price"
        value={props.filterPrice}
        onChange={handleChangeSelect}
        name=""
        id=""
      >
        <option value="">Seleccione una opción</option>
        <option value="up">Ascendente</option>
        <option value="down">Descendente</option>
      </select>
    </div>
  );
};
export default FilterPrice;
