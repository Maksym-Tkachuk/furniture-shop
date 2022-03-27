import { message } from "antd";
import { FC } from "react";
import { useAppDispatch } from "../../../../hooks/redux";
import bascet from "../../../../img/star-products/cart.svg";
import { ProductSell } from "../../../../Modules/ProductSell";
import {ProductSlice} from "../../../../store/reducers/ProductSlice";

export type StarProductCellType = {
  id:number
  name: string;
  img: string;
  price: number;
  rating:number
};



const StarProductCell:FC<StarProductCellType> = (props) => {
  const dispatch = useAppDispatch();
  const { setNewProduct } = ProductSlice.actions;

  const productCat: ProductSell = {
    id: props.id,
    picture: props.img,
    name: props.name,
    price: props.price,
    count: 1,
  };

  const addProduct = ({ id, picture, name, price, count }: ProductSell) => {
    dispatch(setNewProduct({ id, picture, name, price, count }));
    message.success({content:"Товар додан в корзину!",duration:2} );
  };

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
        <div onClick={()=>addProduct(productCat)} className="star-products__backet">
          <img src={bascet} alt="bascet" />
        </div>
      </div>
      <div className="star-products__price">${props.price}</div>
    </div>
  );
};

export default StarProductCell
