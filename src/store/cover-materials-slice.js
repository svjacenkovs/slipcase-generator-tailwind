import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { width: 450, height: 640, grain: 'long' },
    { width: 640, height: 900, grain: 'long' },
    { width: 900, height: 640, grain: 'short' },
    { width: 720, height: 1020, grain: 'long' },
    { width: 1020, height: 720, grain: 'short' },
  ],
};
const coverMaterialSlice = createSlice({
  name: 'coverMaterials',
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      const { width, height, grain } = action.payload;
      state.items.push({ width, height, grain });
    },
  },
});

export const coverMaterialActions = coverMaterialSlice.actions;
export default coverMaterialSlice.reducer;
