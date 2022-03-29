import { Progress } from "antd";
import { FC, useContext, useEffect, useState } from "react";
import Button from "../../../Elements/Button/Button";
import Container from "../../../Elements/Container";
import "./SpecialDeals.scss";
import "../MainContent.scss";
import { ModalContext } from "../../ContentProvider/ContentProvider";

type timeType = {
  days: number;
  hours: number;
  minuts: number;
  seconds: number;
};

const SpecialDeals: FC = () => {

  const modalParamets = useContext(ModalContext)

  const [time, setTime] = useState<timeType>({
    days: 365,
    hours: 24,
    minuts: 60,
    seconds: 60,
  });

  const timer: Array<{ start: number; end: number; name: string }> = [
    { start: 7, end: time.days, name: "Days" },
    { start: 24, end: time.hours, name: "Hours" },
    { start: 60, end: time.minuts, name: "Minutes" },
    { start: 60, end: time.seconds, name: "Seconds" },
  ];

  function percentFind(start: number, now: number) {
    return (now * 100) / start;
  }

  let interval: any;

  useEffect(() => {
    if (interval) clearInterval(interval);
    interval = setInterval(
      () => setTime((pre) => ({ ...pre, seconds: pre.seconds - 1 })),
      1000
    );
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (time.seconds === 0) {
      setTime((pre) => ({ ...pre, minuts: pre.minuts - 1, seconds: 60 }));
    }
    if (time.minuts === 0) {
      setTime((pre) => ({ ...pre, minuts: 60, hours: pre.hours - 1 }));
    }
    if (time.hours === 0) {
      setTime((pre) => ({ ...pre, hours: 24, days: pre.days - 1 }));
    }
    if (time.days === 0) {
      setTime((pre) => ({ hours: 0, days: 0, seconds: 0, minuts: 0 }));
      clearInterval(interval);
    }
  }, [time]);

  return (
    <section className="special-deals">
      <Container width={1520}>
        <div className="special-deals__inner">
          <div className="special-deals__title">
            <p className="title">SPECIAL DEALS FOR THIS WEEK</p>
          </div>
          <div className="special-deals__timer">
            {timer.map(
              (elem: { start: number; end: number; name: string }, index) => {
                return (
                  <div key={index} className="special-deals__time">
                    <Progress
                      strokeLinecap="square"
                      strokeColor="#fff"
                      type="circle"
                      percent={percentFind(elem.start, elem.end)}
                      format={(percent) => `${elem.end}`}
                    />
                    <p>{elem.name}</p>
                  </div>
                );
              }
            )}
          </div>
          <Button click={()=>{modalParamets?.setModal(true); modalParamets?.setWindow("cat")}} text="Shop Now" />
        </div>
      </Container>
    </section>
  );
};

export default SpecialDeals;
