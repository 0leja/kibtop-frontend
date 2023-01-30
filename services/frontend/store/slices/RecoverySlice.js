import { createSlice } from "@reduxjs/toolkit"
import { RecoveryApi } from "../../services/RecoveryApi"
import { clearUserData, getUserData } from "../../services/tools/crypto"
import { loginThunk } from "./AuthSlice"

const initialState = {
    isSended: false,
    isError: false,
    isSuccess: false,
    isLoading: false,
    isUserFail: false
}

const RecoverySlice = createSlice({
    name: 'recovery',
    initialState,
    reducers: {
        setRecoverySend(state, {payload}) {
            state.isSended = payload
        },

        setRecoveryError(state, {payload}) {
            state.isError = payload
        },

        setRecoverySuccess(state, {payload}) {
            state.isSuccess = payload
        },

        setRecoveryLoading(state, {payload}) {
            state.isLoading = payload
        },

        setRecoveryisUserFail(state, {payload}) {
            state.isUserFail = payload
        }
    
    }
})

export const { setRecoverySend, setRecoveryError, setRecoverySuccess, setRecoveryLoading, setRecoveryisUserFail } = RecoverySlice.actions

export const sendRecoveryLinkThunk = email => async dispatch => {
    dispatch(setRecoveryLoading(true))
    RecoveryApi.sendRecoveryLink(email)
        .then(() => {
            dispatch(setRecoveryLoading(false))
            dispatch(setRecoveryisUserFail(false))
            dispatch(setRecoverySend(true))
        }).catch(err => {
            dispatch(setRecoveryLoading(false))
            dispatch(setRecoveryisUserFail(true))
        })
}

export const confirmRecoveryThunk = ( {new_password, re_new_password, uid, token} ) => async dispatch => {
    dispatch(setRecoveryLoading(true))
    await RecoveryApi.confirmReset(new_password, re_new_password, uid, token)
        .then(data => {
            dispatch(setRecoverySuccess(true))
            dispatch(setRecoveryLoading(false))
            dispatch(setRecoveryError(false))
        }).catch(err => {
            dispatch(setRecoveryLoading(false))
            dispatch(setRecoveryError(true))
        })
}

export const activateEmailThunk = ({uid, token}) => async dispatch => {
    await RecoveryApi.confirmEmail(uid, token)
        .then(() => {
            const {email, password} = getUserData()
            clearUserData()
            dispatch(loginThunk(email, password))
        }).catch(err => null)
}


export const RecoveryReducer = RecoverySlice.reducer