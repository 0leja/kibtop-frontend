import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserFavoriteAdvertsThunk } from "../../../store/slices/FavoritesSlice";
import Favorites from "./Favorites";

const FavoritesContainer = ({adverts}) => {
    const {locale} = useRouter()
    const {favoriteAdverts, favorites} = useSelector(state => state.favorites)
    const {userId, isAuthed} = useSelector(state => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        if(isAuthed) dispatch(setUserFavoriteAdvertsThunk(userId, locale))
    }, [userId, isAuthed])

    const data = !!(favoriteAdverts.length) ? favoriteAdverts : adverts
    return <Favorites adverts={data} />;
}

export default FavoritesContainer;