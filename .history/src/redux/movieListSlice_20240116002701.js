import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseAPI from "../Apis/movieApi";

export const getMovieList = createAsyncThunk(
    'admin/movies',
    async (params, { dispatch, getState }) => {
        try {
            const response = await baseAPI.get("/QuanLyPhim/LayDanhSachPhimPhanTrang", {
                params: {
                    soTrang: params.page,
                    maNhom: "GP06",
                    soPhanTuTrenTrang: "3"
                }
            })
            return response.data.content;
        } catch (error) {
            throw error.response.data.content;
        }
    }
)
const movieListSlice = createSlice({
    name: 'movieList',
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },

    extraReducers: (builder) => {
        builder.addCase(getMovieList.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getMovieList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(getMovieList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message
        })
    }
})

export default movieListSlice.reducer;