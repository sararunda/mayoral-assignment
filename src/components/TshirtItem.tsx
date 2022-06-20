import { Tshirt } from '../types/types';
interface TshirtItemProps {
  item: Tshirt;
}
const TshirtItem = (props: TshirtItemProps) => {
  return (
    <div className="TshirtItem__container-item">
      <div>
        <img
          className="TshirtItem__container-item__image"
          src={props.item.photo}
          alt="foto camiseta"
        />
        <p className="TshirtItem__container-item__name">{props.item.name}</p>
        <p className="TshirtItem__container-item__price">
          {props.item.price}
          {' €'}
        </p>
        <p className="TshirtItem__container-item__colours">Más colores</p>
        <button type="button" className="TshirtItem__container-item__add">
          Añadir
        </button>
      </div>
    </div>
  );
};

export default TshirtItem;
