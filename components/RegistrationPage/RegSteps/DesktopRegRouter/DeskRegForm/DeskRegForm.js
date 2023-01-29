import Link from "next/link";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useLanguage } from "../../../../../locales/hooks/useLanguage";
import Text from "../../../../Elementes/Text/Text";
import DeskRegStep1 from "./DeskRegStep1/DeskRegStep1";
import DeskRegStep2 from "./DeskRegStep2/DeskRegStep2";

const DeskRegForm = ({deskStep, error, setErrorStep,
                    isLoading, seriealizeErrors, 
                    firstStepStyle, secondStepStyle, 
                    onRegistrationSubmit}) => {
    const RegistrationForm = useForm({mode: 'onChange'})
    const {handleSubmit, setError, formState: {errors, isValid, dirtyFields, touchedFields}} = RegistrationForm

    useEffect(() => {
        const {deskStep, name, message} = error
        if(!!name) {
            setErrorStep(deskStep)
            setError(name, {type: 'submit', message})
        }
    }, [error.name])

    return (
        <>
            <form className="form reg-form--desk">
                <div className="form__head">
                    <h1 className="reg-title">
                        <span className="reg-title__line"><Text content="Create new" /></span>
                        <span className="reg-title__line"><Text content="account" /></span>
                    </h1>
                    <p className="form__count">{deskStep} <Text content="of"/> 2</p>
                </div>
                <FormProvider {...RegistrationForm}>
                    <div className="form__step" style={firstStepStyle}>
                        <DeskRegStep1 {...{errors, dirtyFields, touchedFields, 
                                            ...seriealizeErrors(errors),
                                            }} />
                    </div>

                    <div className="form__step" style={secondStepStyle}>
                        <DeskRegStep2 {...{errors, dirtyFields, touchedFields,
                                            ...seriealizeErrors(errors),
                                            isValid, isLoading, 
                                            onSubmit: handleSubmit(onRegistrationSubmit)}} />
                    </div>
                </FormProvider>
            </form>
        </>
    );
}

export default DeskRegForm;