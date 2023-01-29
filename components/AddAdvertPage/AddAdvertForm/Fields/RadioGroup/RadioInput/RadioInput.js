import { useFormContext } from "react-hook-form";
import { useLanguage } from "../../../../../../locales/hooks/useLanguage";
import Text from "../../../../../Elementes/Text/Text";

const RadioInput = ({label, value, name}) => {
    const {t} = useLanguage()
    const {register} = useFormContext()
    return (
        <>
            <label className="radio-option">
                <input {...register(name, {
                    required: t('field is required'),
                })} {...{value, name, type: "radio"}} className="radio-input" />

                <div className="select-circle" />

                <Text content={label} />
            </label>
        </>
    );
}

export default RadioInput;