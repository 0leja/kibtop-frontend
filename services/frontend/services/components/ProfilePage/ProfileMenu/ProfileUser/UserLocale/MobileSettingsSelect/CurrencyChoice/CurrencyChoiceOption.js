import { useCurrency } from "../../../../../../../locales/hooks/useCurrency"
import Text from "../../../../../../Elementes/Text/Text"

const CurrencyChoiceOption = ({value, text}) => {

    const {currency, toggleCurrency} = useCurrency()

    const isSelected = value == currency
    const isSelectedStyle = isSelected ? ' settings-mobile-select__option--selected' : ''

    const onCurrencyChange = () => toggleCurrency(value)

    return (
        <>
            <button onClick={onCurrencyChange}
                    className={"settings-mobile-select__option" + isSelectedStyle}>

                <div className="select-circle" />
                
                {value} {" "} <Text content={text} />
                
            </button>
        </>
    );
}

export default CurrencyChoiceOption;