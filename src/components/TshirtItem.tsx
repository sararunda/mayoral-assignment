const TshirtItem = (props) => {
  return (
    <div className="container-item">
      <div>
        <img className="image" src={props.item.photo} alt="foto camiseta" />
        <p className="name">{props.item.name}</p>
        <p className="price">
          {props.item.price}
          {' €'}
        </p>
        <p className="colours">Más colores</p>
        <button type="button" className="add">
          Añadir
        </button>
      </div>
    </div>
  );
};

export default TshirtItem;
