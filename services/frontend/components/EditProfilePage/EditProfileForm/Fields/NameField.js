import { useFormContext } from "react-hook-form"
import { useLanguage } from "../../../../locales/hooks/useLanguage"

const NameField = () => {
    const {t} = useLanguage()
    const {register, formState, getFieldState} = useFormContext()
    
    const {isTouched, error} = getFieldState('name', formState)

    const isError = isTouched  && error 

    return (
        <>
                

            <input className={"edit-profile__input" + (isError ? ' edit-profile__input--error' : '')}
                {...register('name', {
                                required: t('field is required'),
                                pattern: {
                                    value: /^[А-яA-ZİĞÜŞÖÇа-яa-zğüşöç\s]+$/,
                                    message: t('invalid format')
                                }
                        })} type="text" placeholder={t("Your name")} />
            { isError && <p className="warn warn--profile">{error.message}</p>}
        </>
    );
}

export default NameField;