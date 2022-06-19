import FilterName from './FilterName';
import FilterPrice from './FilterPrice';
import { OrderByPriceFilterValues } from '../types/types';
interface FilterProps {
  filterName: string;
  handleChangeName(handleChangeName: void): void;
  filterPrice: OrderByPriceFilterValues;
  handleChangePrice(handleChangePrice: OrderByPriceFilterValues): void;
}
const Filters = (props: FilterProps) => {
  return (
    <form className="form">
      <FilterName handleChangeName={props.handleChangeName} />
      <FilterPrice filterPrice={props.filterPrice} handleChangePrice={props.handleChangePrice} />
    </form>
  );
};
export default Filters;
