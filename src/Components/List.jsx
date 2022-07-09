import list from "./List.module.css";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";

const List = () => {
  let array = useSelector((state) => state.functionality.todo);

  let contet;

  if (array.length === 0) {
    contet = <p className={list.Default}>There are no goals.Let's add some!</p>;
  } else {
    contet = array.map((item, index) => {
      return <ListItem id={index} key={index} goalText={item} />;
    });
  }

  return (
    <div className={list.container}>
      <ul className={list.container__list}>{contet}</ul>
    </div>
  );
};

export default List;
