import { useContext } from "react"
import { CurrencyContext } from "../CurrencyContext"

export const useCurrency = () => {
    const {currency, toggleCurrency, countCurrencyPrice} = useContext(CurrencyContext);

    return {currency, toggleCurrency, countCurrencyPrice}
}