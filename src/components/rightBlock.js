import Filter from "./filter";
import SliderMobile from "./sliderMobile";

import Style from "../scss/rightBlock.module.scss";

function RightBlock(props) {
  return (
    <div className={Style.info}>
      <h1 className={Style.title}>Мультимедиа МТС Авто</h1>
      <p className={Style.text}>
        Система с сенсорным экраном, процессором Unisoc, СИМ-картой и
        встроенными сервисами МТС
      </p>
      <SliderMobile />
      <Filter activeFilter={props.activeFilter} />
    </div>
  );
}

export default RightBlock;
