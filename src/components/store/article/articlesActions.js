import { createAsyncThunk } from "@reduxjs/toolkit";
const apiBase = 'https://blog-platform.kata.academy/api';
export const fetchArticles = createAsyncThunk(
    'articles/fetchArticles',
    async (_, thunkApi) => {
        try {
            const response = await fetch(`${apiBase}/articles`);

            if (!response.ok) {
                throw new Error('Failet to fetch articles');
            }

            const result = await response.json();
            console.log(result);
            return result;
        }
        catch(error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)