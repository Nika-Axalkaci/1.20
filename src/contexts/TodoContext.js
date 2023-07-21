import {  createContext, useCallback, useContext, useMemo } from "react";
import UseRequest from "../hooks/UseRequest";
import useFetch from "../hooks/UseFetch";

const TodoContext = createContext(null)
const TodoContextProvider = ({children})=>{
   const {loading:dataLoading, response, resendRequest } = useFetch({
     url: "/api/v1/todos",
     method: "GET",
   });
   const { sendRequest , loading:deleteLoading } = UseRequest({ method: "DELETE" });
   const toDoList = useMemo(()=>{
        return response?.items.map((todo) => {
           return {
             toDoTime: todo.toDoTime,
             toDo: todo.toDo,
             id: todo._uuid,
           };
         }) || [];
   }, [response])
   const onDelete = useCallback(()=>(todoId) => {
     sendRequest(null, `/api/v1/todos/${todoId}`).then(() => resendRequest());
   },[resendRequest])
   const contextValue = useMemo(
     () => ({
       dataLoading,
       deleteLoading,
       toDoList,
       onDelete,
     }),
     [dataLoading, deleteLoading, toDoList, onDelete]
   );

   return<TodoContext.Provider value={contextValue}>
    {children}
   </TodoContext.Provider>

}
 export const useTodoContext = () =>{
  const contextValue = useContext(TodoContext)
  if(!contextValue) throw new Error('error')
  return contextValue 
}

export default TodoContextProvider;