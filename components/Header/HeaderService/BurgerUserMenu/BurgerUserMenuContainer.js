import { useDispatch, useSelector } from "react-redux";
import { setUserMenuOpen } from "../../../../store/slices/MobileSlice";
import BurgerUserMenu from "./BurgerUserMenu";

const BurgerUserMenuContainer = () => {
    const isOpen = useSelector(state => state.mobile.isUserOpen)
    const dispatch = useDispatch()

    const closeBurgerUserMenu = () => {
        dispatch(setUserMenuOpen({bool: false}))
    }

    return <BurgerUserMenu {...{isOpen, closeBurgerUserMenu, delay: 400}} />;
}

export default BurgerUserMenuContainer;