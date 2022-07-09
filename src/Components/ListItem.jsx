import listItem from "./ListItem.module.css";
import { useDispatch } from "react-redux";
import { actions } from "../ReduxToolkit";

const ListItem = (props) => {
  let dispatch = useDispatch();

  let DeleteHandler = (event) => {
    dispatch(actions.delete(event.target.id));
  };

  return (
    <li className={listItem.container}>
      <input className={listItem.container__btn} type="checkbox" />
      <div className={listItem.container__div}>
        <p>{props.goalText}</p>
      </div>
      <button
        onClick={DeleteHandler}
        id={props.id}
        className={listItem.container__btn}
      >
        X
      </button>
    </li>
  );
};

export default ListItem;
