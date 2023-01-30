import { useForm } from "react-hook-form";
import { useLanguage } from "../../../../locales/hooks/useLanguage";
import { seriealizeErrors } from "../../../../services/tools/ApiFormsSerializers";
import Text from "../../../Elementes/Text/Text";
import ClearButton from "../../../RegistrationPage/RegSteps/DesktopRegRouter/DeskRegForm/Fields/ClearButton";

const AddPhoneForm = ({onPhoneSubmit, isLoading}) => {
    const {t} = useLanguage()
    const {register, handleSubmit, formState: {errors, isValid, touchedFields}} = useForm({mode: 'onChange'})

    const {name, message} = seriealizeErrors(errors)

    const isError = !!message && name in touchedFields

    return (
        <>
            <div className="phone-form">
                <div className={"form__field" + (isError ? ' form__field--error' : '')} style={{overflow: 'initial'}}>
                    <svg height="20px" width="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.00589 4.54166C1.905 3.11236 3.11531 2 4.54522 2H7.60606C8.34006 2 9.00207 2.44226 9.28438 3.1212L10.5643 6.19946C10.8761 6.94932 10.6548 7.81544 10.0218 8.32292L9.22394 8.96254C8.86788 9.24798 8.74683 9.74018 8.95794 10.1448C10.0429 12.2241 11.6464 13.9888 13.5964 15.2667C14.008 15.5364 14.5517 15.4291 14.8588 15.0445L15.6902 14.003C16.1966 13.3687 17.0609 13.147 17.8092 13.4594L20.8811 14.742C21.5587 15.0249 22 15.6883 22 16.4238V19.5C22 20.9329 20.8489 22.0955 19.4226 21.9941C10.3021 21.3452 2.65247 13.7017 2.00589 4.54166Z" fill="#BDBDBD"/>
                    </svg>
                    <ClearButton name='phone' />


                    <input {...register('phone', {
                            required: 'field is required',
                            pattern: {
                                value: /^\+?[0-9]{11,14}$/,
                                message: 'invalid phone number'
                            }
                    })} type="text" placeholder={t("Phone number")} />
                </div>

                <div className="submit-row">
                    <button disabled={!isValid || isLoading} className="reg-btn" onClick={handleSubmit(onPhoneSubmit)}>
                        <Text content="Add Phone" />
                    </button>

                    {isError && <p className="warn"><Text content={message} /></p>}
                </div>
            </div>
        </>
    );
}

export default AddPhoneForm;