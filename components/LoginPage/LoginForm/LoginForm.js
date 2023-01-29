import { t } from "i18next";
import Link from "next/link";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useLanguage } from "../../../locales/hooks/useLanguage";
import Text from "../../Elementes/Text/Text";
import AltReg from "../../RegistrationPage/RegSteps/AltReg/AltReg";
import EmailField from "../../RegistrationPage/RegSteps/DesktopRegRouter/DeskRegForm/Fields/EmailField";
import PasswordField from "../../RegistrationPage/RegSteps/DesktopRegRouter/DeskRegForm/Fields/PasswordField";
import LoginFormSubmit from "./LoginFormSubmit/LoginFormSubmit";

const LoginForm = ({seriealizeErrors, onLoginSubmit, isLoading, error}) => {
    const {t} = useLanguage()
    const LoginForm = useForm({mode: 'onChange'})
    const {handleSubmit, setError, formState: {isValid, errors, touchedFields}} = LoginForm

    useEffect(() => {
        if(!!error) {
            setError('email', {type: 'submit', message: t('Incorrect email or password')})
            setError('password1', {type: 'submit', message: t('Incorrect email or password')})
        }
    }, [error])

    return (
        <>
            <form className="form form--login">
                <FormProvider {...LoginForm}>
                    <h1 className="reg-title reg-title--login">
                        <span className="reg-title__line"><Text content="Welcome back" /></span>
                        <span className="reg-title__line">
                            <Text content="to" /> {' '}
                            <Link href='/' className="logo-icon logo-icon--login">kib<span className="green">t</span>
                                                <span className="yellow">o</span>
                                                <span className="blue">p</span>
                            </Link>
                        </span>
                    </h1>

                    <EmailField />
                    <PasswordField />

                    <LoginFormSubmit {...{isValid, isLoading, onSubmit: handleSubmit(onLoginSubmit),
                                            ...seriealizeErrors(errors), touchedFields}} />
                </FormProvider>

                <AltReg text="Login with Google or Facebook" />

                <p className="to-login">
                    <Text content="Don't have an account?" /> <Link className="bigger" href="/auth/registration"><Text content="Sign up" /></Link>
                </p>
            </form>
        </>
    );
}

export default LoginForm;