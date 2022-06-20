import TshirtItem from './TshirtItem';
import { Tshirt, OrderByPriceFilterValues } from '../types/types';
interface TshirtsListProps {
  filterName: string;
  filterPrice: OrderByPriceFilterValues;
  data: Array<Tshirt>;
}

const TshirtsList = (props: TshirtsListProps) => {
  const renderList = () => {
    return props.data
      .filter((item) => item.name.toLowerCase().includes(props.filterName.toLowerCase()))
      .sort(function (a, b) {
        if (props.filterPrice === OrderByPriceFilterValues.ascending) {
          return a.price - b.price;
        } else if (props.filterPrice === OrderByPriceFilterValues.descending) {
          return b.price - a.price;
        } else {
          return 0;
        }
      })
      .map(function (item, index) {
        return (
          <li key={index}>
            <TshirtItem item={item} />
          </li>
        );
      });
  };

  return renderList().length > 0 ? (
    <ul className="TshirtList__list">{renderList()}</ul>
  ) : (
    <p>No se encuentra {props.filterName}</p>
  );
};
export default TshirtsList;
