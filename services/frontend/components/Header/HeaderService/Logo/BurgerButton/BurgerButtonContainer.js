import { useDispatch } from "react-redux";
import { setUserMenuOpen } from "../../../../../store/slices/MobileSlice";
import BurgerButton from "./BurgerButton";

const BurgerButtonContainer = () => {
    const dispatch = useDispatch()
    const openBurgerUserMenu = () => dispatch(setUserMenuOpen({bool: true}))

    return <BurgerButton {...{openBurgerUserMenu}} />;
}

export default BurgerButtonContainer;