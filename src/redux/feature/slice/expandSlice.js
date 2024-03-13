import { createSlice } from "@reduxjs/toolkit";

const expandSlice = createSlice({
  name: "expand",
  initialState: { isOpen: false },
  reducers: {
    toggleExpand: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleExpand } = expandSlice.actions;
export default expandSlice.reducer;
