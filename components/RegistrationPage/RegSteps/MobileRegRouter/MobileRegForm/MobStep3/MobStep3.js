
import NameField from "../../../DesktopRegRouter/DeskRegForm/Fields/NameField";
import NextMobRegBtnContainer from "../NextMobRegBtn/NextMobRegBtnContainer";

const MobStep3 = ({errors, dirtyFields, name, message, touchedFields}) => {
    const isStepError = !!errors ? (!!errors.name) : true
    const isFieldsDirty = !!dirtyFields ? !(dirtyFields.name) : true

    const isTouched = !!touchedFields ? Object.keys(touchedFields).includes(name) : false

    const isError = isStepError || isFieldsDirty
    
    return (
        <>
            <div className="form__step">
                <div className="form__fields">
                    <NameField />
                                
                    {(isTouched && isError) && <p className="warn warn--mob">{message}</p>}  
                </div>
                            
                <NextMobRegBtnContainer {...{isError}} />
            </div>
        </>
    );
}

export default MobStep3;