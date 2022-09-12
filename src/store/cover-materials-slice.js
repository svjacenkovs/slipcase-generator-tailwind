import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [{ width: 0, height: 0, grain: '' }] };
const coverMaterialSlice = createSlice({
  name: 'coverMaterials',
  initialState: initialState,
  reducers: {
    addItemToCart(state, action) {},
  },
});

export const coverMaterialActions = coverMaterialSlice.actions;
export default coverMaterialSlice.reducer;
