import { createSlice } from "@reduxjs/toolkit";
import { AdvertApi } from "../../services/AdvertApi";

const initialState = {
    title: null,
    description: null,
    categoryName: null,
    subCategoryName: null,
    condition: null,
    brand: null,
    mileage: null,
    year: null,
    rooms: null,
    employment: null,
    workType: null,
    date: null,
    address: null,
    city: null,
    geocode: null,
    img: null,
    uploads: [],
    userId: null,
    advertId: null,
    cost: null,
    square: null,
    isMonth: null,

    seller: {
        name: null,
        avatar: null,
        phone: null
    },

    similarAdverts: []
}

const AdvertSlice = createSlice({
    name: 'advert',
    initialState, 
    reducers: {
        setAdvertData(state, {payload}) {
            if(!payload) return
            const {
                title,
                description,
                categoryName,
                subCategoryName,
                condition,
                brand,
                mileage,
                year,
                rooms,
                employment,
                workType,
                date,
                address,
                city,
                geocode,
                img,
                uploads,
                userId,
                advertId,
                cost,
                square,
                isMonth
            } = payload


            state.title = title || null
            state.description = description || null
            state.categoryName = categoryName || null
            state.subCategoryName = subCategoryName || null
            state.condition = condition || null
            state.brand = brand || null
            state.mileage = mileage || null
            state.year = year || null
            state.rooms = rooms || null
            state.employment = employment || null
            state.workType = workType || null
            state.date = date || null
            state.address = address || null
            state.city = city || null
            state.geocode = geocode || null
            state.img = img || null
            state.uploads = uploads || []
            state.userId = userId || null
            state.advertId = advertId || null
            state.cost = cost || null
            state.square = square || null
            state.isMonth = isMonth || null

        },

        setAdvertSellerData(state, {payload}) {
            
            state.seller.name = payload.name
            state.seller.avatar = payload.avatar
            state.seller.phone = payload.phone
        },

        setSimilarAdverts(state, {payload}) {
            state.similarAdverts = payload
        }
    }
})

export const {setAdvertData, setAdvertSellerData, setSimilarAdverts} = AdvertSlice.actions

export const setAdvertDataThunk = (advertId, category, lang) => async dispatch => {
    const advert = await AdvertApi.getAdvertDatails(advertId, category, lang)
    if(!!advert) dispatch(setAdvertData(advert))
}

export const setAdvertSellerThunk = userId => async dispatch => {
    const seller = await AdvertApi.getAdvertSeller(userId)
    if(!!seller) dispatch(setAdvertSellerData(seller))
}

export const getSimilarAdvertsThunk = (category, lang) => async dispatch => {
    const adverts = await AdvertApi.getSimilarAdverts(category, lang)
    if(!!(adverts?.length)) dispatch(setSimilarAdverts(adverts))

}

export const AdvertReducer = AdvertSlice.reducer