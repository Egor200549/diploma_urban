import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./components/features/dataSlice";
import sneakersSlice from "./components/features/sneakersSlice"
import teamSlice from "./components/features/teamSlice";
import basketSlice from "./components/features/basketSlice";

const store = configureStore({
    reducer: {
        data: dataSlice,
        sneakers: sneakersSlice,
        team: teamSlice,
        basket: basketSlice
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
