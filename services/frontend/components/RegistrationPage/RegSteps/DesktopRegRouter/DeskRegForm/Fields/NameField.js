import { useFormContext } from "react-hook-form";
import { useLanguage } from "../../../../../../locales/hooks/useLanguage";
import ClearButton from "./ClearButton";

const NameField = () => {
    const {t} = useLanguage()
    const {register, formState, getFieldState} = useFormContext()
    
    const {isTouched, error} = getFieldState('name', formState)

    const isError = isTouched  && error 

    return (
        <>
            <div className={"form__field" + (isError ? ' form__field--error' : '')}>
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 10C13.7614 10 16 7.76142 16 5C16 2.23858 13.7614 0 11 0C8.23858 0 6 2.23858 6 5C6 7.76142 8.23858 10 11 10Z" fill="#BDBDBD"/>
                    <path d="M10.5 12C6.35977 12.0044 3.00461 15.2254 3 19.2C3 19.6418 3.37309 20 3.83332 20H17.1667C17.6269 20 18 19.6418 18 19.2C17.9954 15.2254 14.6403 12.0044 10.5 12Z" fill="#BDBDBD"/>
                </svg>
                <ClearButton name='name' />

                <input {...register('name', {
                                required: t('field is required'),
                                pattern: {
                                    value: /^[А-яA-ZİĞÜŞÖÇа-яa-zğüşöç\s]+$/,
                                    message: t('invalid format')
                                }
                        })} type="text" placeholder={t("Your name")} />
            </div>
        </>
    );
}

export default NameField;