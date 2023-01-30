import { useFormContext } from "react-hook-form";
import { useLanguage } from "../../../../locales/hooks/useLanguage";

const DescriptionInput = ({placeholderName}) => {
    const {t} = useLanguage()
    const {register, getFieldState, formState} = useFormContext()

    const {error, isTouched} = getFieldState('description', formState)
    return (
        <>
            <div className="advert-form__text-input">
                <textarea {...register('description', {
                        required: t('field is required')
                    })} 
                    placeholder={t(`Describe the ${placeholderName} in detail`)}
                    className="desc-field"
                >
                </textarea>
                { (!!error) && <p className="warn warn--absolute">{error.message}</p> }
            </div>
        
        </>
    );
}

export default DescriptionInput;