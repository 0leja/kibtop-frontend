import Link from "next/link";
import Text from "../../../Elementes/Text/Text";

const LoginFormSubmit = ({onSubmit, isValid, name, message, touchedFields, isLoading}) => {

    const isTouched = name in touchedFields

    return (
        <>
            <div className="submit">
                <button onClick={onSubmit} disabled={!isValid && isLoading} className="reg-btn">
                    <Text content="Login" />
                </button>

                <div className="submit__column">
                    <Link className="link-opacity" href="/auth/recovery"><Text content="Forgot your password?" /></Link>
                        
                    {(!!message && isTouched) && <p className="warn">{message}</p>}
                </div>
            </div>
        </>
    );
}

export default LoginFormSubmit;