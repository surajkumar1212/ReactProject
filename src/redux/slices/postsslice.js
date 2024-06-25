import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    data: [],
    error: null,
  }

const dataSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchDataStart(state) {
      state.loading = true
      state.error = null
    },

    fetchDataSuccess(state, action) {
      state.loading = false
      state.data = action.payload
    },

    fetchDataFailure(state, action) {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const {fetchDataStart, fetchDataSuccess , fetchDataFailure} = dataSlice.actions

export default dataSlice.reducer;
