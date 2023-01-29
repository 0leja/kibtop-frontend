import Link from "next/link";
import { useSelector } from "react-redux";
import MobileSettingsSelect from "../../MobileSettingsSelect/MobileSettingsSelect";
import UserLanguageOption from "./UserLanguageOption";

const UserLanguageSelect = () => {
    const {isLanguageOpen} = useSelector(state => state.profile.locale)

    return (
        <>
            {
                isLanguageOpen && (
                    <>
                        <div className="profile-select profile-select--language">
                            <UserLanguageOption {...{value: 'en', text: 'English'}} />
                            <UserLanguageOption {...{value: 'tr', text: 'Türkçe'}} />
                            <UserLanguageOption {...{value: 'ru', text: 'Русский'}} />

                        </div>

                        <MobileSettingsSelect />
                    </>                    
                )
            }
        </>
    );
}

export default UserLanguageSelect;