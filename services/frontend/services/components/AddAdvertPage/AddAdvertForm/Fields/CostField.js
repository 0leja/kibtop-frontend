import { useEffect } from "react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { useCurrency } from "../../../../locales/hooks/useCurrency";
import { useLanguage } from "../../../../locales/hooks/useLanguage";

const CostField = ({placeholder='Full amount'}) => {
    const {t} = useLanguage()
    const {register, setValue, watch, formState, getFieldState} = useFormContext()
    const {error, isTouched} = getFieldState('cost', formState)

    const {currency} = useCurrency()

    useEffect(() => {
        setValue('currency', currency, {shouldTouch: true, shouldValidate: true})
    }, [currency])

    const currencyList = ['$', '€', '₤']
    const [offset, setOffset] = useState(currencyList.indexOf(currency))
    const offsetNext = offset === currencyList.length-1 ? 0 : offset+1

    const onCurrencyClick = () => {
        setValue('currency', currencyList[offsetNext])
        setOffset(offsetNext)
    }

    const data = watch()
    
    return (
        <>
            <div className="advert-form__text-input">
                <input {...register('cost', {
                    required: t('field is required'),
                    pattern: {
                        value: /^[0-9]+$/,
                        message: t('invalid format')
                    }
                })}
                    type="text" 
                    placeholder={t(placeholder)} 
                    className={"empty-field" + ((!!error && isTouched) ? ' field--error': '')} />

                
                <a onClick={onCurrencyClick} className="currency-input">{data.currency}</a>
                { (isTouched && !!error) && <p className="warn warn--absolute">{error.message}</p> }
            </div>
            
        </>
    );
}

export default CostField;