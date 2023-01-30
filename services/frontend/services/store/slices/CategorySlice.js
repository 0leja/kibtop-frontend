import { createSlice } from "@reduxjs/toolkit";
import { CategoryApi } from "../../services/CategoryApi";

const initialState = {
    adverts: [],
    pages: []
}

const CategorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategoryAdverts(state, {payload}) {
            state.adverts = [...payload]
        },
        setCategoryPages(state, {payload}) {
            state.pages = [...payload]
        }
    }
})

export const {setCategoryAdverts, setCategoryPages} = CategorySlice.actions

export const getCategoryAdvertsThunk = (category, lang, page=0) => async dispatch => {
    const {adverts, pages} = await CategoryApi.getCategoryAdverts(category, lang, page)
    if(pages.length > 0) dispatch(setCategoryPages(pages))
    if(!!adverts) dispatch(setCategoryAdverts(adverts))
}

export const CategoryReducer = CategorySlice.reducer