import FilterName from './FilterName';
import FilterPrice from './FilterPrice';
const Filters = (props) => {
  const handleSubmitForm = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <FilterName filterName={props.filterName} handleChangeName={props.handleChangeName} />
      <FilterPrice filterPrice={props.filterPrice} handleChangePrice={props.handleChangePrice} />
    </form>
  );
};
export default Filters;
