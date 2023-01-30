import { useDispatch, useSelector } from "react-redux";
import { setLocaleMenuType } from "../../../../../../store/slices/LocaleSlice"
import MenuChoseButton from "./MenuChoseButton";

const MenuChoseButtonContainer = ({value, text, menu}) => {
    const dispatch = useDispatch()

    const onChangeMenuClick = () => {
        dispatch(setLocaleMenuType({menu: value}))
    }

    return <MenuChoseButton {...{isActive: menu === value, text, onChangeMenuClick}} />;
}

export default MenuChoseButtonContainer;