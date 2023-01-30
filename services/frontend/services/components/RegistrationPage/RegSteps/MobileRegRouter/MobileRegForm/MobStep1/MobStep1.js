import Link from "next/link";
import Text from "../../../../../Elementes/Text/Text";
import AltReg from "../../../AltReg/AltReg";
import EmailField from "../../../DesktopRegRouter/DeskRegForm/Fields/EmailField";
import NextMobRegBtnContainer from "../NextMobRegBtn/NextMobRegBtnContainer";

const MobStep1 = ({errors, dirtyFields, name, message, touchedFields}) => {
    const isStepError = !!errors ? (!!errors.email) : true
    const isFieldsDirty = !!dirtyFields ? !(dirtyFields.email) : true

    const isTouched = !!touchedFields ? Object.keys(touchedFields).includes(name) : false

    const isError = isStepError || isFieldsDirty
    
    return (
        <>
            <div className="form__step">
                <div className="form__fields">
                    <EmailField />

                    {(isTouched && isError) && <p className="warn warn--mob">{message}</p>}  
                </div>
                            
                <NextMobRegBtnContainer {...{isError}} />

                <AltReg />

                <p className="to-login"><Text content="Already have an account" />? <Link href="/auth/login"><Text content="Login" /></Link></p>
            </div>
        </>
    );
}

export default MobStep1;