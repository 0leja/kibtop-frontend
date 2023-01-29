import { createSlice } from "@reduxjs/toolkit";
import { ProfileApi } from "../../services/ProfileApi";
import { setAuth } from "./AuthSlice";

const initialState = {
    locale: {
        isCurrencyOpen: false,
        isLanguageOpen: false
    },
    email: null,
    name: null,
    city: null,
    avatar: null,
    phone: null,

    resendEmail: null,

    isSuccess: false,
    isLoading: false,

    isActivated: false,

    adverts: [],

    isDeleting: false,
    isDeletingLoading: false
}

const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfileCurrencyOpen(state, {payload}) {
            state.locale.isCurrencyOpen = payload
        },

        setProfileLanguageOpen(state, {payload}) {
            state.locale.isLanguageOpen = payload
        },

        setProfileData(state, {payload}) {
            const {email, name, city, avatar, phone} = payload

            state.email = email,
            state.name = name,
            state.city = city,
            state.avatar = avatar
            state.phone = phone
        },

        setProfileEditingLoading(state, {payload}) {
            state.isLoading = payload
        },

        setProfileEditingSuccess(state, {payload}) {
            state.isSuccess = payload
        },

        setProfileEditingActivated(state, {payload}) {
            state.isActivated = payload
        },


        setUserAdverts(state, {payload}) {
            state.adverts = [...payload]
        },



        setDeletingOpen(state, {payload}) {
            state.isDeleting = payload
        },

        setDeletingLoading(state, {payload}) {
            state.isDeletingLoading = payload
        },

        setProfileChangeResendEmail(state, {payload}) {
            state.resendEmail = payload
        }
    }
})

export const {setProfileCurrencyOpen, setProfileLanguageOpen,
             setProfileData, setProfileEditingLoading, 
             setProfileEditingSuccess, setProfileEditingActivated, 
             setUserAdverts, setDeletingOpen, setDeletingLoading,
             setProfileChangeResendEmail} = ProfileSlice.actions

export const setProfileDataThunk = () => async dispatch => {
    const user = await ProfileApi.getUserData().catch(err => null)
    if(!user) return
    dispatch(setProfileData({...user}))
}

export const editUserDataThunk = ({email, name, city, avatar}) => async dispatch => {
    dispatch(setProfileEditingLoading(true))
    await ProfileApi.editUserData(email, name, city, avatar)
        .then(() => {
            dispatch(setProfileChangeResendEmail(email))
            dispatch(setProfileEditingSuccess(true))
            dispatch(setProfileEditingLoading(false))

            const checkActivated = setInterval(async () => {
                await ProfileApi.getUserData().then((res) => {
                    
                    clearInterval(checkActivated)
                    dispatch(setProfileEditingActivated(true))
                }).catch((err) => {
                    
                })
            }, 3000)

        }).catch(err => {
            dispatch(setProfileEditingLoading(false))
        })

    
}

export const getUserAdvertsThunk = (userId, lang) => async dispatch => {
    
    const adverts = await ProfileApi.getUserAdverts(userId, lang)
    if(!!adverts) dispatch(setUserAdverts(adverts))
    

}

export const deleteUserAccountThunk = password => async dispatch => {
    dispatch(setDeletingLoading(true))
    await ProfileApi.deletUserAccount(password)
        .then(() => {
            dispatch(setAuth({userId: null, isAuthed: false}))
            dispatch(setDeletingLoading(false))
        }).catch(err => {
            dispatch(setDeletingLoading(false))
        })
}

export const ProfileReducer = ProfileSlice.reducer