import { useLanguage } from "../../../../../../locales/hooks/useLanguage";
import Text from "../../../../../Elementes/Text/Text";
import CityField from "../Fields/CityField";
import FileField from "../Fields/FileField";
import NameField from "../Fields/NameField";

const DeskRegStep2 = ({dirtyFields, errors, name, message, touchedFields, onSubmit, isValid, isLoading}) => {
    const {t} = useLanguage()

    const isStepError = !!errors ? (!!errors.name || !!errors.city || !!errors.file) : true
    const isFieldsDirty = !!dirtyFields ? !(dirtyFields.name && dirtyFields.city && dirtyFields.file) : true
    
    const isError = isStepError || isFieldsDirty
    const isTouched = !!touchedFields ? Object.keys(touchedFields).includes(name) || name === 'file' : false

    
    return (
            <>
                <div className="form__fields form__fields--file">
                    <NameField />

                    <CityField />

                    <FileField />
                </div>

                <div className="reg-wrapper">
                    <div className="reg__submit">
                        <button onClick={onSubmit} disabled={!isValid && isLoading} className="reg-btn"><Text content="Sing up" /></button>
                        <button onClick={onSubmit} disabled={!isValid && isLoading} className="reg-btn reg-btn--free"><Text content="Skip" /></button>
                    </div>

                    {(isTouched && isError) && <p className="warn warn--high">{message}</p>}
                </div>
                
            </>
    );
}

export default DeskRegStep2;