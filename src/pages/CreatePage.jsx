import Todo from '../components/Todo'
import useRequest from '../hooks/UseRequest';
import { useNavigate } from 'react-router-dom';

const CreatePage = () => {
  const {sendRequest,loading} = useRequest({url:'/api/v1/todos',method:"POST"})
  const navigate = useNavigate()
  const onSubmit = (toDo , toDoTime) =>{
    sendRequest([{toDo , toDoTime}])
    .then(()=> navigate('/'))
    .catch(err=>console.log(err))

  }
  console.log('create',onSubmit);
  if(loading){
    return <p>loading ...</p>
  }
  return <Todo onFormSubmit={onSubmit} />
} 

export default CreatePage