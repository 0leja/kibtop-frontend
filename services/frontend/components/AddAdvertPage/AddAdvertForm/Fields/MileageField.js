import { useFormContext } from "react-hook-form";
import { useLanguage } from "../../../../locales/hooks/useLanguage";
import Text from "../../../Elementes/Text/Text";

const MileageField = () => {
    const {t} = useLanguage()
    const {register, formState, getFieldState} = useFormContext()
    const {error, isTouched} = getFieldState('mileage', formState)
    
    return (
        <>
            <div className="advert-form__text-input">
                <input {...register('mileage', {
                        required: 'field is required',
                        pattern: {
                            value: /^[1-9]{1}\d*$/,
                            message: 'invalid format'
                        }
                    })}
                    type="text" 
                    placeholder={t('Mileage in kilometers')} 
                    className={"empty-field empty-field--full" + ((!!error && isTouched) ? ' field--error': '')} />

                { (isTouched && !!error && !!error.message) && <p className="warn warn--absolute"><Text content={error.message} /></p> }
            </div>
        </>
    );
}

export default MileageField;