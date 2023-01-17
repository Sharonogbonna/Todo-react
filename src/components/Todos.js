import { useState, useEffect } from "react";
import { getTodos } from "../services/todos-api";
import { CreateTodo } from "./CreateTodo";
import Form from "./Form";

export default function Todos() {
  //state to hold data
  const [toDoList, setToDoList] = useState([]);
  useEffect(() => {
    getTodos()
      //.then is the promise, the data we get back
      //once we get the data back 'then what'
      .then((res) => setToDoList(res.data));
  }, []);
  console.log(toDoList);
  return (
    <div>
      <ul>
        {toDoList.map((todo) => {
          return (
            <div>
              <li>
                <a href={`/${todo._id}`}>{todo.title}</a>
              </li>
            </div>
          );
        })}
      </ul>
      {/* <CreateTodo/> */}
    </div>
  );
}
