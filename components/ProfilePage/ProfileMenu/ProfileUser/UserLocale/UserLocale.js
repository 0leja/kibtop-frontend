import { useSelector } from "react-redux";
import UserCurrencyButtonContainer from "./UserCurrencyButton/UserCurrencyButtonContainer";
import UserCurrencySelect from "./UserCurrencyButton/UserCurrencySelect/UserCurrencySelect";
import UserLanguageButtonContainer from "./UserLanguageButton/UserLanguageButtonContainer";
import UserLanguageSelect from "./UserLanguageButton/UserLanguageSelect/UserLanguageSelect";

const UserLocale = () => {
    const {isLanguageOpen, isCurrencyOpen} = useSelector(state => state.profile.locale)
    

    return (
        <>
            <div className={"user__wrapper user__wrapper--locale" + (isLanguageOpen || isCurrencyOpen ? ' user__locale--selected' : '')}>
                <div className={"user__locale"}>
                    <UserCurrencyButtonContainer />
                    <div className="user-locale-line" />
                    <UserLanguageButtonContainer />
                </div>
                <UserLanguageSelect />
                <UserCurrencySelect />
            </div>
        </>
    );
}

export default UserLocale;