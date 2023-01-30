import { useRouter } from "next/router";
import UserLanguageSelect from "./UserLanguageSelect/UserLanguageSelect";

const UserLanguageButton = ({isLanguageOpen, onProfileLanguageSwitch}) => {
    const {locale} = useRouter()
    const langs = {
        'en': 'English',
        'ru': 'Русский',
        'tr': 'Türkçe',
    }

    const isOpenStyle = isLanguageOpen ? ' user-locale-btn--opened' : ''


    return (
        <>
            <button className={"user-locale-btn" + isOpenStyle} onClick={onProfileLanguageSwitch}>
                {langs[locale]}
            </button>
        </>
    );
}

export default UserLanguageButton;