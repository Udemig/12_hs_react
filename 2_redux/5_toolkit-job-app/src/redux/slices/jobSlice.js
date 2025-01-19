import { createSlice } from "@reduxjs/toolkit";

const initialState = { jobs: [], isLoading: true, error: null };

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },

    setError: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.message;
    },

    setJobs: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.jobs = payload;
    },

    createJob: (state, { payload }) => {
      state.jobs.push(payload);
    },

    deleteJob: (state, { payload }) => {
      const index = state.jobs.findIndex((i) => i.id === payload);

      state.jobs.splice(index, 1);
    },

    updateJob: (state, { payload }) => {
      const index = state.jobs.findIndex((i) => i.id === payload.id);

      state.jobs.splice(index, 1, payload);
    },
  },
});

export const {
  setLoading,
  setError,
  setJobs,
  createJob,
  deleteJob,
  updateJob,
} = jobSlice.actions;

export default jobSlice.reducer;
