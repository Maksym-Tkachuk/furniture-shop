import { FC } from "react";
import "./Container.scss"


const Container: FC<{ width?: Number }> = (props) => {
  return (
    <div className="container"
      style={{
        maxWidth: `${props.width ? props.width : 1680}px`,
        margin: "0 auto",
      }}
    >
      {props.children}
    </div>
  );
};

export default Container;
