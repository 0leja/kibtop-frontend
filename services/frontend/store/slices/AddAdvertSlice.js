import { createSlice } from "@reduxjs/toolkit"
import { AddAdvertApi } from "../../services/AddAdvertApi"
import { ProfileApi } from "../../services/ProfileApi"
import { setProfileDataThunk } from "./ProfileSlice"

const initialState = {
    formStep: 1,
    category: null,
    subCategoryText: null,

    isLoading: false,
    
    newAdvert: {
        advertId: null,
        advertCategory: null
    },

    isPhoneOpen: false,
    isPhoneError: false,
    isPhoneSuccess: false,
    isPhoneLoading: false,
}

const AddAdvertSlice = createSlice({
    name: 'addAdvert',
    initialState,
    reducers: {
        setAddAdvertFormStep(state, {payload}) {
            state.formStep = payload
        },
        setAddAdvertCategory(state, {payload}) {
            state.category = payload
        },
        setAddAdvertSubCategoryText(state, {payload}) {
            state.subCategoryText = payload
        },

        setAddAdvertPhoneOpen(state, {payload}) {
            state.isPhoneOpen = payload
        },
        setAddAdvertPhoneError(state, {payload}) {
            state.isPhoneError = payload
        },
        setAddAdvertPhoneSuccess(state, {payload}) {
            state.isPhoneSuccess = payload
        },
        setAddAdvertPhoneLoading(state, {payload}) {
            state.isPhoneLoading = payload
        },

        setAddAdvertLoading(state, {payload}) {
            state.isLoading = payload
        },
        setNewAdvertData(state, {payload}) {
            state.newAdvert.advertId = payload.id
            state.newAdvert.advertCategory = payload.category
        }
    }
})

export const {  setAddAdvertFormStep, setAddAdvertCategory, 
                setAddAdvertPhoneOpen, setAddAdvertPhoneError, 
                setAddAdvertPhoneSuccess, setAddAdvertPhoneLoading,
                setAddAdvertSubCategoryText, setAddAdvertLoading, setNewAdvertData    } = AddAdvertSlice.actions

export const addUserPhoneThunk = phone => async dispatch => {
    dispatch(setAddAdvertPhoneLoading(true))
    await ProfileApi.addUserPhone(phone)
        .then(() => {
            dispatch(setAddAdvertPhoneSuccess(true))
            dispatch(setAddAdvertPhoneLoading(false))
            dispatch(setProfileDataThunk())
        }).catch(() => {
            dispatch(setAddAdvertPhoneError(true))
            dispatch(setAddAdvertPhoneLoading(false))
        })
}

export const addAdvertThunk = (data, category, lang) => async dispatch => {
    dispatch(setAddAdvertLoading(true))
    await AddAdvertApi.createAdvert(data, category, lang)
        .then(advert => {
            dispatch(setAddAdvertLoading(false))
            dispatch(setNewAdvertData(advert))
        }).catch(err => dispatch(setAddAdvertLoading(false)))
}


export const AddAdvertReducer = AddAdvertSlice.reducer