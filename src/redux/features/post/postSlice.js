import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../utils/axios'

const initialState = {
    posts: [],
    popularPosts: [],
    loading: false,
}

export const createPost = createAsyncThunk(
    'post/createPost',
    async (params) => {
        try {
            const { data } = await axios.post('/posts', params)
            return data
        } catch (error) {
            console.log(error)
        }
    },
)
export const getAllPosts = createAsyncThunk('post/getAllPosts', async () => {
    try {
        const { data } = await axios.get('/posts')
        return data
    } catch (error) {
        console.log(error)
    }
})

// export const getLastPost = createAsyncThunk('post/getLastPost', async () => {
//     try {
//         const { data } = await axios.get('/posts/last');
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// });

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Create post
            .addCase(createPost.pending, (state) => {
                state.loading = true;
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.loading = false;
                state.posts.push(action.payload);
            })
            .addCase(createPost.rejected, (state) => {
                state.loading = false;
            })
            // // Get All Posts
            // .addCase(getAllPosts.pending, (state) => {
            //     state.loading = true;
            // })
            // .addCase(getAllPosts.fulfilled, (state, action) => {
            //     state.loading = false
            //     state.posts = action.payload.posts
            //     state.popularPosts = action.payload.popularPosts
            // })
            // .addCase(getAllPosts.rejected, (state) => {
            //     state.loading = false;
            // })
            // Get Last
            // .addCase(getLastPost.pending, (state) => {
            //     state.loading = true;
            // })
            // .addCase(getLastPost.fulfilled, (state, action) => {
            //     state.loading = false;
            //     state.lastPost = action.payload;
            // })
            // .addCase(getLastPost.rejected, (state) => {
            //     state.loading = false;
            // })
    },
})

export default postSlice.reducer