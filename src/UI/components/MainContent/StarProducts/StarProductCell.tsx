import { FC } from "react";
import bascet from "../../../../img/star-products/cart.svg";

export type StarProductCellType = {
  name: string;
  img: string;
  price: number;
  rating:number
};

const StarProductCell:FC<StarProductCellType> = (props) => {
  return (
    <div className="star-products__cell">
      <div className="star-products__picture">
        <img src={props.img} alt={props.name} />
      </div>
      <div className="star-products__information">
        <div className="star-products__name-rating">
          <p className="star-products__name">Modern Chair</p>
          <span>{props.rating}</span>
        </div>
        <div className="star-products__backet">
          <img src={bascet} alt="bascet" />
        </div>
      </div>
      <div className="star-products__price">${props.price}</div>
    </div>
  );
};

export default StarProductCell
