import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { weatherAPI } from '../api/API'

export const weatherDataFetch = createAsyncThunk(
    'weather/weatherDataFetch',
    async function(cityName, {rejectWithValue}) {
        try {
            const response = await fetch(`${weatherAPI.base}${cityName}&appid=${weatherAPI.key}&units=metric`)

            if (!response.ok) {
                throw new Error('Server error ...')
                
            }

            const data = await response.json();

            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        city: '',

        status: null,
        error: null
    },
    reducers: {
        cityNameReducer: (state, action) => {
            state.city = action.payload;
            
        }
    },
    extraReducers: {
        [weatherDataFetch.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [weatherDataFetch.fulfilled]: (state, action) => {
            state.status = 'resolved';
            console.log(action.payload);
        },
        [weatherDataFetch.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})

export const { cityNameReducer } = weatherSlice.actions;
export default weatherSlice.reducer;