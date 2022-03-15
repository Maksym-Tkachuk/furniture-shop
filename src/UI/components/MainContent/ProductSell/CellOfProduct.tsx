import { FC } from "react";
import "./ProductSell.scss";
import Button from "../../../Elements/Button/Button";
import starHalf from "../../../../img/product-For-Sell/halfStar.png";
import star from "../../../../img/product-For-Sell/star.png";

export interface CellOfProductType {
  productPicture: string;
  productName: string;
  productPrice: number;
  productInformation: string;
  productRating: number;
}

const CellOfProduct: FC<CellOfProductType> = (props) => {

  let rating: Array<number> = [];
  for (let i = 1; i < props.productRating; i++) rating[i] = i;
  
  return (
    <div className="product-sell__cell">
      <div className="product-sell__illustration">
        <img
          className="product-sell__picture"
          src={props.productPicture}
          alt="CouchCartoon"
        />
        <p className="product-sell__name">{props.productName}</p>
      </div>
      <div className="product-sell__rating">
        {rating.map(elem=><img key={elem} src={star} alt="star" />)}
        <img src={starHalf} alt="star" />
      </div>
      <div className="product-sell__price">$ {props.productPrice} </div>
      <div className="product-sell__information">
        {props.productInformation}
      </div>
      <Button text="Add to Cart" value={true} />
    </div>
  );
};

export default CellOfProduct;
