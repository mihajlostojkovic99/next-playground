import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  textMessage: undefined,
}

export const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTextMessage: (state, action) => {
      state.textMessage = action.payload
    },
  },
})

export const { setTextMessage } = AppSlice.actions
export default AppSlice.reducer
