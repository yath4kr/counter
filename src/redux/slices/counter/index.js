import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  initialState: 0,
  name: "counter",
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => (state > 0 ? state - 1 : state),
    reset: (state) => 0,
  },
});

export const { decrement, increment, reset } = counterSlice.actions;
export default counterSlice.reducer;
