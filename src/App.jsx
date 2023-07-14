import React, { useEffect, useState } from "react";
import Todo from "./components/Todo";

const App = () => {
 const [toDoList,setTodoList] = useState([])
 useEffect(()=>{
  fetch('/api/v1/todos',{
      method:'GET',
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
      },
    }).then(res => {
      if(!res.ok) throw new Error('failed')
      return res.json()
     })
     .then(data=>setTodoList(data.items.map(todo=>{
      return{
        toDo: todo.toDo,
        id:todo._uuid,
        completed:todo.completed
      }
     })))
     .catch(err=>console.log(err))
 },[])
  const API_KEY = "zKGvy4wrzG48MBF1rpEKzukoOdedAWtjlxtIB616yHv16thUkg";
  const onFormSubmit = (toDo) => {
    fetch('/api/v1/todos',{
      method:'POST',
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
      },
      body: JSON.stringify([{toDo}])
    })
    .then(res => {
      if(!res.ok) throw new Error('failed')
      return res.json()

      
    })
    .then(data=>setTodoList((prev) =>[...prev ,{

      toDo: data.items[0].toDo,
      id: data.items[0]._uuid,
      completed : data.items[0].completed
    }]))
    .catch(err=>console.log(err))
  };
  return (
    <div>
      <Todo onFormSubmit={onFormSubmit} />
      {toDoList.map((todo)=> <div key={todo.id}>
          <h3>{todo.toDo}</h3>
          <p>{todo.completed}</p>

        </div>      
      )}
    </div>
  );
};

export default App;
