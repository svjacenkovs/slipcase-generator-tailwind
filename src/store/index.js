import { configureStore } from '@reduxjs/toolkit';
import coverMaterialSlice from './cover-materials-slice';
import boardMaterialSlice from './board-materials-slice';
import upsCalculationSlice from './ups-calculation-slice';

const store = configureStore({
  reducer: {
    coverMaterials: coverMaterialSlice,
    boardMaterials: boardMaterialSlice,
    upsCalculations: upsCalculationSlice,
  },
});

export default store;
