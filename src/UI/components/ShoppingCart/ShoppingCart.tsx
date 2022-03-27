import { CloseOutlined } from "@mui/icons-material";
import { FC, useContext, useMemo } from "react";
import ModulWindow from "../../Elements/ModalWindow/ModulWindow";
import { ModalContext } from "../ContentProvider/ContentProvider";
import "./ShoppingCart.scss";
import Button from "../../Elements/Button/Button";
import { useAppSelector } from "../../../hooks/redux";
import Products from "./Products/Products";

const ShoppingCart: FC = () => {
  const modalParamets = useContext(ModalContext);
  const product = useAppSelector((state) => state.ProductReducer.product);

  let totalPrice = useMemo(() => {
    let sum: number = 0;
    product.forEach((elem) => {
      if (elem.count > 1) {
        for (let i = 1; i < elem.count; i++) sum += elem.price;
      }
      if (elem.count === 0) sum -= elem.price;
      sum += elem.price;
    });
    return sum.toFixed(2);
  }, [product]);


  return (
    <ModulWindow>
      <div className="ShoppingCart">
        <div className="ShoppingCart__hat">
          <p>Корзинa</p>
          <CloseOutlined onClick={() => modalParamets?.setModal(false)} />
        </div>
        {product.map((elem) => (
          <Products key={elem.id} {...elem} />
        ))}

        <div className="ShoppingCart__control-panel">
          <div
            className="ShoppingCart__continue"
            onClick={() => modalParamets?.setModal(false)}
          >
            ˂ Продолжить выбор товаров
          </div>
          <div className="ShoppingCart__total-price">Итого: {totalPrice}$</div>
          <Button text="Оформить заказ" value={true} />
        </div>
      </div>
    </ModulWindow>
  );
};

export default ShoppingCart;
