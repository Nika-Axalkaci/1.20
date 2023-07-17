import React from 'react'
import Todo from '../components/Todo'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../hooks/UseFetch'
import UseRequest from '../hooks/UseRequest'

const UpdatePage = () => {
  const {todoId} = useParams()
  const navigate = useNavigate()
  const {loading,error,response} = useFetch({url:`/api/v1/todos/${todoId}` , method:'GET'})
  
  const {sendRequest } = UseRequest({url:`/api/v1/todos/${todoId}` , method:"PUT"})
  
  const onSubmit = (toDo)=>{
   sendRequest({toDo})
   .then(()=> navigate('/'))
   .catch((error)=>console.log(error))

  }
  console.log(response);
  if(loading && !response) return <p>Loading ...</p>
  if(error || !response) return <p>Loading ... </p>
  return (
    <Todo onFormSubmit={onSubmit} toDo={response.toDo}/>
  )
}

export default UpdatePage