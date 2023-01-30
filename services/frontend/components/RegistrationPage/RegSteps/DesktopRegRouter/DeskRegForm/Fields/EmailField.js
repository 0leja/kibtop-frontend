import { useFormContext } from "react-hook-form";
import { useLanguage } from "../../../../../../locales/hooks/useLanguage";
import ClearButton from "./ClearButton";
import TextField from "./TextField";

const EmailField = () => {
    const {t} = useLanguage()
    const {register, formState, getFieldState} = useFormContext()
    
    const {isTouched, error} = getFieldState('email', formState)

    const isError = isTouched  && error 

    return (
        <>
            <div className={"form__field" + (isError ? ' form__field--error' : '')}>
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.9617 5L12.9467 12.2328C12.1645 13.0372 11.1048 13.489 10 13.489C8.89521 13.489 7.83552 13.0372 7.05333 12.2328L0.0383333 5C0.0266667 5.13575 0 5.25862 0 5.39352V15.704C0.00132321 16.8429 0.440735 17.9349 1.22185 18.7402C2.00296 19.5456 3.062 19.9986 4.16667 20H15.8333C16.938 19.9986 17.997 19.5456 18.7782 18.7402C19.5593 17.9349 19.9987 16.8429 20 15.704V5.39352C20 5.25862 19.9733 5.13575 19.9617 5Z" fill="#BDBDBD"/>
                    <path d="M11.8852 10.2944L20 2.94084C19.6069 2.35023 19.0525 1.86137 18.3902 1.52142C17.7279 1.18146 16.9801 1.00188 16.2189 1H3.78109C3.01992 1.00188 2.27212 1.18146 1.60983 1.52142C0.947541 1.86137 0.393105 2.35023 0 2.94084L8.11478 10.2944C8.61547 10.7463 9.29334 11 10 11C10.7067 11 11.3845 10.7463 11.8852 10.2944V10.2944Z" fill="#BDBDBD"/>
                </svg>
                <ClearButton name='email' />


                <input {...register('email', {
                                required: t('field is required'),
                                pattern: {
                                    value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/,
                                    message: t('email not found')
                                }
                        })} type="email" placeholder={t("Your email")} />
            </div>
        </>
    );
}

export default EmailField;