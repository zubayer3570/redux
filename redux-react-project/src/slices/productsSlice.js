import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts = createAsyncThunk('productSlice/fetchProducts', async () => {
    const res = await axios.get('https://dummyjson.com/products')
    return res.data
})
export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        isLoading: false,
        products: [],
        error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.products = action.payload
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
})

export default productsSlice.reducer
