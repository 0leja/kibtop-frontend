import { createSlice } from "@reduxjs/toolkit";
import { LocationApi } from "../../services/LocationApi";

const initialState = {
    isOpen: false,
    locationFieldValue: '',
    locationId: null,
    localStorage: null,
    cities: [],
    location: null
}

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setLocationOpen(state, {payload}) {
            state.isOpen = !!payload.bool
        },

        setCities(state, {payload}) {
            const {cities} = payload
            if(!!cities) state.cities = [...payload.cities]
        },

        changeLocationFieldValue(state, {payload}) {
            state.locationFieldValue = payload.val

            state.locationId = null
            state.location = null
        },

        changeLocationState(state, {payload}) {
            state.locationId = payload.cityId
            state.location = payload.city

            state.locationFieldValue = payload.city
        }
    }
})

export const { setLocationOpen, setCities, changeLocationFieldValue, changeLocationState } = locationSlice.actions

export const locationReducer = locationSlice.reducer

export const getCitiesThunk = lang => async dispatch => {
    const cities = await LocationApi.getCities(lang)
    dispatch(setCities({cities}))
}