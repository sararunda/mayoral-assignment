const TshirtsList = (props) => {
  return (
    <div>
      {props.data
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
              <img src={item.photo} alt="foto camiseta" />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>Más colores</p>
              <button>Añadir</button>
            </li>
          );
        })}
    </div>
  );
};
export default TshirtsList;
