import { useFormContext } from "react-hook-form"
import { useLanguage } from "../../../../locales/hooks/useLanguage"



const CityField = () => {
    const {t} = useLanguage()
    const {register, formState, getFieldState, setValue} = useFormContext()
    
    const {isTouched, error} = getFieldState('city', formState)

    const isError = isTouched  && error 


    return (
        <>


            <input className={"edit-profile__input" + (isError ? ' edit-profile__input--error' : '')}
                {...register('city', {
                            pattern: {
                                value: /^[А-яA-ZİĞÜŞÖÇа-яa-zğüşöç\s]+$/,
                                message: t('invalid format')
                            }
                    })} type="text" placeholder={t("City or region")} />
            { isError && <p className="warn warn--profile">{error.message}</p>}
        </>
    );
}

export default CityField;