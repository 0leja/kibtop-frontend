import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    menu: 'currency'
}

const LocaleSlice = createSlice({
    name: 'locale',
    initialState,
    reducers: {
        setLocaleOpen(state, {payload}) {
            state.isOpen = !!payload.bool
            state.menu = 'currency'
        },
        setLocaleMenuType(state, {payload}) {
            state.menu = payload.menu
        }
    }
})

export const LocaleReducer = LocaleSlice.reducer

export const {setLocaleOpen, setLocaleMenuType} = LocaleSlice.actions