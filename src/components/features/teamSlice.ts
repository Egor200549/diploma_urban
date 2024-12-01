import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface TeamState {
    team: Person[],
    status: 'loading' | 'succeeded' | 'failed' | null,
    error: string | null
}

export interface Person {
    imgUrl: string,
    name: string,
    role: string
}

export const fetchTeam = createAsyncThunk<Person[]>(
    "team/fetchTeam",
    async (_, { rejectWithValue }) => {
        try {

            const { data } = await axios.get("https://4935cb3cc240e9df.mokky.dev/team");
            return data;

        } catch {
            rejectWithValue("Не удалось загрузить сотрудников!");
        }
    }
);

const initialState: TeamState = {
    team: [],
    status: null,
    error: null
};

export const teamSlice = createSlice({
    name: "team",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTeam.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchTeam.fulfilled, (state, action: PayloadAction<Person[]>) => {
                state.status = 'succeeded';
                state.team = action.payload;
            })
            .addCase(fetchTeam.rejected, (state, action: PayloadAction<unknown>) => {
                if (typeof action.payload === 'string') {
                    state.error = action.payload;
                } else {
                    state.status = 'failed';
                }
            });
    },
});

export const selectTeam = (state: { team: TeamState }) => state.team.team;
export const selectTeamStatus = (state: { team: TeamState }) => state.team.status;
export const selectTeamError = (state: { team: TeamState }) => state.team.error;

export default teamSlice.reducer;