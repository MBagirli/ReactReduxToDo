import { useRef } from "react";
import header from "./Header.module.css";
import { useDispatch } from "react-redux";
import { actions } from "../ReduxToolkit";

const Header = () => {
  let input = useRef();
  let dispatch = useDispatch();

  let AddHandler = () => {
    dispatch(actions.add(input.current.value));
  };

  let DeleteAllHandler = () => {
    dispatch(actions.deleteAll());
  };

  return (
    <div className={header.container}>
      <h1 className={header.container__h1}>ToDo</h1>
      <div className={header.container__form}>
        <input
          ref={input}
          placeholder="ToDo"
          className={header.container__form__input}
          type="text"
        />
        <div className={header.container__form__btncontainer}>
          <button
            onClick={AddHandler}
            id={header.container__form__btncontainer__btn__1}
            className={header.container__form__btncontainer__btn}
          >
            Add
          </button>
          <button
            onClick={DeleteAllHandler}
            id={header.container__form__btncontainer__btn__2}
            className={header.container__form__btncontainer__btn}
          >
            Delete All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
