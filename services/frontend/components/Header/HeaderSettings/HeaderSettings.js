import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuthThunk } from "../../../store/slices/AuthSlice";
import BurgerLocaleMenuContainer from "../HeaderService/BurgerLocaleMenu/BurgerLocaleMenuContainer";
import BurgerUserMenuContainer from "../HeaderService/BurgerUserMenu/BurgerUserMenuContainer";
import FavoritesWarningContainer from "./FavoritesWarning/FavoritesWarningContainer";
import Locales from "./Locales/Locales";
import SupportNav from "./SupportNav/SupportNav";

const HeaderSettings = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setAuthThunk())
    },[dispatch])

    return (
        <>
            <div className="header__settings">
                <div className="container">
                    <SupportNav />
                    <Locales/>
                </div>
            </div>
            <BurgerLocaleMenuContainer />
            <BurgerUserMenuContainer />
            <FavoritesWarningContainer />
        </>
    );
}

export default HeaderSettings;