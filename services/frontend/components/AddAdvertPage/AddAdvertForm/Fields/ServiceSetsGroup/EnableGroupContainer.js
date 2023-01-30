import { useFormContext } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useCurrency } from "../../../../../locales/hooks/useCurrency";
import { setAddAdvertPhoneOpen } from "../../../../../store/slices/AddAdvertSlice";
import EnableSubmitButton from "../EnableSubmitButton/EnableSubmitButton";
import { validateStepFields } from "../validators";

const EnableGroupContainer = ({servicePrice, requiredFields}) => {
    const {onSubmitClick, isValid, getValues, setValue, watch, formState: {errors}} = useFormContext()
    const {currency, countCurrencyPrice} = useCurrency()
    const {phone} = useSelector(state => state.profile)
    const dispatch = useDispatch()

    const isDisabled = validateStepFields(requiredFields, 
        {errors, fields: watch() || {}})


    const openAddPhoneModal = e => {        
        e.preventDefault()

        dispatch(setAddAdvertPhoneOpen(true))
        
    }
    
    const onSummitEnableClick = e => {
        e.preventDefault()

        setValue('servicePrice', `${countCurrencyPrice(servicePrice, '$')} ${currency}`, {shouldTouch: true, shouldValidate: true})
        
        onSubmitClick()
    }


    return <EnableSubmitButton {...{onSubmitClick: onSummitEnableClick, isDisabled, isPhoneNull: !phone, openAddPhoneModal}} />;
}

export default EnableGroupContainer;