import Text from "../../../../../../Elementes/Text/Text";
import LanguageChoiceOption from "./LanguageChoiceOption";

const LanguageChoice = ({onBackClick}) => {
    return (
        <>
            <div className="settings-mobile-select__choice">
                <h5 className="settings-mobile-select__title"><Text content="language" /></h5>

                <div className="settings-mobile-select__options">
                    <LanguageChoiceOption {...{value: 'en', text: 'English'}} />
                    <LanguageChoiceOption {...{value: 'tr', text: 'Türkçe'}} />
                    <LanguageChoiceOption {...{value: 'ru', text: 'Русский'}} style={{borderBottom: 'none'}} />

                    <button onClick={onBackClick} className="reg-btn reg-btn--settings">
                        <Text content="Apply" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default LanguageChoice;