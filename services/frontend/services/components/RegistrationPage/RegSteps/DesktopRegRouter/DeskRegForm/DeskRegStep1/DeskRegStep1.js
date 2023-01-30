import Link from "next/link";
import { useLanguage } from "../../../../../../locales/hooks/useLanguage";
import Text from "../../../../../Elementes/Text/Text";
import AltReg from "../../../AltReg/AltReg";
import EmailField from "../Fields/EmailField";
import PasswordField from "../Fields/PasswordField";
import PasswordRepeat from "../Fields/PasswordRepeat";
import NextRegBtnContainer from "./NextRegBtn/NextRegBtnContainer";

const DeskRegStep1 = ({dirtyFields, errors, name, message, touchedFields}) => {
    const {t} = useLanguage()

    const isStepError = !!errors ? (!!errors.email || !!errors.password1 || !!errors.password2) : true
    const isFieldsDirty = !!dirtyFields ? !(dirtyFields.email && dirtyFields.password1 && dirtyFields.password2) : true

    const isError = isStepError || isFieldsDirty
    const isTouched = !!touchedFields ? Object.keys(touchedFields).includes(name) : false
    // const isClear = !!touchedFields ? Object.keys(touchedFields).length === 0 : true

    return (
        <>
            
            <div className="form__fields">
                <EmailField />

                <PasswordField />

                <PasswordRepeat />
            </div>
            <div className="reg-wrapper">
                <NextRegBtnContainer isError={isError} />

                {
                ((isTouched && isError)) && (
                        <p className="warn">
                            {message}
                        </p>
                    )
                }
            </div>
                            

            <AltReg />

            <p className="to-login">
                <Text content="Already have an account" /> ? <Link href="/auth/login"><Text content="Login" /></Link>
            </p>
                    
        </>
    );
}

export default DeskRegStep1;