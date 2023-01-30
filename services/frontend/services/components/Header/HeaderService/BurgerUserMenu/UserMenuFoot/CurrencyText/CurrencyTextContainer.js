import { useCurrency } from "../../../../../../locales/hooks/useCurrency";
import { useLanguage } from "../../../../../../locales/hooks/useLanguage";
import CurrencyText from "./CurrencyText";

const CurrencyTextContainer = () => {
    const currencies = {
        "€": 'EUR',
        "$": 'USD',
        "₽": 'RUB'
    }

    const {currency} = useCurrency();

    return <CurrencyText text={currencies[currency]} currency={currency} />
}

export default CurrencyTextContainer;