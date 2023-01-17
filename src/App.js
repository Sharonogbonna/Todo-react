import { Route, Routes } from "react-router-dom";

//css
import "./style.css";
//components
import Form from "./components/Form";
import Todo from "./components/Todo";
import Todos from "./components/Todos";
import { EditTodo } from "./components/EditTodo";
function App() {
  return (
    <div className="App">
      <h1>My To Do List</h1>
      {/* <Form/> */}
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/:id" element={<Todo />} />
        <Route path ="/:id/edit" element={<EditTodo/>}/>
      </Routes>
    </div>
  );
}

export default App;
