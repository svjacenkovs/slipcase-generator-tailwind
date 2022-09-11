import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], totalQuantity: 0 },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id); // Pārbaudam vai jau eksistē.
      state.totalQuantity++;
      // Ja neeksistē, stumjam items sarakstā.
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        // Ja eksistē items
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      // Ja ir atrast items un tā kvantitāte ir 1, mēs gribam to izdzēst pavisam no array.
      // Izfiltrējam visus itemus kuriem id nesakrīt ar id kuru padodam (izlaidīsim nevajadzīgo)
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        // Ja kvantitāte ir vairāk par 1, mēs gribam tikai atņemt -1 no kvantitātes.
        existingItem.quantity--;
        // Arī no totalPrice noņemam 1 vienības cenu.
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
