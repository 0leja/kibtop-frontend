import { useFormContext } from "react-hook-form";
import { useLanguage } from "../../../../locales/hooks/useLanguage";

const TitleField = () => {
    const {t} = useLanguage()
    const {register, formState, getFieldState} = useFormContext()
    const {error, isTouched} = getFieldState('title', formState)
    
    return (
        <>
            <div className="advert-form__text-input">
                <input {...register('title', {
                        required: t('field is required')
                    })}
                    type="text" 
                    placeholder={t('Only title')} 
                    className={"empty-field empty-field--full" + ((!!error && isTouched) ? ' field--error': '')} />

                { (isTouched && !!error) && <p className="warn warn--absolute">{error.message}</p> }
            </div>
        </>
    );
}

export default TitleField;