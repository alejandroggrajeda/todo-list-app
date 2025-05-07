import { createSlice } from "@reduxjs/toolkit";

export const goalSlice = createSlice({
  name: "goals",
  initialState: {
    value: [
      {
        name: "Completar todos los cursos del TDS",
        description: "Ganar todos los cursos",
        dueDate: "2024-12-31",
      },
    ],
  },
  reducers: {
    addGoal: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addGoal } = goalSlice.actions;

export default goalSlice.reducer;
