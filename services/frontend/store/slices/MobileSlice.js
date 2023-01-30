import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isUserOpen: false
}

const MobileSlice = createSlice({
    name: 'mobile', 
    initialState,
    reducers: {
        setUserMenuOpen(state, {payload}) {
            state.isUserOpen = !!payload.bool
        }
    }
})

export const { setUserMenuOpen } = MobileSlice.actions

export const MobileReducer = MobileSlice.reducer