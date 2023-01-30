import CurrencyIcon from "./CurrencyIcon/CurrencyIcon";
import CurrencySelectContainer from "./CurrencySelect/CurrencySelectContainer";
import CurrencyTextContainer from "./CurrencyTextContainer/CurrencyTextContainer";

const CurrencyChoice = ({isOpen, openCurrencySelect}) => {
    return (
        <>
            <div className={"locales__item locales__item--currency" + 
                (isOpen ? ' locales__item--opened' : '')}>
                {
                    isOpen && <CurrencySelectContainer />
                }
                <div className="locales__wrapper" onClick={openCurrencySelect}>
                    <CurrencyIcon />
                    <CurrencyTextContainer />
                </div>
            </div>
        </>
    );
}

export default CurrencyChoice;