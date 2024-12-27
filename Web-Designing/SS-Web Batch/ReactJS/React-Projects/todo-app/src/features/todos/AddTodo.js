import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddTodo() {
    const [todoForm, setTodoForm] = useState({
        title: '',
        completed: false
      });

      const navigate = useNavigate();

      const handleChange = (e) => {
        setTodoForm({
          ...todoForm,
          [e.target.name]: e.target.value
        })
      }

    return (
        <div>
            <form className="add-form">
                <h2 style={{ 'textAlign': 'center' }}>Add New Todo</h2>
                <div className="form-control">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={todoForm.title} onChange={handleChange} name="title" />
                </div>
                <input type="hidden" name="completed" value={todoForm.completed} />
                <button className="btn">Add Todo</button>
            </form>
        </div>
    );
}
