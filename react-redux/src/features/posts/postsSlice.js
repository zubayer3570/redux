import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return res.data
})

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isLoading: false,
        error: null
    },
    reducers: {
        resetPosts: (state) => {
            state.posts = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false
            state.posts = action.payload
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.error = action.payload
        })
    }
})

export const {resetPosts} = postsSlice.actions
export default postsSlice.reducer