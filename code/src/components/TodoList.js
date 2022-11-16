import React from 'react'
import { useSelector } from 'react-redux'

const TodoList = () => {
  const todos = useSelector((state) => state.todos.all)
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} />
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList