import { createSlice } from "@reduxjs/toolkit";
import { CategoryApi } from "../../services/CategoryApi";

const initialState = {
    adverts: []
}

const CategorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategoryAdverts(state, {payload}) {
            state.adverts = [...payload]
        }
    }
})

export const {setCategoryAdverts} = CategorySlice.actions

export const getCategoryAdvertsThunk = (category, lang, page=0) => async dispatch => {
    const adverts = await CategoryApi.getCategoryAdverts(category, lang, page)

    if(!!adverts) dispatch(setCategoryAdverts(adverts))
}

export const CategoryReducer = CategorySlice.reducer