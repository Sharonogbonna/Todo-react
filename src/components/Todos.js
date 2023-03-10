import { useState, useEffect } from "react";
import { getTodos } from "../services/todos-api";
import CreateTodo from "./CreateTodo";
import Form from "./Form";

export default function Todos() {
  //state to hold data
  const [toDoList, setToDoList] = useState([]);
  const [display, setDisplay] = useState(false);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    getTodos()
      //.then is the promise, the data we get back
      //once we get the data back 'then what'
      .then((res) => setToDoList(res.data));
  }, []);

  const showDisplay = () => {
    setDisplay(true);
  };
  const hideDisplay = () => {
    setDisplay(false);
  };
  return (
    <div>
      <CreateTodo />
      <p
                    onClick={showDisplay}
                    className={`${display ? "hidden" : "active"}`}
                  >
                    click to show descriptions
                  </p>
                  <p
                    onClick={hideDisplay}
                    className={`${display ? "active" : "hidden"}`}
                  >
                    click to hide descriptions
                  </p>
      <ul>
        {toDoList.map((todo) => {
          return (
            <div>
              <li>
                <a href={`/${todo._id}`}>
                  <h3 className={`${todo.complete ? "completed" : ""}`}>
                    {todo.title}
                  </h3>
                </a>
                <div className="description">

                  <p className={`${display ? "" : "hidden"}`}>
                    {todo.description}
                  </p>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
