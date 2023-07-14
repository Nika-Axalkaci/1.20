import React, { useState } from 'react'

const Todo = ({onFormSubmit}) => {
  const [toDo,setToDo] = useState()
    const onSubmit = (e) =>{
      e.preventDefault()
      onFormSubmit(toDo)
    }
  
  return (
    <div><form onSubmit={onSubmit} >
      <input type="text" placeholder='TODO' onChange={(e) => setToDo(e.target.value)} />
      <button >sumbit</button>

    </form>
</div>
      )
}

export default Todo