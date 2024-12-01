import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Sneakers } from "../Interfaces/Sneakers";
import { FormData } from "../Filter/Filter";

interface SneakersState {
    sneakers: Sneakers[];
    status: 'loading' | 'succeeded' | 'failed' | null;
    error: string | null;
}

const initialState: SneakersState = {
    sneakers: JSON.parse(localStorage.getItem("sneakers") || "[]"),
    status: null,
    error: null,
};

const project_url: string = "https://4935cb3cc240e9df.mokky.dev/sneakers";

export const fetchSneakers = createAsyncThunk<Sneakers[], FormData>(
    'sneakers/fetchSneakers',
    async (parameters, { rejectWithValue }) => {

        try {
            const sizesQuery = parameters.sizes.map((value) => `sizes[]=${value}`).join("&");

            const { data } = await axios.get<Sneakers[]>(
                `${project_url}/?price[from]=${parameters.priceFrom}&price[to]=${parameters.priceTo}
            ${parameters.gender ?
                    `&gender=${parameters.gender}`
                    :
                    ""
                }
                ${parameters.sizes.length ?
                    `&${sizesQuery}`
                    :
                    ""
                }`);

            localStorage.setItem("sneakers", JSON.stringify(data));

            return data;

        } catch {
            throw rejectWithValue("Не удалось загрузить товар!");
        }
    }
);

const sneakersSlice = createSlice({
    name: 'sneakers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSneakers.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchSneakers.fulfilled, (state, action: PayloadAction<Sneakers[]>) => {
                state.status = 'succeeded';
                state.sneakers = action.payload;
            })
            .addCase(fetchSneakers.rejected, (state, action: PayloadAction<unknown>) => {
                if (typeof action.payload === 'string') {
                    state.error = action.payload;
                } else {
                    state.status = 'failed';
                }
            });
    },
});

export const selectAllSneakers = (state: { sneakers: SneakersState }) => state.sneakers.sneakers;
export const selectSneakersStatus = (state: { sneakers: SneakersState }) => state.sneakers.status;
export const selectSneakersError = (state: { sneakers: SneakersState }) => state.sneakers.error;

export default sneakersSlice.reducer;