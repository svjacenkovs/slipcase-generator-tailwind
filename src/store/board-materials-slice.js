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
      state.items.push({
        width,
        height,
        grain,
        upsOnSheet: {
          typeH: { byWidth: 0, byHeight: 0 },
          typeT: { byWidth: 0, byHeight: 0 },
        },
      });
    },
    calculateUps(state, action) {
      const typeHSizes = action.payload.find((box) => box.type === 'H');
      const typeTSizes = action.payload.find((box) => box.type === 'T');
      state.items.forEach((item) => {
        // Type H boxes
        item.upsOnSheet.typeH.byWidth =
          item.width / typeHSizes.boardStamp.width;
        item.upsOnSheet.typeH.byHeight =
          item.height / typeHSizes.boardStamp.height;

        // Type T boxes
        item.upsOnSheet.typeT.byWidth =
          item.width / typeTSizes.boardStamp.width;
        item.upsOnSheet.typeT.byHeight =
          item.height / typeTSizes.boardStamp.height;
      });
    },
  },
});

export const boardMaterialActions = boardMaterialSlice.actions;
export default boardMaterialSlice.reducer;
