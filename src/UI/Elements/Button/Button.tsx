import { FC } from "react";
import "./Button.scss"


interface ButtonType {
    text:string,
    click?:()=>void,
    value?:boolean
}


const Button: FC<ButtonType> = (props) => {
  return (
    <div className={`${props.value && "other" } button`} onClick={props.click}>
      <p className="button__text">{props.text}</p>
    </div>
  );
};

export default Button;
