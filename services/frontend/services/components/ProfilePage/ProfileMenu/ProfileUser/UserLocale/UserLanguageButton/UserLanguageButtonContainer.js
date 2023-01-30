import { useDispatch, useSelector } from "react-redux";
import { setProfileCurrencyOpen, setProfileLanguageOpen } from "../../../../../../store/slices/ProfileSlice";
import UserLanguageButton from "./UserLanguageButton";

const UserLanguageButtonContainer = () => {
    const {isLanguageOpen} = useSelector(state => state.profile.locale)
    const dispatch = useDispatch()

    const onProfileLanguageSwitch = () => {
        dispatch(setProfileCurrencyOpen(false))
        dispatch(setProfileLanguageOpen(!isLanguageOpen))
    }

    return <UserLanguageButton {...{isLanguageOpen, onProfileLanguageSwitch}} />;
}

export default UserLanguageButtonContainer;