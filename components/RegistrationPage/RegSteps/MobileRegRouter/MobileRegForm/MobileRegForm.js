import Link from "next/link";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useLanguage } from "../../../../../locales/hooks/useLanguage";
import Text from "../../../../Elementes/Text/Text";
import MobStep1 from "./MobStep1/MobStep1";
import MobStep2 from "./MobStep2/MobStep2";
import MobStep3 from "./MobStep3/MobStep3";
import MobStep4 from "./MobStep4/MobStep4";
import MobStep5 from "./MobStep5/MobStep5";


const MobileRegForm = ({mobileStep, seriealizeErrors, isLoading,
                         error, setErrorStep, onRegistrationSubmit}) => {
    const {t} = useLanguage()
    const RegistrationForm = useForm({mode: 'onChange'})
    const {handleSubmit, setError, formState: {errors, isValid, dirtyFields, touchedFields}} = RegistrationForm

    useEffect(() => {
        const {mobileStep, name, message} = error
        if(!!name) {
            setErrorStep(mobileStep)
            setError(name, {type: 'submit', message: t(message)})
        }
    }, [error.message, errors])

    return (
        <>
            <form className="form reg-form--mob">
                <FormProvider {...RegistrationForm}>
                    <div className="form__head">
                        <h1 className="reg-title">
                            <span className="reg-title__line"><Text content="Create new" /></span>
                            <span className="reg-title__line"><Text content="account" /></span>
                        </h1>
                    </div>
                    {
                        mobileStep === 1 && <MobStep1 {...{...seriealizeErrors(errors), errors, 
                                                            dirtyFields, touchedFields}} />
                    }
                    {
                        mobileStep === 2 && <MobStep2 {...{...seriealizeErrors(errors), errors, 
                                                            dirtyFields, touchedFields}} />
                    }
                    {
                        mobileStep === 3 && <MobStep3 {...{...seriealizeErrors(errors), errors, 
                                                            dirtyFields, touchedFields}} />
                    }
                    {
                        mobileStep === 4 && <MobStep4 {...{...seriealizeErrors(errors), errors,
                            touchedFields}} />
                    }
                    {
                        mobileStep === 5 && <MobStep5 {...{...seriealizeErrors(errors), errors, 
                                                        isValid, isLoading,
                                                        onSubmit: handleSubmit(onRegistrationSubmit),
                                                        touchedFields}} />
                    }
                </FormProvider>
            </form>
        </>
    );
}

export default MobileRegForm;