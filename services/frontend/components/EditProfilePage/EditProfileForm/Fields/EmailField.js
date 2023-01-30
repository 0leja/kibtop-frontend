import { useFormContext } from "react-hook-form"
import { useLanguage } from "../../../../locales/hooks/useLanguage"


const EmailField = () => {
    const {t} = useLanguage()
    const {register, formState, getFieldState} = useFormContext()
    
    const {isTouched, error} = getFieldState('email', formState)

    const isError = isTouched  && error 

    return (
        <>
                <input className={"edit-profile__input" + (isError ? ' edit-profile__input--error' : '')}
                    {...register('email', {
                                required: t('field is required'),
                                pattern: {
                                    value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/,
                                    message: t('email not found')
                                }
                        })} type="email" placeholder={t("Your email")} />
                { isError && <p className="warn warn--profile">{error.message}</p>}
        </>
    );
}

export default EmailField;