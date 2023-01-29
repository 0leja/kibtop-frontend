import { createSlice } from "@reduxjs/toolkit"
import { AuthApi } from "../../services/AuthApi"

const initialState = {
    deskStep: 1,
    mobileStep: 1,
    isRegistered: false,
    isConfirmed: false,
    isLoading: false,
    resend: {
        resendEmail: null,
        isResending: false,
        isDisabled: false
    },
    error: {
        mobileStep: null,
        deskStep: null,
        name: null,
        message: null
    }
}

const RegistrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        deskStepIncrement(state) {
            state.deskStep++
        },
        deskStepDecrement(state) {
            if(state.deskStep > 1) state.deskStep--
        },
        setDeskStep(state, {payload}) {
            state.deskStep = payload.step
        },


        mobileStepIncrement(state) {
            state.mobileStep++
        },
        mobileStepDecrement(state) {
            if(state.mobileStep > 1) state.mobileStep--
        },
        setMobileStep(state, {payload}) {
            state.mobileStep = payload.step
        },

        
        setRegistrationError(state, {payload}) {
            state.error.deskStep = payload.deskStep
            state.error.mobileStep = payload.mobileStep
            state.error.name = payload.name
            state.error.message = payload.message
        },


        setRegistrationStatus(state, {payload}) {
            state.isRegistered = payload.bool
        },
        setRegistrationConfirm(state, {payload}) {
            state.isConfirmed = payload.bool
        },


        setRegistrationLoading(state, {payload}) {
            state.isLoading = payload.bool
        },


        setResendEmail(state, {payload}) {
            state.resend.resendEmail = payload.email
        },
        setResendingLoad(state, {payload}) {
            state.resend.isResending = payload.bool
        },
        setResendingDisable(state, {payload}) {
            state.resend.isDisabled = payload.bool
        }

    }
})

export const resendEmailThunk = email => async dispatch => {
    dispatch(setResendingLoad({bool: true}))
    await AuthApi.resendEmail(email)
        .then(() => {
            dispatch(setResendingLoad({bool: false}))
            dispatch(setResendingDisable({bool: true}))

            setTimeout(() => {
                dispatch(setResendingDisable({bool: false}))
            }, 20000)
        })
        .catch((err) => {
            dispatch(setResendingLoad({bool: false}))
        })
}

export const {
        deskStepIncrement, 
        deskStepDecrement, 
        mobileStepIncrement, 
        mobileStepDecrement,
        setMobileStep,
        setDeskStep,
        setRegistrationError,
        setRegistrationStatus,
        setRegistrationConfirm,
        setRegistrationLoading,
        setResendEmail,
        setResendingLoad,
        setResendingDisable

    } = RegistrationSlice.actions

export const RegistrationRducer = RegistrationSlice.reducer