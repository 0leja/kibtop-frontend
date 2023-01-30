import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { seriealizeErrors } from "../../../services/tools/ApiFormsSerializers";
import Text from "../../Elementes/Text/Text";
import PasswordField from "../../RegistrationPage/RegSteps/DesktopRegRouter/DeskRegForm/Fields/PasswordField";

const DeleteAccountButton = ({onDeleteAccountClick, onOpenDeleting, isDeleting, isDeletingLoading}) => {
    const DeleteAccountForm = useForm({mode: 'onChange'})
    const {handleSubmit, setError, formState: {isValid, errors, touchedFields}} = DeleteAccountForm

    const {name, message} = seriealizeErrors(errors)
    return (
        <>
            {
                isDeleting ? <>
                    <form className="settings__link settings__link--form" onSubmit={handleSubmit(onDeleteAccountClick)}>
                        <button href="" disabled={!isValid || isDeletingLoading} className="settings__link settings__link--submit">
                            <Text content="Delete Account" />
                        </button>
                        <FormProvider {...DeleteAccountForm}>
                            <div className="field">
                                <PasswordField />

                                {(name in touchedFields && !!errors) && <p className="warn warn--mt">{message}</p>}

                            </div>

                        </FormProvider>

                        
                    </form>
                </> : <>
                    <a onClick={onOpenDeleting} className="settings__link settings__link--red">
                        <Text content="Delete Account" />
                    </a>
                </>
            }
        </>
    );
}

export default DeleteAccountButton;