import { useCurrency } from "../../../../../../locales/hooks/useCurrency";

const UserCurrencyButton = ({isCurrencyOpen, onProfileCurrencySwitch}) => {
    const {currency} = useCurrency()
    const currencies = {
        "€": 'EUR',
        "$": 'USD',
        "₤": 'TRY'
    }

    const isOpenStyle = isCurrencyOpen ? ' user-locale-btn--opened' : ''

    return (
        <>
            <button className={"user-locale-btn" + isOpenStyle} onClick={onProfileCurrencySwitch}>
                {currencies[currency]}
            </button>
        </>
    );
}

export default UserCurrencyButton;