import './App.css';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mise à jour
    if(editId) {
      const editTodo = todos.find(i => i.id === editId);
      const updatedTodos = todos.map((t) =>
      t.id === editTodo.id ? (t = {id: t.id, todo}) : {id: t.id, todo: t.todo});
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }
    //Ajout d'un ajout
    if(todo !== "") {
      setTodos([{id: `${Date.now()}`, todo}, ...todos]);
      setTodo("");
    }
  };

  const handleEdit = (id) => {
    const editTodo = todos.find(todo => todo.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };

  const handleDelete = (id) => {
    const deleteTodo = todos.filter(todo => todo.id !== id);
    setTodos([...deleteTodo]);
  };

  

  return (
    <div className="App">
      <div className='container'>
        <h1>Todo List</h1>
        <TodoForm 
        handleSubmit={handleSubmit}
        todo={todo}
        setTodo={setTodo}
        editId={editId}
         />
         <TodoList
         todos={todos}
         handleEdit={handleEdit}
         handleDelete={handleDelete}
         />
      </div>
    </div>
  );
}

export default App;
