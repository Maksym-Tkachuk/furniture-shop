import { FC } from "react";
import { CloseOutlined } from "@mui/icons-material";
import "../ShoppingCart.scss";
import { ProductSlice } from "../../../../store/reducers/ProductSlice";
import { useAppDispatch } from "../../../../hooks/redux";

type ProductsType = {
  id: number;
  picture: string;
  name: string;
  count: number;
  price: number;
};

const Products: FC<ProductsType> = (props) => {

  const dispatch = useAppDispatch();
  const { plusProduct,minusProduct,deleteProduct } = ProductSlice.actions;

  return (
    <div className="ShoppingCart__products">
      <div className="ShoppingCart__picture">
        <div>
          <img src={props.picture} alt={props.name} />
        </div>
        <CloseOutlined onClick={()=>dispatch(deleteProduct(props.id))} />
      </div>
      <div className="ShoppingCart__name">{props.name}</div>
      <div className="ShoppingCart__count">
        <div className="count">
          <span className="count__minus" onClick={()=>dispatch(minusProduct(props.id))} >—</span>
          <input onChange={(e)=>{}} type="number" value={props.count} />
          <span className="count__plus" onClick={()=>dispatch(plusProduct(props.id))}>+</span>
        </div>
      </div>
      <div className="ShoppingCart__price">
        <p>{props.price}$</p>
      </div>
    </div>
  );
};

export default Products;
