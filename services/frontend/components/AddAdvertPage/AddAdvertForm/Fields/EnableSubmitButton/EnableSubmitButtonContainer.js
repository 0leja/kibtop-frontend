import { useFormContext } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useCurrency } from "../../../../../locales/hooks/useCurrency";
import { setAddAdvertPhoneOpen } from "../../../../../store/slices/AddAdvertSlice";
import { validateStepFields } from "../validators";
import EnableSubmitButton from "./EnableSubmitButton";

const EnableSubmitButtonContainer = ({lifts, top, vip, servicePrice, requiredFields}) => {
    const {onSubmitClick, isValid, getValues, setValue, formState: {errors}, watch} = useFormContext()
    const {currency, countCurrencyPrice} = useCurrency()
    const {phone} = useSelector(state => state.profile)
    const dispatch = useDispatch()

    const isDisabled = validateStepFields(requiredFields, 
                                            {errors, fields: watch() || {}})


    const openAddPhoneModal = e => {        
        e.preventDefault()

        setValue('lifts', lifts)
        setValue('top', top)
        setValue('vip', vip)
        setValue('servicePrice', `${countCurrencyPrice(servicePrice, '$')} ${currency}`)

        dispatch(setAddAdvertPhoneOpen(true))
        
    }
    
    const onSummitEnableClick = e => {
        e.preventDefault()

        setValue('lifts', lifts)
        setValue('top', top)
        setValue('vip', vip)
        setValue('servicePrice', `${countCurrencyPrice(servicePrice, '$')} ${currency}`)
        
        onSubmitClick()
    }

    return <EnableSubmitButton {...{onSubmitClick: onSummitEnableClick, 
                                    isDisabled, 
                                    isPhoneNull: !phone, 
                                    openAddPhoneModal}} />;
}

export default EnableSubmitButtonContainer;