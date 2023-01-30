import { useDispatch, useSelector } from "react-redux";
import { dislikeAdvertThunk, likeAdvertThunk, setFavoritesWarnOpen } from "../../../store/slices/FavoritesSlice";
import LikeButton from "./LikeButton";

const LikeButtonContainer = ({className, id, category}) => {
    const {isAuthed, userId} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const openFavoritesWarning = () => dispatch(setFavoritesWarnOpen(true))

    const {favorites, isLoading} = useSelector(state => state.favorites)


    const userFavorite = favorites.find(favorite => favorite.advertId === id && favorite.category === category) || null

    const onLikeClick = () => dispatch(likeAdvertThunk(id, category, userId))

    const onDislikeClick = () => 
        !!userFavorite ? dispatch(dislikeAdvertThunk(userFavorite.favouriteId, userFavorite.category, userFavorite.userId)) : null

    return <LikeButton {...{isAuthed, openFavoritesWarning, isLoading, className, userFavorite, onLikeClick, onDislikeClick}} />;
}

export default LikeButtonContainer;