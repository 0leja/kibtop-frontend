import { useSelector } from "react-redux";
import MobileSettingsSelect from "../../MobileSettingsSelect/MobileSettingsSelect";
import UserCurrencyOption from "./UserCurrencyOption";

const UserCurrencySelect = () => {
    const {isCurrencyOpen} = useSelector(state => state.profile.locale)

    return (
        <>
            {
                isCurrencyOpen && (
                    <>
                        <div className="profile-select profile-select--currency">
                            <UserCurrencyOption {...{value: '€', text: 'Euro'}} />
                            <UserCurrencyOption {...{value: '$', text: 'Dollar'}} />
                            <UserCurrencyOption {...{value: '₤', text: 'Lira'}} />
                        </div>
                        <MobileSettingsSelect />
                    </>
                )
            }
        </>
    );
}

export default UserCurrencySelect;