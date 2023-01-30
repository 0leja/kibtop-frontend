import CurrencySelect from "./CurrencySelect";
import {useCurrency} from "../../../../../../locales/hooks/useCurrency"
import {setOpenCurrencySelect} from "../../../../../../store/slices/CurrencySlice"
import { useDispatch } from "react-redux";
import { setLocaleOpen } from "../../../../../../store/slices/LocaleSlice";

const CurrencySelectContainer = () => {
    const {currency, toggleCurrency} = useCurrency();
    const dispatch = useDispatch()

    const closeCurrencySelect = () => {
        dispatch(setOpenCurrencySelect())
        // dispatch(setLocaleOpen({bool: false}))
    }

    const onChangeCurrency = e => toggleCurrency(e.currentTarget.value)

    return <CurrencySelect {...{currency, onChangeCurrency, closeCurrencySelect}} />;
}

export default CurrencySelectContainer;