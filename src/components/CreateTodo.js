import { useNavigate } from "react-router-dom"
import {createTodo} from '../services/todos-api'

export default function CreateTodo() {
    const nav = useNavigate()

    const createTheTodo = (e) => {
        const todo = {title: e.target.title.value, description: e.target.description.value, complete: false}
        createTodo(todo)
        nav('/')
    }

return(
    <div>
        
        <form onSubmit={createTheTodo}>
        <h4>Create a Todo</h4>
            <input type='text' name="title" placeholder="title"/> <br/>
            <textarea type='text' name='description' placeholder="description" id='dsc'/>
            <input type='submit'/>
        </form>
    </div>
)
}