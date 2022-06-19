interface FilterNameProps {
  handleChangeName(handleChangeName: void): void;
}
const FilterName = (props: FilterNameProps) => {
  const handleChangeInput = (event) => {
    const filterTshirtValue = event.target.value;
    props.handleChangeName(filterTshirtValue);
  };
  return (
    <div>
      <input
        className="filter-name"
        onChange={handleChangeInput}
        placeholder="🔍Buscar"
        type="text"
      />
    </div>
  );
};
export default FilterName;
