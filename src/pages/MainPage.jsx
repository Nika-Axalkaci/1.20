import React from 'react'
import useFetch from '../hooks/UseFetch'
import { Link } from 'react-router-dom'
import UseRequest from '../hooks/UseRequest'
import style from '../styles/main.module.css'
const MainPage = () => {
  const {error,loading,response,resendRequest} = useFetch({url:"/api/v1/todos",method:'GET'})
  const {sendRequest} = UseRequest({method:"DELETE"})
  const toDoList = response?.items.map(todo =>{
   return{
      toDoTime: todo.toDoTime,
     toDo: todo.toDo,
       id: todo._uuid
 }
  }) || []
  const onDelete = (todoId)=>{
    sendRequest(null , `/api/v1/todos/${todoId}`)
    .then(()=>resendRequest())
  }
  if(loading) return <p>loading. . .</p>
  if (error) return <p>error</p>
  return (
 <div className={style.todoDiv}>
  <div className={style.createDiv}>
  <Link className={style.create}  to={'/create'}>CREATE</Link>
  </div>
    <div className={style.card}>
    {toDoList.map((todo)=> <div className={style.todo} key={todo.id}>
        <h3>TODO: {todo.toDo}</h3>
        <h3>DEADLINE: {todo.toDoTime}</h3>
        <Link to={`/update/${todo.id}`}>Edit</Link>
        <button onClick={()=>onDelete(todo.id)}>DELETE</button>
      </div>      
    )}

    </div>
  </div>
  )
}

export default MainPage