import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      width: 700,
      height: 1000,
      grain: 'long',
      upsOnSheet: {
        typeH: { byWidth: 0, byHeight: 0, total: 0 },
        typeT: { byWidth: 0, byHeight: 0, total: 0 },
      },
    },
    {
      width: 800,
      height: 1000,
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
          typeH: { byWidth: 0, byHeight: 0, total: 0 },
          typeT: { byWidth: 0, byHeight: 0, total: 0 },
        },
      });
    },
    calculateUps(state, action) {
      const typeHSizes = action.payload.find((box) => box.type === 'H');
      const typeTSizes = action.payload.find((box) => box.type === 'T');

      state.items.forEach((material) => {
        //Type H boxes

        // material.upsOnSheet.typeH.byWidth = material.width / typeHSizes.boardStamp.width;
        // material.upsOnSheet.typeH.byHeight = material.height / typeHSizes.boardStamp.height;

        //Type T boxes

        // material.upsOnSheet.typeT.byWidth = material.width / typeTSizes.boardStamp.width;
        // material.upsOnSheet.typeT.byHeight = material.height / typeTSizes.boardStamp.height;

        // Neievērojot šķiedru, nosakam kurā pozīcijā vairāk var izgriezt papes daļu (guļus vai vertikālā)

        //Type H boxes:
        // Sideways box orientation
        const WidthSidewaysH = Math.floor(material.width / typeHSizes.boardStamp.width);
        const HeightSidewaysH = Math.floor(material.height / typeHSizes.boardStamp.height);
        const totalSidewaysTypeH = WidthSidewaysH * HeightSidewaysH;
        // Vertical box orientation
        const WidthVerticalH = Math.floor(material.height / typeHSizes.boardStamp.width);
        const HeightVerticalH = Math.floor(material.width / typeHSizes.boardStamp.height);
        const totalVerticalTypeH = WidthVerticalH * HeightVerticalH;
        // Choose the most on sheet for type "H" box
        if (totalSidewaysTypeH >= totalVerticalTypeH) {
          material.upsOnSheet.typeH.byWidth = WidthSidewaysH;
          material.upsOnSheet.typeH.byHeight = HeightSidewaysH;
          material.upsOnSheet.typeH.total = totalSidewaysTypeH;
        } else {
          material.upsOnSheet.typeH.byWidth = WidthVerticalH;
          material.upsOnSheet.typeH.byHeight = HeightVerticalH;
          material.upsOnSheet.typeH.total = totalVerticalTypeH;
        }

        //Type T boxes
        // Sideways box orientation
        const WidthSidewaysT = Math.floor(material.width / typeTSizes.boardStamp.width);
        const HeightSidewaysT = Math.floor(material.height / typeTSizes.boardStamp.height);
        const totalSidewaysTypeT = WidthSidewaysT * HeightSidewaysT;
        // Vertical box orientation
        const WidthVerticalT = Math.floor(material.height / typeTSizes.boardStamp.width);
        const HeightVerticalT = Math.floor(material.width / typeTSizes.boardStamp.height);
        const totalVerticalTypeT = WidthVerticalT * HeightVerticalT;
        // Choose the most on sheet for type "T" box
        if (totalSidewaysTypeT >= totalVerticalTypeT) {
          material.upsOnSheet.typeT.byWidth = WidthSidewaysT;
          material.upsOnSheet.typeT.byHeight = HeightSidewaysT;
          material.upsOnSheet.typeT.total = totalSidewaysTypeT;
        } else {
          material.upsOnSheet.typeT.byWidth = WidthVerticalT;
          material.upsOnSheet.typeT.byHeight = HeightVerticalT;
          material.upsOnSheet.typeT.total = totalVerticalTypeT;
        }

        // material.upsOnSheet.typeT.byWidth = material.width / typeTSizes.boardStamp.width;
        // material.upsOnSheet.typeT.byHeight = material.height / typeTSizes.boardStamp.height;
      });
    },
  },
});

export const boardMaterialActions = boardMaterialSlice.actions;
export default boardMaterialSlice.reducer;
