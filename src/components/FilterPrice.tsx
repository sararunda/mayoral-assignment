import { OrderByPriceFilterValues } from '../types/types';
interface FilterPriceProps {
  handleChangePrice(filterPriceValue: OrderByPriceFilterValues): void;
  filterPrice: OrderByPriceFilterValues;
}
const FilterPrice = (props: FilterPriceProps) => {
  const handleChangeSelect = (event) => {
    const filterPriceValue = +event.currentTarget.value;
    props.handleChangePrice(filterPriceValue);
  };
  return (
    <div>
      <label className="FilterPrice__label-price" htmlFor="">
        Ordenar por:
      </label>
      <select
        className="FilterPrice__filter-price"
        value={props.filterPrice}
        onChange={handleChangeSelect}
        name=""
        id=""
      >
        <option value={OrderByPriceFilterValues.none}>Seleccione una opción</option>
        <option value={OrderByPriceFilterValues.ascending}>Precio ascendente</option>
        <option value={OrderByPriceFilterValues.descending}>Precio descendente</option>
      </select>
    </div>
  );
};
export default FilterPrice;
