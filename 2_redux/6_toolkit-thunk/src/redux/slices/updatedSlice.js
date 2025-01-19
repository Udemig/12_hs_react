import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../actions";

const initialState = {
  isLoading: true,
  error: null,
  users: [],
};

const updatedSlice = createSlice({
  name: "updated",
  initialState: initialState,
  // senkron aksiyonlar için:
  reducers: {},

  // asenkron aksiyonlar için:
  extraReducers: (builder) => {
    // addCase methoduna: aksiyonun durumlarından birini ve  state'i güncelleyicek fonksiyonu veririz
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.users = action.payload;
    });
  },
});

export default updatedSlice.reducer;
