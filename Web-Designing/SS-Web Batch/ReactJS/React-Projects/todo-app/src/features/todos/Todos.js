import { Link, useNavigate } from 'react-router-dom';
import './Todos.css';
import React, { useState } from 'react';

export default function Todos() {
    const navigate = useNavigate();
    // const [todos, setTodos] = useState([]);
    const todos = [
        {
            "id": "1",
            "title": "Go to market",
            "completed": false
          },
          {
            "id": "2",
            "title": "Buy groceries",
            "completed": false
          }
    ];
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


  return (
    <div style={{ 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center' }}>
        <h2>Todos</h2>

        <div style={{ 'margin': '0 0 1rem' }}>
        <Link to='/add-todo' className="btn">Add Todo</Link>
        </div>
        
        {error && <div>{error}</div>}

        {isLoading && 'Loading todos...'}

        <section className="todos-list">
                {todos && todos.map(todo => (
                    <article key={todo.id} onClick={() => navigate(`/todos/${todo.id}`)}>
                        {
                            todo.completed ? 
                            <h2><strike>{todo.title}</strike></h2> : 
                            <h2>{todo.title}</h2>
                        }
                        <button className="btn">
                            {todo.completed ? 'Mark Not Done' : 'Mark Done'}
                        </button>

                        <span
                            className="close"
                            title="Delete Todo"
                        >
                            &times;
                        </span>
                    </article>
                ))}
            </section>
    </div>
  )
}
