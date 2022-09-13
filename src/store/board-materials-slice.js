import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { width: 700, height: 1000, grain: 'long' },
    { width: 800, height: 1000, grain: 'long' },
    { width: 640, height: 900, grain: 'long' },
  ],
};
const boardMaterialSlice = createSlice({
  name: 'boardMaterials',
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      const { width, height, grain } = action.payload;
      state.items.push({ width, height, grain });
    },
  },
});

export const boardMaterialActions = boardMaterialSlice.actions;
export default boardMaterialSlice.reducer;
