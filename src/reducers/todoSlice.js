import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunks for API calls
// Update the API URLs to include the full path
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch('http://localhost:3000/tasks/gettasks');
  if (!response.ok) {
    throw new Error('Failed to fetch tasks');
  }
  const data = await response.json();
  return data;
});

export const addTodoAsync = createAsyncThunk('todos/addTodoAsync', async (todo) => {
  const response = await fetch('http://localhost:3000/tasks/addtask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  const data = await response.json();
  return { ...todo, ...data };
});

export const removeTodoAsync = createAsyncThunk('todos/removeTodoAsync', async (id) => {
  await fetch(`http://localhost:3000/tasks/removetask/${id}`, {
    method: 'DELETE',
  });
  return id;
});

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    value: [],
    status: 'idle',
    error: null
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.value.push(action.payload);
      })
      .addCase(removeTodoAsync.fulfilled, (state, action) => {
        state.value = state.value.filter(todo => todo._id !== action.payload);
      });
  },
});

export default todoSlice.reducer;
