import { useDispatch, useSelector } from "react-redux";
import { setOpenCurrencySelect } from "../../../../../store/slices/CurrencySlice";
import CurrencyChoice from "./CurrencyChoice";

const CurrencyChoiceContainer = () => {
    const isOpen = useSelector(state => state.currency.isOpen)
    const dispatch = useDispatch();

    const openCurrencySelect = () => {
        dispatch(setOpenCurrencySelect())
    }
    

    return <CurrencyChoice {...{isOpen, openCurrencySelect}} />
}

export default CurrencyChoiceContainer;