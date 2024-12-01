import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    limit: 6,
};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        getLimit: (state) => {
            state.limit = 6;
        },
        changeLimit: (state) => {
            state.limit += 6;
        },
    },
});

export const { getLimit, changeLimit } = dataSlice.actions;
export default dataSlice.reducer;