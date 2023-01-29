import { createSlice } from "@reduxjs/toolkit";
import { FavoritesApi } from "../../services/FavoritesApi";

const initialState = {
    isWarnOpen: false,
    isLoading: false,

    favorites: [],
    favoriteAdverts: []
}

const FavoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        setFavoritesWarnOpen(state, {payload}) {
            state.isWarnOpen = payload
        },

        setFavoritesLoading(state, {payload}) {
            state.isLoading = payload
        },

        setUserFavorites(state, {payload}) {
            
            state.favorites = payload
        },

        setUserFavoriteAdverts(state, {payload}) {
            if(!(payload?.length)) {
                state.favoriteAdverts = null
                return
            }
            state.favoriteAdverts = payload
        }
    }
})

export const {setFavoritesWarnOpen, setFavoritesLoading, setUserFavorites, setUserFavoriteAdverts} = FavoritesSlice.actions

export const likeAdvertThunk = (id, category, userId) => async dispatch => {
    dispatch(setFavoritesLoading(true))
    await FavoritesApi.addFavoriteAdvert(id, category, userId)
        .then(res => {
            dispatch(setUserFavoritesThunk(userId))
            dispatch(setFavoritesLoading(false))

        }).catch(err => {
            dispatch(setFavoritesLoading(false))
        })
}

export const dislikeAdvertThunk = (favoriteId, category, userId) => async dispatch => {
    
    dispatch(setFavoritesLoading(true))
    await FavoritesApi.deleteFavoriteAdvert(favoriteId, category)
        .then(res => {
            dispatch(setUserFavoritesThunk(userId))
            dispatch(setFavoritesLoading(false))
        }).catch(err => {
            dispatch(setFavoritesLoading(false))
        })
}

export const setUserFavoritesThunk = userId => async dispatch => {
    const favorites = await FavoritesApi.getUserFavorites(userId).catch(() => null)
    if(!!favorites) dispatch(setUserFavorites(favorites))
}

export const setUserFavoriteAdvertsThunk = (userId, lang) => async dispatch => {
    const favoriteAdverts = await FavoritesApi.getUserFavoritesAdverts(userId, lang).catch(err => null)

    if(!!(favoriteAdverts?.length)) dispatch(setUserFavoriteAdverts(favoriteAdverts))
}

export const FavoritesReducer = FavoritesSlice.reducer