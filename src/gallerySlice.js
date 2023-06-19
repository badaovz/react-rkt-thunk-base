import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { url_images as url } from "./utils/contants"

export const getImages = createAsyncThunk('images/getImages', async () => {
    const res = await fetch(url);
    const images = await res.json();
    return images;
})

const gallerySlice = createSlice({
    name: 'gallery',
    initialState: {
        images: [],
        isLoading: flase
    },
    extraReducers: (builder) => {
        builder.addCase(getImages.pending, (state) => {
            state.isLoading = true;
        }).addCase(getImages.fulfilled, (state, action) => {
            state.images = action.payload;
            state.isLoading = false;
        }).addCase(getImages.rejected, (state) => {
            state.isLoading = false;
        })
    }
})

export default gallerySlice.reducer;