import Text from "../../../../../../Elementes/Text/Text";
import CurrencyChoiceOption from "./CurrencyChoiceOption";

const CurrencyChoice = () => {
    return (
        <>
            <div className="settings-mobile-select__choice">
                <h5 className="settings-mobile-select__title"><Text content="Currency" /></h5>

                <div className="settings-mobile-select__options">
                    <CurrencyChoiceOption {...{value: '€', text: 'Euro'}} />
                    <CurrencyChoiceOption {...{value: '$', text: 'Dollar'}} />
                    <CurrencyChoiceOption {...{value: '₤', text: 'Lira'}} />
                </div>
            </div>
        </>
    );
}

export default CurrencyChoice;