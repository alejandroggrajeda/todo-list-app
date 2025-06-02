import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGoals = createAsyncThunk('goals/fetchGoals', async () => {
  const response = await fetch('http://localhost:3000/goals/getgoals');
  const data = await response.json();
  return data;
});

export const addGoalAsync = createAsyncThunk('goals/addGoalAsync', async (goal) => {
  const response = await fetch('http://localhost:3000/goals/addgoal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(goal),
  });
  const data = await response.json();
  return { ...goal, ...data };
});

export const removeGoalAsync = createAsyncThunk('goals/removeGoalAsync', async (id, { rejectWithValue }) => {
  try {
    console.log('Deleting goal with ID:', id); 
    const response = await fetch(`http://localhost:3000/goals/removegoal/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      // Try to parse the error message, or use a default message
      const data = await response.json().catch(() => ({ message: "Unknown error occurred" }));
      return rejectWithValue(data.message || "Failed to delete goal");
    }

    return id; // Return just the ID for filtering
  } catch (error) {
    console.error('Delete error:', error);
    return rejectWithValue(error.message || "Network error occurred");
  }
});

export const goalSlice = createSlice({
  name: "goals",
  initialState: {
    value: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoals.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGoals.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value = action.payload;
      })
      .addCase(fetchGoals.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addGoalAsync.fulfilled, (state, action) => {
        state.value.push(action.payload);
      })
      .addCase(removeGoalAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeGoalAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log('Filtering with ID:', action.payload); 
        state.value = state.value.filter(goal => goal._id !== action.payload);
      })
      .addCase(removeGoalAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Could not delete goal';
        console.error('Remove goal failed:', action.payload);
      });
  },
});

export default goalSlice.reducer;
