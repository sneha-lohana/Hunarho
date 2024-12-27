import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Todo() {
    const { id } = useParams();
    const [todo, setTodo] = useState(null);

  return (
    <div style={{ 'padding': '1rem' }}>
        {id}
      {todo && <h2>{todo.title}</h2>}
    </div>
  )
}
