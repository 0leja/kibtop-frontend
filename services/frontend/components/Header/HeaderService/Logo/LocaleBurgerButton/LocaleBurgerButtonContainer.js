import { useDispatch, useSelector } from "react-redux";
import { setLocaleOpen } from "../../../../../store/slices/LocaleSlice";
import LocaleBurgerButton from "./LocaleBurgerButton";

const LocaleBurgerButtonContainer = () => {
    const {isOpen} = useSelector(state => state.locale)
    const dispatch = useDispatch()

    const onLocaleBurgerClick = () => {
        dispatch(setLocaleOpen({bool: !isOpen}))
    }

    return <LocaleBurgerButton {...{onLocaleBurgerClick}} />;
}

export default LocaleBurgerButtonContainer;