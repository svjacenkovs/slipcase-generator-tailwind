import { configureStore } from '@reduxjs/toolkit';
import coverMaterialSlice from './cover-materials-slice';
import boardMaterialSlice from './board-materials-slice';

const store = configureStore({
  reducer: { coverMaterials: coverMaterialSlice, boardMaterials: boardMaterialSlice },
});

export default store;
