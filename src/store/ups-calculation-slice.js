import { createSlice } from '@reduxjs/toolkit';
import { generateTypeT, generateTypeH } from '../utils/stampGenerator/stampGenerator';

const initialState = {
  submittedBoxSizes: [],
  sizeInputs: { width: 0, height: 0, spine: 0, materialThickness: 0 },
  projectName: '',
};
const customRounding = (number) => {
  //Noapaļo skaitli ar .toFixed(2), ja vispār ir decimāldaļa.
  return Math.round(number * 100) / 100;
};
const upsCalculationSlice = createSlice({
  name: 'boardMaterials',
  initialState: initialState,
  reducers: {
    calculateStampSizes(state, action) {
      const { spine, width, height, boardThickness } = action.payload;
      state.submittedBoxSizes = [];
      const typeHbox = {
        type: 'H',
        providedSizes: { spine, width, height, boardThickness },
        boardStamp: {
          width: customRounding(2 * width + spine),
          height: customRounding(2 * (spine + boardThickness) + height + 2 * boardThickness),
        },
        coverStamp: {
          width: customRounding(2 * width + spine + 7 * boardThickness + 30),
          height: customRounding(2 * spine + height + 5 * boardThickness),
        },
        boardKnifeLength: generateTypeH.boardKnifeLength({ spine, width, height, materialThickness: boardThickness }),
        coverKnifeLength: generateTypeH.coverKnifeLength({ spine, width, height, materialThickness: boardThickness }),
      };
      const typeTbox = {
        type: 'T',
        providedSizes: { spine, width, height, boardThickness },
        boardStamp: {
          width: customRounding(2 * width + spine),
          height: customRounding(2 * (spine + boardThickness) + height),
        },
        coverStamp: {
          width: customRounding(2 * width + spine + 7 * boardThickness + 30),
          height: customRounding(2 * spine + height + 4 * boardThickness),
        },
        boardKnifeLength: generateTypeT.boardKnifeLength({ spine, width, height, materialThickness: boardThickness }),
        coverKnifeLength: generateTypeT.coverKnifeLength({ spine, width, height, materialThickness: boardThickness }),
      };
      state.submittedBoxSizes.push(typeHbox, typeTbox);
      state.sizeInputs = { width, height, spine, boardThickness };
    },
    setProjectName(state, action) {
      state.projectName = action.payload;
    },
  },
});

export const upsCalculationActions = upsCalculationSlice.actions;
export default upsCalculationSlice.reducer;
