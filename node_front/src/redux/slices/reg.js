import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../axios.js";



export const fetchReg = createAsyncThunk('reg/fetchReg', async (params) => {
    const { data } = await axios.post('/auth/register', params);
    return data;  
})

const initialState = {
    data : null,
    status: 'loading', 
};



const regSlice = createSlice({
    name : 'reg',
    initialState,
    extraReducers : {

       

        [fetchReg.pending]: (state) => {
         state.data = null;
         state.status = 'loading';
         },

         [fetchReg.fulfilled]: (state, action) => {
             state.data = action.payload;
             state.status = 'loaded';
         },


         [fetchReg.rejected]: (state) => {
             state.data = null;
             state.status = 'error';
         }
    },
});

export const selectIsReg = state => Boolean(state.reg.data);


export const regReducer = regSlice.reducer;
