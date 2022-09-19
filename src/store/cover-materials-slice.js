import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      width: 450,
      height: 640,
      grain: 'long',
      upsOnSheet: {
        typeH: { byWidth: 0, byHeight: 0, total: 0 },
        typeT: { byWidth: 0, byHeight: 0, total: 0 },
      },
    },
    {
      width: 640,
      height: 900,
      grain: 'long',
      upsOnSheet: {
        typeH: { byWidth: 0, byHeight: 0, total: 0 },
        typeT: { byWidth: 0, byHeight: 0, total: 0 },
      },
    },
    {
      width: 900,
      height: 640,
      grain: 'short',
      upsOnSheet: {
        typeH: { byWidth: 0, byHeight: 0, total: 0 },
        typeT: { byWidth: 0, byHeight: 0, total: 0 },
      },
    },
    {
      width: 720,
      height: 1020,
      grain: 'long',
      upsOnSheet: {
        typeH: { byWidth: 0, byHeight: 0, total: 0 },
        typeT: { byWidth: 0, byHeight: 0, total: 0 },
      },
    },
    {
      width: 1020,
      height: 720,
      grain: 'short',
      upsOnSheet: {
        typeH: { byWidth: 0, byHeight: 0, total: 0 },
        typeT: { byWidth: 0, byHeight: 0, total: 0 },
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
      state.items.push({
        width,
        height,
        grain,
        upsOnSheet: {
          typeH: { byWidth: 0, byHeight: 0, total: 0 },
          typeT: { byWidth: 0, byHeight: 0, total: 0 },
        },
      });
    },
    calculateUps(state, action) {
      const typeHSizes = action.payload.find((box) => box.type === 'H');
      const typeTSizes = action.payload.find((box) => box.type === 'T');
      state.items.forEach((material) => {
        switch (material.grain) {
          case 'long':
            // Type H boxes cover stamps
            material.upsOnSheet.typeH.byWidth =
              material.width / typeHSizes.coverStamp.width;
            material.upsOnSheet.typeH.byHeight =
              material.height / typeHSizes.coverStamp.height;

            // Type T boxes cover stamps
            material.upsOnSheet.typeT.byWidth =
              material.width / typeTSizes.coverStamp.width;
            material.upsOnSheet.typeT.byHeight =
              material.height / typeTSizes.coverStamp.height;
            break;
          case 'short':
            // Type H boxes cover stamps
            material.upsOnSheet.typeH.byHeight =
              material.height / typeHSizes.coverStamp.height;
            material.upsOnSheet.typeH.byWidth =
              material.width / typeHSizes.coverStamp.width;

            // Type T boxes cover stamps
            material.upsOnSheet.typeT.byHeight =
              material.height / typeTSizes.coverStamp.height;
            material.upsOnSheet.typeT.byWidth =
              material.width / typeTSizes.coverStamp.width;
            break;
          default:
            break;
        }

        // // Type H boxes cover stamps
        // material.upsOnSheet.typeH.byWidth = material.width / typeHSizes.coverStamp.width;
        // material.upsOnSheet.typeH.byHeight = material.height / typeHSizes.coverStamp.height;

        // // Type T boxes cover stamps
        // material.upsOnSheet.typeT.byWidth = material.width / typeTSizes.coverStamp.width;
        // material.upsOnSheet.typeT.byHeight = material.height / typeTSizes.coverStamp.height;
      });
    },
  },
});

export const coverMaterialActions = coverMaterialSlice.actions;
export default coverMaterialSlice.reducer;
