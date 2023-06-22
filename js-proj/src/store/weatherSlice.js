import { createSlice } from '@reduxjs/toolkit'

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        city: ''
    },
    reducers: {
        cityNameReducer: (state, action) => {
            state.city = action.payload;
            console.log(state.city);
        }
    },
})

export const { cityNameReducer } = weatherSlice.actions;
export default weatherSlice.reducer;