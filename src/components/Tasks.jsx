import { useState, useEffect } from 'react'

export default function Tasks() {
  const [input, setInput] = useState('')
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    //take all tasks from localStorage
    const tasksStorage = localStorage.getItem('@tasks')

    //transformar em listas
    if (tasksStorage) {
      setTasks(JSON.parse(tasksStorage))
    }
  }, [])

  //pass all tasks as JSON and store locally
  useEffect(() => {
    localStorage.setItem('@tasks', JSON.stringify(tasks))
  }, [tasks])

  //show new tasks when the button is clicked
  function register(e) {
    e.preventDefault()
    setTasks([...tasks, input])
    setInput('')
  }

  return (
    <div>
      <h2>Tasks</h2>

      <form onSubmit={register}>
        <label>Task name:</label>
        <input
          type="text"
          placeholder="Type a task"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <br />
        <button type="submit">Register</button> <br />
        <br />
      </form>

      <div>
        <ul>
          {tasks.map(tasks => (
            <li key={tasks}>{tasks}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
