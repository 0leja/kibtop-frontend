import { useDispatch, useSelector } from "react-redux";
import { setLocaleOpen } from "../../../../store/slices/LocaleSlice";
import BurgerLocaleMenu from "./BurgerLocaleMenu";

const BurgerLocaleMenuContainer = () => {
    const {isOpen, menu} = useSelector(state => state.locale)
    const dispatch = useDispatch()

    const closeLocaleBurgerMenu = () => {
        dispatch(setLocaleOpen({bool: false}))
    }

    return <BurgerLocaleMenu {...{isOpen, menu, closeLocaleBurgerMenu}} />;
}

export default BurgerLocaleMenuContainer;