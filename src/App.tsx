import { useState } from 'react'
import './App.css'

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState('')

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }])
      setNewTask('')
    }
  }

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const handleToggleComplete = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const completedCount = tasks.filter(task => task.completed).length

  return (
    <div className="app">
      <header className="app-header">
        <div>
          <p className="app-eyebrow">Task Manager</p>
          <h1>Plan your day with focus.</h1>
          <p className="app-subtitle">Add tasks, mark them done, and keep momentum.</p>
        </div>
        <div className="app-stats">
          <div>
            <span className="stat-label">Total</span>
            <span className="stat-value">{tasks.length}</span>
          </div>
          <div>
            <span className="stat-label">Done</span>
            <span className="stat-value">{completedCount}</span>
          </div>
        </div>
      </header>

      <section className="card">
        <div className="input-row">
          <input
            type="text"
            placeholder="What needs to be done?"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleAddTask()
            }}
          />
          <button className="btn btn-primary" onClick={handleAddTask}>
            Add task
          </button>
        </div>
      </section>

      <section className="task-list">
        {tasks.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">✓</div>
            <p>No tasks yet. Add your first one above.</p>
          </div>
        ) : (
          <ul>
            {tasks.map((task) => (
              <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleToggleComplete(task.id)}
                  />
                  <span className="checkmark" />
                </label>
                <div className="task-content">
                  <span className="task-text">{task.text}</span>
                  <span className="task-badge">
                    {task.completed ? 'Done' : 'Pending'}
                  </span>
                </div>
                <button className="btn btn-ghost" onClick={() => handleDeleteTask(task.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}

export default App
