import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    isTest:false,
  },
  reducers: {
    increment: (state) => {

      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    Amount: (state, action) => {
      state.value = action.payload
    },
    takeTest: (state, action) => {
        state.isTest = action.payload
      },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, takeTest , Amount} = counterSlice.actions

export default counterSlice.reducer