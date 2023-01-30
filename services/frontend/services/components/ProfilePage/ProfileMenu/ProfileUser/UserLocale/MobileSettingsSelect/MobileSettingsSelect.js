import { useDispatch } from "react-redux";
import { setProfileCurrencyOpen, setProfileLanguageOpen } from "../../../../../../store/slices/ProfileSlice";
import Text from "../../../../../Elementes/Text/Text";
import CurrencyChoice from "./CurrencyChoice/CurrencyChoice";
import LanguageChoice from "./LanguageChoice/LanguageChoice";
import MobileSettingsSelectHead from "./MobileSettingsSelectHead/MobileSettingsSelectHead";

const MobileSettingsSelect = ({onBack}) => {
    const dispatch = useDispatch()

    const onBackClick = () => {
        dispatch(setProfileCurrencyOpen(false))
        dispatch(setProfileLanguageOpen(false))
    }

    return (
        <>
            <div className="container container--select">
                <div className="settings-mobile-select">
                    <MobileSettingsSelectHead onBackClick={onBack || onBackClick} />
                    <CurrencyChoice />
                    <LanguageChoice onBackClick={onBack || onBackClick} />

                    <button className="settings-mobile-select__apply" onClick={onBack || onBackClick}>
                        <Text content="Apply" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default MobileSettingsSelect;