import React,{useState} from 'react'
import Form from './Form'

function List() {
    const [toDos,setToDos] = useState([]);
    const addToDo = (toDo) => {
       console.log(toDo);
    const toDosCopy =[...toDos];
    toDosCopy.push(toDo);
    setToDos(toDosCopy);
    };

   const markAsCompleted =(name)=> {
    const idx =toDos.findIndex((todo) =>todo.name === name)
    const toDosCopy =[...toDos];
    toDosCopy[idx].completed =true;
    setToDos(toDosCopy);

   } 
  return (
    <div>
        <div>
            {toDos.map((todo) => {
                return<p key ={todo.name} onClick={() => 
                    markAsCompleted(todo.name)}
                    className={todo.completed ? 
                    "strike": ""}>
                        {todo.name}</p>;
            })}
        </div>
        <Form AddToDoCallback={addToDo}/>
    </div>
  );
}

export default List