import TshirtItem from './TshirtItem';
const TshirtsList = (props) => {
  const renderList = () => {
    return props.data
      .filter((item) => item.name.toLowerCase().includes(props.filterName.toLowerCase()))
      .sort(function (a, b) {
        if (props.filterPrice === 'up') {
          return a.price - b.price;
        } else if (props.filterPrice === 'down') {
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
    <ul className="list">{renderList()}</ul>
  ) : (
    <p>No se encuentra {props.filterName}</p>
  );
};
export default TshirtsList;
