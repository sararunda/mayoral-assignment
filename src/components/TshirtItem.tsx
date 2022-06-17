const TshirtItem = (props) => {
  return (
    <div className="container-item">
      <div>
        <img className="image" src={props.item.photo} alt="foto camiseta" />
        <p>{props.item.name}</p>
        <p>{props.item.price}</p>
        <p>Más colores</p>
        <button>Añadir</button>
      </div>
    </div>
  );
};

export default TshirtItem;
