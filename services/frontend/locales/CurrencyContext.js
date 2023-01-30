import { useEffect, useState } from "react";
import { createContext } from "react";



export const CurrencyContext = createContext(null);

export const CurrencyProvider = props => {
    const currencies = {
        "$": '$',
        "€": '€',
        "₤": '₤'
    }
    const [exchange, setExchange] = useState({
        "$": 1,
        "€": 0.92319,
        "₤": 18.8
    })

    const [currency, setCurrency] = useState('$');

    const toggleCurrency = currency => {
        setCurrency(currency);
        localStorage.setItem('currency', currency)
    }

    const countCurrencyPrice = (price, cur) => {
        if(cur === currency) return price

        const dollarPrice = price / exchange[cur]
        const exchangePrice = dollarPrice * exchange[currency]

        return Math.round(exchangePrice * 10) / 10
    }

    useEffect(() => {
        const storgeCurrency = localStorage.getItem('currency') || '$';

        toggleCurrency(storgeCurrency);
    }, [])


    return (
        <CurrencyContext.Provider value={{
                currency: currencies[currency] || '$', 
                toggleCurrency,
                countCurrencyPrice
            }}>
            {props.children}
        </CurrencyContext.Provider>
    );
}
