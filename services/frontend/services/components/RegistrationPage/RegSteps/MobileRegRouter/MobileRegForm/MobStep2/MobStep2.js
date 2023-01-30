import Link from "next/link";
import Text from "../../../../../Elementes/Text/Text";
import AltReg from "../../../AltReg/AltReg";
import EmailField from "../../../DesktopRegRouter/DeskRegForm/Fields/EmailField";
import PasswordField from "../../../DesktopRegRouter/DeskRegForm/Fields/PasswordField";
import PasswordRepeat from "../../../DesktopRegRouter/DeskRegForm/Fields/PasswordRepeat";
import NextMobRegBtnContainer from "../NextMobRegBtn/NextMobRegBtnContainer";

const MobStep2 = ({errors, dirtyFields, name, message, touchedFields}) => {
    const isStepError = !!errors ? (!!errors.password1 || !!errors.password2) : true
    const isFieldsDirty = !!dirtyFields ? !(dirtyFields.password1 && dirtyFields.password2) : true

    const isTouched = !!touchedFields ? Object.keys(touchedFields).includes(name) : false

    const isError = isStepError || isFieldsDirty
    
    return (
        <>
            <div className="form__step">
                <div className="form__fields">
                    <PasswordField />
                    <PasswordRepeat />
                                
                    {(isTouched && isError) && <p className="warn warn--mob">{message}</p>}  
                            
                </div>
                            
                <NextMobRegBtnContainer {...{isError}} />
            </div>
        </>
    );
}

export default MobStep2;