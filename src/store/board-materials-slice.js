import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      width: 700,
      height: 1000,
      grain: 'long',
      upsOnSheet: {
        typeH: { byWidth: 0, byHeight: 0 },
        typeT: { byWidth: 0, byHeight: 0 },
      },
    },
    {
      width: 800,
      height: 1000,
      grain: 'long',
      upsOnSheet: {
        typeH: { byWidth: 0, byHeight: 0 },
        typeT: { byWidth: 0, byHeight: 0 },
      },
    },
    {
      width: 640,
      height: 900,
      grain: 'long',
      upsOnSheet: {
        typeH: { byWidth: 0, byHeight: 0 },
        typeT: { byWidth: 0, byHeight: 0 },
      },
    },
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
