import { createSlice} from "@reduxjs/toolkit"
import { TodoInterface } from "../interfaces"
 
const initialState : Array<TodoInterface>= [
  {
    id: 1,
    title: "buy a new computer",
    completed: true,
  },
  {
    id: 2,
    title: "create a new app",
    completed: false,
  },
  {
    id: 3,
    title: "take a break",
    completed: false,
  },
]

const todoSlice = createSlice({
  name : "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false
      }
      state.push(newTodo)
    }
  }
})

export const { addTodo } = todoSlice.actions
export default todoSlice.reducer
