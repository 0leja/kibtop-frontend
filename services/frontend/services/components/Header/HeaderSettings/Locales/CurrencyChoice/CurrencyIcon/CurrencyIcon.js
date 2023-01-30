import { useCurrency } from "../../../../../../locales/hooks/useCurrency";

const CurrencyIcon = () => {
    const {currency} = useCurrency();
    return (
        <>
            <span className="locales__icon-text">{currency}</span>
        </>
    );
}

export default CurrencyIcon;