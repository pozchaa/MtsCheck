import Style from "../scss/bottom.module.scss";

function Bottom(props) {
  return (
    <div className={Style.bottom}>
      <button
        className={
          Style.button + " " + (props.isActive ? Style.buttonActive : " ")
        }
      >
        Купить
      </button>
    </div>
  );
}

export default Bottom;
