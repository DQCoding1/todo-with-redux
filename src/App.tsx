import './App.css'
import AddTodoForm from './components/AddTodoForm'
import TodoList from './components/TodoList'

function App() {  
  return (
    <main className='main'>
      <h1 className='main__title'>Todo with Redux</h1>
      <AddTodoForm />
      <TodoList />
    </main>
  )
}

export default App
