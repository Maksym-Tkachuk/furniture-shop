import { FC } from "react";
import "./ProductSell.scss";
import Button from "../../../Elements/Button/Button";
import starHalf from "../../../../img/product-For-Sell/halfStar.png";
import star from "../../../../img/product-For-Sell/star.png";
import { useAppDispatch } from "../../../../hooks/redux";
import { ProductSlice } from "../../../../store/reducers/ProductSlice";
import { ProductSell } from "../../../../Modules/ProductSell";
import { message } from "antd";
import "antd/dist/antd.variable.css"


export interface CellOfProductType {
  id: number;
  productPicture: string;
  productName: string;
  productPrice: number;
  productInformation: string;
  productRating: number;
}

const CellOfProduct: FC<CellOfProductType> = (props) => {
  const dispatch = useAppDispatch();
  const { setNewProduct } = ProductSlice.actions;

  const productCat: ProductSell = {
    id: props.id,
    picture: props.productPicture,
    name: props.productName,
    price: props.productPrice,
    count: 1,
  };

  const addProduct = ({ id, picture, name, price, count }: ProductSell) => {
    dispatch(setNewProduct({ id, picture, name, price, count }));
    message.success({ content: "Товар успешно добавлен!", duration: 1 });
  };

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
        {rating.map((elem) => (
          <img key={elem} src={star} alt="star" />
        ))}
        <img src={starHalf} alt="star" />
      </div>
      <div className="product-sell__price">$ {props.productPrice} </div>
      <div className="product-sell__information">
        {props.productInformation}
      </div>
      <Button
        click={() => addProduct(productCat)}
        text="Add to Cart"
        value={true}
      />
    </div>
  );
};

export default CellOfProduct;
