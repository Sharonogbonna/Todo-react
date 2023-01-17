import { editTodo, getTodo } from "../services/todos-api"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router"
import Form from "./Form"
export const EditTodo = () => {
    const {id} = useParams()
    const nav = useNavigate()
    const [data, setData] = useState({})

    useEffect(() => {
        //get the to do that matches this id
        getTodo(id)
        .then(res => setData(res.data))
    }, [])

    //function to actually edit the tod
    // const editTheTodo = e => {
    //     e.preventDefault()
    //     const updatedTodo = {title: e.target.title.value, description: e.target.description.value, complete: e.target.complete.checked}
    //     editTodo(id, updatedTodo)
    //     nav(`/${id}`)
    // }
    return (
    <div>
        <Form props={ data }/>
    </div>
  )
}
