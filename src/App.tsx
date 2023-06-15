import './App.css'
import AddTodoForm from './components/AddTodoForm'
import TodoList from './components/TodoList'

function App() {  
  return (
    <main>
      <h1>Todo with Redux</h1>
      <AddTodoForm />
      <TodoList />
    </main>
  )
}

export default App
