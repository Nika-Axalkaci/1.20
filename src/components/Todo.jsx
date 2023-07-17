import React, { useRef } from 'react'

const Todo = ({onFormSubmit , toDo}) => {
const toDoRef = useRef()
const toDoTimeRef = useRef()

    const onSubmit = (e) =>{
      e.preventDefault()
      if(toDoRef.current && toDoTimeRef.current){
        onFormSubmit(toDoRef.current.value , toDoTimeRef.current.value)
      }else{
        console.log('fill it');
      }
    }
  
  return (
    <div><form onSubmit={onSubmit} >
      <input type="text" placeholder='TODO' ref={toDoRef}
      defaultValue={toDo} />
      <input type="date" placeholder='Deadline ' ref={toDoTimeRef}/>
      <button >sumbit</button>

    </form>
</div>
      )
}

export default Todo