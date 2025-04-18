import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTags = createAsyncThunk(
    'tags/getTags',
    async (_ , { rejectWithValue }) => {
        try {
            const response = await fetch('https://blog-platform.kata.academy/api/tags');
            const data = await response.json();
            if (!response.ok) {
                return rejectWithValue(data.error)
            }
            return data.tags;
        }
        catch (error) {
            return rejectWithValue(error.message)
        }
    }
)