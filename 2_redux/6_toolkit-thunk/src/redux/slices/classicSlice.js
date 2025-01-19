import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  error: null,
  users: [],
};

const classicSlice = createSlice({
  name: "classic",
  initialState: initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    setError: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    setUsers: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.users = payload;
    },
  },
});

export const { setLoading, setError, setUsers } = classicSlice.actions;

export default classicSlice.reducer;
