import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/counterSlice'
import productsReducer from '../slices/productsSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        products: productsReducer
    }
})