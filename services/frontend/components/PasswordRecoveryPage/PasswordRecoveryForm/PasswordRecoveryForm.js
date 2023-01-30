import { t } from "i18next";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useLanguage } from "../../../locales/hooks/useLanguage";
import { seriealizeErrors } from "../../../services/tools/ApiFormsSerializers";
import Text from "../../Elementes/Text/Text";
import NewPasswordField from "./Fields/NewPasswordField";
import NewPasswordRepeat from "./Fields/NewPasswordRepeat";

const PasswordRecoveryForm = ({onPasswordRecoverySubmit, isError, isLoading}) => {
    const {t} = useLanguage()
    const PasswordRecoveryForm = useForm({mode: 'onChange'})
    const {handleSubmit, setError, formState: {isValid, errors, touchedFields}} = PasswordRecoveryForm

    const {message, name} = seriealizeErrors(errors)

    useEffect(() => {
        if(isError) {
            setError('new_password', {type: 'submit', message: t('Link is not valid')})
            setError('re_new_password', {type: 'submit', message: t('Link is not valid')})
        }
    }, [isError])

    return (
        <>
            <form className="form form--recovery" 
                    onSubmit={handleSubmit(onPasswordRecoverySubmit)}>
                <FormProvider {...PasswordRecoveryForm}>
                    <div className="form__fields form__fields--recovery">
                        <NewPasswordField />
                        <NewPasswordRepeat />
                    </div>
                </FormProvider>

                <div className="submit">
                    <button disabled={!isValid || isLoading} className="reg-btn">
                        <Text content="Change password" />
                    </button>

                    <p className="warn warn--recovery">{(name in touchedFields) && message}</p>
                </div>
            </form>
        </>
    );
}

export default PasswordRecoveryForm;