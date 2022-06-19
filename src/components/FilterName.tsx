interface FilterNameProps {
  handleChangeName(filterNameValue: string): void;
  // handleChangeName: (filterNameValue: string) => void;
}
const FilterName = (props: FilterNameProps) => {
  const handleChangeInput = (event) => {
    const filterTshirtValue = event.target.value as string; // casting to string
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
