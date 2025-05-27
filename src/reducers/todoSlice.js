import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    value: [
      {
        name: "Relizar actividad 1",
        description: "Instalar paquetes de librerias para tarea 1",
        dueDate: "2024-04-26",
      },
    ],
  },

  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
