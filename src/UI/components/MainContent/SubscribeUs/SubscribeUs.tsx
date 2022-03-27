import { FC, useState } from "react";
import Container from "../../../Elements/Container";
import "./SubscribeUs.scss";
import "../MainContent.scss";
import Button from "../../../Elements/Button/Button";
import { message } from "antd";

const SubscribeUs: FC = () => {
  const [value, setValue] = useState<string>("");

  function checkMistaks() {
    if (!value) {
      message.error({ content: "Поле пустое!", duration: 1 });
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      message.error({ content: "Неверно введена почта!", duration: 1 });
    } else {
      setValue("");
      message.success({ content: "Успешно отправлено!", duration: 1 });
    }
  }

  return (
    <section id={"SERVICE"} className="subscribe-us">
      <Container width={1440}>
        <div className="subscribe-us__inner">
          <div className="subscribe-us__hat hat">
            <div className="subscribe-us__title title">
              SUBSCRIBE US FOR TRENDING WORKS
            </div>
            <div className="subscribe-us__wishes wishes">
              Stay up to date with our new and trending works !!!
            </div>
            <form className="subscribe-us__form" action="#">
              <input
                type="email"
                placeholder="Enter your email address"
                onChange={(e) => setValue(e.target.value)}
                value={value}
              />
              <Button click={checkMistaks} text="SUBSCRIBE" value={true} />
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SubscribeUs;
