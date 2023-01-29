import { useDispatch, useSelector } from "react-redux";
import { setFavoritesWarnOpen } from "../../../../store/slices/FavoritesSlice";
import FavoritesWarning from "./FavoritesWarning";

const FavoritesWarningContainer = () => {
    const dispatch = useDispatch()
    const {isWarnOpen} = useSelector(state => state.favorites)

    const closeFavoritesWarning = () => dispatch(setFavoritesWarnOpen(false))
    
    return <FavoritesWarning {...{isWarnOpen, closeFavoritesWarning}} />;
}

export default FavoritesWarningContainer;