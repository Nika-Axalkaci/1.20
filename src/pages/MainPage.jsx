import React from 'react'

import { Link } from 'react-router-dom'
import style from '../styles/main.module.css'
import { useTodoContext } from '../contexts/TodoContext'
import { UseLanguageContext, languageOptions } from '../contexts/LanguageProvider'
const MainPage = () => {
  const{language} = UseLanguageContext()
  const {toDoList , dataLoading,deleteLoading , onDelete} = useTodoContext()
  if(dataLoading||deleteLoading) return <p>loading. . .</p>
  
  return (
 <div className={style.todoDiv}>
  <div className={style.createDiv}>
  <Link className={style.create}  to={'/create'}>CREATE</Link>
  </div>
        <h1>{languageOptions[language]}</h1>
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