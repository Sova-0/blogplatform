import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchArticles } from "./articlesActions";
import { getTags } from "./getTagsAction";
import { act } from "react";

const initialState = {
    articles: [],
    loading: false,
    error: null,
    tags: [],
}

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {},
    extraReducers: (builer) => {
        builer
        .addCase(fetchArticles.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(fetchArticles.fulfilled, (state, action) => {
            state.loading = false;
            state.articles = action.payload.articles;
        })
        .addCase(fetchArticles.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })


        .addCase(getTags.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getTags.fulfilled, (state, action) => {
            state.loading = false;
            state.tags = action.payload;
        })
        .addCase(getTags.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default articlesSlice.reducer;