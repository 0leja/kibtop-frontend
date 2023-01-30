import { useFormContext } from "react-hook-form";
import { useLanguage } from "../../../../../../locales/hooks/useLanguage";
import useLocation from "../../../../../../locales/hooks/useLocation";
import Text from "../../../../../Elementes/Text/Text";
import ClearButton from "./ClearButton";

const CityField = () => {
    const {t} = useLanguage()
    const {register, formState, getFieldState, setValue} = useFormContext()
    
    const {isTouched, error} = getFieldState('city', formState)

    const isError = isTouched  && error 

    const {location} = useLocation()

    const setCityInputLocation = () => {
        setValue('city', location)
    }

    return (
        <>
            <div className={"form__field" + (isError ? ' form__field--error' : '')} style={{overflow: 'initial'}}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_508_6260)">
                        <path d="M10.5 0C8.24657 0.00242591 6.08613 0.879395 4.49263 2.43852C2.89913 3.99765 2.0027 6.11161 2 8.31665C2 10.4583 3.69472 13.81 7.03732 18.2783C7.43525 18.8117 7.95626 19.2457 8.55797 19.5449C9.15968 19.8441 9.82507 20 10.5 20C11.1749 20 11.8403 19.8441 12.442 19.5449C13.0437 19.2457 13.5648 18.8117 13.9627 18.2783C17.3053 13.81 19 10.4583 19 8.31665C18.9973 6.11161 18.1009 3.99765 16.5074 2.43852C14.9139 0.879395 12.7534 0.00242591 10.5 0ZM10.5 11.6316C9.82626 11.6316 9.16766 11.4362 8.60747 11.0699C8.04727 10.7036 7.61066 10.183 7.35283 9.57393C7.095 8.96484 7.02754 8.29462 7.15898 7.64802C7.29042 7.00142 7.61486 6.40748 8.09126 5.9413C8.56766 5.47513 9.17464 5.15766 9.83543 5.02904C10.4962 4.90042 11.1811 4.96643 11.8036 5.21873C12.4261 5.47102 12.9581 5.89826 13.3324 6.44642C13.7067 6.99459 13.9065 7.63905 13.9065 8.29832C13.9065 9.18237 13.5476 10.0302 12.9087 10.6553C12.2699 11.2805 11.4035 11.6316 10.5 11.6316Z" fill="#414042" fillOpacity="0.4"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_508_6260">
                            <rect width="20" height="20" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                <ClearButton name='city' />


                <input {...register('city', {
                                pattern: {
                                    value: /^[А-яA-ZİĞÜŞÖÇа-яa-zğüşöç]+$/,
                                    message: t('invalid format')
                                }
                        })} type="text" placeholder={t("City or region")} />
                <a className="use-location" onClick={setCityInputLocation}><Text content="Use my location" /></a>
            </div>
        </>
    );
}

export default CityField;