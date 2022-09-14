import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      width: 450,
      height: 640,
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
    {
      width: 900,
      height: 640,
      grain: 'short',
      upsOnSheet: {
        typeH: { byWidth: 0, byHeight: 0 },
        typeT: { byWidth: 0, byHeight: 0 },
      },
    },
    {
      width: 720,
      height: 1020,
      grain: 'long',
      upsOnSheet: {
        typeH: { byWidth: 0, byHeight: 0 },
        typeT: { byWidth: 0, byHeight: 0 },
      },
    },
    {
      width: 1020,
      height: 720,
      grain: 'short',
      upsOnSheet: {
        typeH: { byWidth: 0, byHeight: 0 },
        typeT: { byWidth: 0, byHeight: 0 },
      },
    },
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
