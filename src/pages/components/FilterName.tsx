const FilterName = (props) => {
  const handleChangeInput = (event) => {
    const filterTshirtValue = event.target.value;
    props.handleChangeName(filterTshirtValue);
  };
  return (
    <div>
      <input onChange={handleChangeInput} placeholder="Buscar" type="text" />
    </div>
  );
};
export default FilterName;
