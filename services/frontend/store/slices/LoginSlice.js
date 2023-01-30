import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    error: false
}

const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLoginError(state, {payload}) {
            state.error = payload.bool
        },

        setLoginLoading(state, {payload}) {
            state.isLoading = payload.bool
        }
    }
})

export const { setLoginError, setLoginLoading } = LoginSlice.actions


export const LoginReducer = LoginSlice.reducer