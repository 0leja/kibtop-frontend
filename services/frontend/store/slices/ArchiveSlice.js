import { createSlice } from "@reduxjs/toolkit";
import { ArchiveApi } from "../../services/ArchiveApi";

const initialState = {
    archive: []
}

const ArchiveSlice = createSlice({
    name: 'archive',
    initialState,
    reducers: {
        setUserArchive(state, {payload}) {
            state.archive = [...payload]
        },

        deleteUserArchiveAdvert(state, {payload}) {
            state.archive = state.archive.filter((advert, index) => index !== payload)
        }
    }
})

export const {setUserArchive, deleteUserArchiveAdvert} = ArchiveSlice.actions

export const setUserArchiveThunk = (userId, lang) => async dispatch => {
    const archive = await ArchiveApi.getUserArchive(userId, lang)
    if(!!(archive?.length)) dispatch(setUserArchive(archive))
}

export const deleteUserArchiveAdvertThunk = ({id, category, index}) => async dispatch => {
    await ArchiveApi.deleteUserArchiveAdvert(id, category)
        .then(() => {
            dispatch(deleteUserArchiveAdvert(index))
        }).catch(err => null)
}

export const ArchiveReducer = ArchiveSlice.reducer