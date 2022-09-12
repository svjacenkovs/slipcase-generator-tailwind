import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [{ width: 0, height: 0, grain: '' }] };
const boardMaterialSlice = createSlice({
  name: 'boardMaterials',
  initialState: initialState,
  reducers: {
    addItemToCart(state, action) {},
  },
});

export const boardMaterialActions = boardMaterialSlice.actions;
export default boardMaterialSlice.reducer;
