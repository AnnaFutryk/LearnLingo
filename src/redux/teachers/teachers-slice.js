import { createSlice } from "@reduxjs/toolkit";
import { getTeachers } from "./teachers-operations";

const initialState = {
  teachers: [],
  isLoading: false,
  error: null,
};

const teachersSlice = createSlice({
  name: "teachers",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getTeachers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTeachers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.teachers = payload;
        console.log(payload);
      })
      .addCase(getTeachers.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message || "Error fetching teachers";
        console.error("Error fetching teachers:", error);
      });
  },
});

export default teachersSlice.reducer;
