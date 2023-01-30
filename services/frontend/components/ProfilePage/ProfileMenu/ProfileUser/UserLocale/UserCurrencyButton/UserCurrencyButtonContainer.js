import { useDispatch, useSelector } from "react-redux"
import { setProfileCurrencyOpen, setProfileLanguageOpen } from "../../../../../../store/slices/ProfileSlice"
import UserCurrencyButton from "./UserCurrencyButton"

const UserCurrencyButtonContainer = () => {
    const {isCurrencyOpen} = useSelector(state => state.profile.locale)
    const dispatch = useDispatch()

    const onProfileCurrencySwitch = () => {
        dispatch(setProfileLanguageOpen(false))
        dispatch(setProfileCurrencyOpen(!isCurrencyOpen))
    }

    return <UserCurrencyButton {...{isCurrencyOpen, onProfileCurrencySwitch}} />;
}

export default UserCurrencyButtonContainer;