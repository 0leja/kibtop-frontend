import { createSlice } from "@reduxjs/toolkit";
import { AuthApi } from "../../services/AuthApi";
import { serializeLoginErrors, serializeRegistrationErrors } from "../../services/tools/ApiFormsSerializers";
import { setHashedUserData } from "../../services/tools/crypto";
import { setLoginError, setLoginLoading } from "./LoginSlice";
import { setDeskStep, setMobileStep, setRegistrationConfirm, setRegistrationError, setRegistrationLoading, setRegistrationStatus, setResendEmail } from "./RegistrationSlice";


const initialState = {
    isAuthed: false,
    userId: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth(state, action) {
            const {userId, isAuthed} = action.payload;


            state.userId = userId;
            state.isAuthed = isAuthed;
        }
    }
});

export const authReducer = authSlice.reducer

export const {setAuth} = authSlice.actions

export const setAuthThunk = () => async dispatch => {
    const user = await AuthApi.auth()
    if(!!user) dispatch(setAuth({...user, isAuthed: true}))
}

export const registrationThunk = (email, password1, password2, name, city, file) => async dispatch => {
    dispatch(setRegistrationLoading({bool: true})) // Loader switch on
    await AuthApi.registration(email, password1, password2, name, city, file)
        .then(data => {
            dispatch(setResendEmail({email: data.email})) // Set email fo resending account activation letter
            dispatch(setRegistrationStatus({bool: true})) // Switch to wainting for activation page

            dispatch(setDeskStep({step: 1})) // Reseting registration steps to start
            dispatch(setMobileStep({step: 1})) // Reseting registration steps to start

            dispatch(setRegistrationLoading({bool: false})) // Loader switch off

            setHashedUserData({email, password: password1})
            
            const checkAuthId = setInterval(async () => { // Start checking account activation every 4s
                if(!localStorage.getItem('activation')) {
                    clearInterval(checkAuthId)

                    dispatch(setRegistrationConfirm({bool: true})) // Switch to welcome page
                    dispatch(setAuthThunk()) // Send auth
                    dispatch(setResendEmail({email: null})) // Default resendEmail

                    return
                }
                await AuthApi.login(email, password1)
                    .then(data => { // If successfuly activated
                        clearInterval(checkAuthId) // Stop checking

                        dispatch(setRegistrationConfirm({bool: true})) // Switch to welcome page
                        dispatch(setAuthThunk()) // Send auth
                        dispatch(setResendEmail({email: null})) // Default resendEmail
                    }).catch(err => { // Else pass...
                    })
            }, 4000)

        }).catch(err => {
            const error = err.response?.data

            if(err?.response?.status !== 400) {
                dispatch(setRegistrationError({name: 'server', message: 'error', deskStep: 2, mobileStep: 5}))
                dispatch(setRegistrationLoading({bool: false}))
                return
            }

            const {name, message, deskStep, mobileStep} = serializeRegistrationErrors(error)
            // console.log(name, ':', message)

            dispatch(setRegistrationError({name, message, deskStep, mobileStep}))
            dispatch(setRegistrationLoading({bool: false}))
        })
}

export const loginThunk = (email, password) => async dispatch => {
    dispatch(setLoginLoading({bool: true}))

    await AuthApi.login(email, password)
        .then(data => {
            dispatch(setAuthThunk())
            dispatch(setLoginLoading({bool: false}))
        }).catch(err => {
            
            dispatch(setLoginError({bool: true}))
            dispatch(setLoginLoading({bool: false}))
        })
}

export const googleLoginThunk = auth_token => async dispatch => {
    await AuthApi.googleLogin(auth_token)
        .then(data => {
            dispatch(setAuthThunk())
        }).catch(err => null)
}