import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]) // similar to vue's data()

  // creating function to fetch todos from django api
  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/')
      setTodos(response.data)
    } catch (error) {
      console.error("Error fetching todos:", error)
    }
  }

  // useEffect to fetch data when component mounts
  // similar to vue's created()
  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div className='p-4'>
      <h1 className='text-2xl text-center text-gray-900 p-4'>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className='mb-4 p-3 border border-gray-200 rounded'>
            <h3 className='text-lg font-semibold text-gray-800'>{todo.title}</h3>
            <p className='text-gray-600'>{todo.body}</p>
          </li>
        ))}
      </ul>
      {todos.length === 0 && (
        <p className='text-center text-gray-500'>Loading todos...</p>
      )}
    </div>
  )
}

export default App
