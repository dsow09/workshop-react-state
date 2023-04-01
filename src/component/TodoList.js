import React from 'react';

const TodoList = ({ todos, handleEdit, handleDelete }) => {
    return (
        <ul className='allTodos'>
            {todos.map((todo) => (
                
                <li className='singleTodo'>
                    <span className='todoText' key={todo.id}>{todo.todo}</span>
                    <button onClick={() => handleEdit(todo.id)}>Modifier</button>
                    <button onClick={() => handleDelete(todo.id)}>Supprimer</button>
                </li>
            ))}
        </ul>
    )
}

export default TodoList;