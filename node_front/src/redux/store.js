import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth';
import { regReducer } from './slices/reg';

const store = configureStore({
    reducer: {
        auth : authReducer,
        reg : regReducer
    }
})

export default store;