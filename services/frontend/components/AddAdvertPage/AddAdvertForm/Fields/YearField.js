import { useFormContext } from "react-hook-form";
import { useLanguage } from "../../../../locales/hooks/useLanguage";
import Text from "../../../Elementes/Text/Text";

const YearField = () => {
    const {t} = useLanguage()
    const {register, formState, getFieldState} = useFormContext()
    const {error, isTouched} = getFieldState('year', formState)
    
    return (
        <>
            <div className="advert-form__text-input">
                <input {...register('year', {
                        required: 'field is required',
                        pattern: {
                            value: /^(19|20)\d{2}$/,
                            message: 'invalid format'
                        }
                    })}
                    type="text" 
                    placeholder={t('Year of release')} 
                    className={"empty-field empty-field--full" + ((!!error && isTouched) ? ' field--error': '')} />

                { (isTouched && !!error && !!error.message) && <p className="warn warn--absolute"><Text content={error.message} /></p> }
            </div>
        </>
    );
}

export default YearField;