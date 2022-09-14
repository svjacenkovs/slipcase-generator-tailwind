import { createSlice } from '@reduxjs/toolkit';

const initialState = { submittedBoxSizes: [] };
const upsCalculationSlice = createSlice({
  name: 'boardMaterials',
  initialState: initialState,
  reducers: {
    calculateStampSizes(state, action) {
      const { spine, width, height, boardThickness } = action.payload;
      state.submittedBoxSizes = [];
      const typeHbox = {
        type: 'H',
        boardStamp: {
          width: 2 * width + spine,
          height: 2 * (spine + boardThickness) + height + 2 * boardThickness,
        },
        coverStamp: {
          width: 2 * width + spine + 7 * boardThickness + 30,
          height: 2 * spine + height + 5 * boardThickness,
        },
      };
      const typeTbox = {
        type: 'T',
        boardStamp: {
          width: 2 * width + spine,
          height: 2 * (spine + boardThickness) + height,
        },
        coverStamp: {
          width: 2 * width + spine + 7 * boardThickness + 30,
          height: 2 * spine + height + 4 * boardThickness,
        },
      };
      state.submittedBoxSizes.push(typeHbox, typeTbox);
    },
  },
});

export const upsCalculationActions = upsCalculationSlice.actions;
export default upsCalculationSlice.reducer;
