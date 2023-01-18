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

    return (
    <div>
        <Form props={ data }/>
    </div>
  )
}
