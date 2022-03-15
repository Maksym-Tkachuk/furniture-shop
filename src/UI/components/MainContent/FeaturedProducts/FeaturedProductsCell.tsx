import { FC } from "react";
import "./FeaturedProducts.scss";
import "../MainContent.scss";

import star from "../../../../img/featured-products/star.svg";
import Button from "../../../Elements/Button/Button";
import { productsType } from "./FeaturedProducts";

const FeaturedProductsCell: FC<productsType> = (props) => {
  let rating: Array<number> = [];

  for (let i = 0; i < props.rating; i++) {
    rating[i] = i;
  }

  return (
    <div className="featured-products__cell">
      <div className="featured-products__picture">
        <img src={props.img} alt={props.name} />
      </div>
      <div className="featured-products__name">{props.name}</div>
      <div className="featured-products__text">{props.text}</div>
      <div className="featured-products__information">
        <div className="featured-products__block">
          <div className="featured-products__price">
            <span>${props.price}</span>
            <span>${props.discaunt}</span>
          </div>
          <div className="featured-products__rating">
            {rating.map((elem, index) => (
              <img src={star} alt="star" key={index} />
            ))}
          </div>
        </div>
        <Button text="Shop Now" value={true} />
      </div>
    </div>
  );
};

export default FeaturedProductsCell;
