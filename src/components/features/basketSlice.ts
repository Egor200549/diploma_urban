import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Sneakers } from "../Interfaces/Sneakers";

export const fetchBasket = createAsyncThunk<Sneakers[]>(
    "basket/fetchBasket",
    async (_, { rejectWithValue }): Promise<Sneakers[]> => {
        try {

            const { data } = await axios.get<Sneakers[]>(`https://4935cb3cc240e9df.mokky.dev/basket`);
            return data;

        } catch {
            rejectWithValue("Не удалось загрузить корзину!");
            return [];
        }
    }
);

export const postBasket = createAsyncThunk<Sneakers, Sneakers>(
    "basket/postBasket",
    async (item) => {
        try {

            const { data } = await axios.post(`https://4935cb3cc240e9df.mokky.dev/basket`, item);
            return data;

        } catch {
            throw new Error("Не удалось добавить товар в корзину!");
        }
    }
);

export const delBasket = createAsyncThunk<number, number>(
    "basket/deleteBasket",
    async (id) => {
        try {

            await axios.delete(`https://4935cb3cc240e9df.mokky.dev/basket/${id}`);

            return id;
        } catch {
            throw new Error("Не удалось удалить товар из корзины!");
        }
    }
);

export const resetBasket = createAsyncThunk<boolean>(
    "basket/resetBasket",
    async () => {
        try {

            const response = await fetch(`https://4935cb3cc240e9df.mokky.dev/basket`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify([])
            });

            if (response.ok) {
                console.log('Корзина очищена');
            } else {
                console.log('Возникла ошибка');
            }
            return true;
        } catch {
            throw new Error("Не удалось удалить товар из корзины!");
        }
    }
);

interface State {
    data: Sneakers[],
    total: number
}

const initialState: State = {
    data: [],
    total: 0
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBasket.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(postBasket.fulfilled, (state, action) => {
                state.data.push(action.payload);
            })
            .addCase(delBasket.fulfilled, (state, action) => {
                state.data = state.data.filter((el) => el.id !== action.payload);
            });
    }
});

export default basketSlice.reducer;