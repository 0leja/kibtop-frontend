import { useFormContext } from "react-hook-form";
import { useLanguage } from "../../../../../locales/hooks/useLanguage";
import AddressSelectContainer from "./AddressSelect/AddressSelectContainer";

import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
    
  } from "use-places-autocomplete";
  import useOnclickOutside from "react-cool-onclickoutside";
import { useEffect } from "react";

const AddressField = ({isLoaded}) => {
    const {t} = useLanguage()
    const form = useFormContext()
    const {ready, value, init, suggestions: { status, data }, setValue, clearSuggestions
        } = usePlacesAutocomplete({
            initOnMount: false,
            debounce: 300,
        });
      
    const ref = useOnclickOutside(() => {
        clearSuggestions();
      });
    
    const handleInput = (e) => {
        setValue(e.target.value)

        form.setValue('geocode', null)
        form.setValue('address', null)
        form.setValue('city', null)
    }
    
    const handleSelect = (place) => () => {
        const {description, structured_formatting: {main_text}, terms} = place
        clearSuggestions();


        setValue(description, false);


        form.setValue('address', main_text, {shouldTouch: true, shouldValidate: true})

        form.setValue('city',  terms[terms.length - 1].value, {shouldTouch: true, shouldValidate: true})

        getGeocode({ address: description })
            .then((results) => {
                const { lat, lng } = getLatLng(results[0]);
                form.setValue('geocode', `${lat} ${lng}`, {shouldTouch: true, shouldValidate: true})
                console.log("📍 Coordinates: ", { lat, lng });
            });
    };
    
    const {formState, getFieldState, register} = form

    const {error} = getFieldState('geocode', formState)

    useEffect(() => {
        if(isLoaded) init()
    }, [isLoaded])

    return (
        <>
            <input {...register('geocode', {
                    required: t('field is required')
                })} type="text" hidden={true} />
            <input {...register('address', {
                    required: t('field is required')
                })} type="text" hidden={true} />
            <input {...register('city', {
                    required: t('field is required')
                })} type="text" hidden={true} />

            <div className="radio-group" ref={ref}>
                <div className={"search search--location search--address" + (!!error ? ' field--error': '')}>
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_471_4033)">
                            <g clipPath="url(#clip1_471_4033)">
                                <path d="M10.0001 0.0349121C7.79507 0.037338 5.68101 0.914308 4.12173 2.47344C2.56245 4.03256 1.68526 6.14653 1.68262 8.35158C1.68262 10.4932 3.34095 13.8449 6.61178 18.3132C7.00117 18.8467 7.511 19.2807 8.09979 19.5798C8.68857 19.879 9.33968 20.0349 10.0001 20.0349C10.6606 20.0349 11.3117 19.879 11.9004 19.5798C12.4892 19.2807 12.9991 18.8467 13.3885 18.3132C16.6593 13.8449 18.3176 10.4932 18.3176 8.35158C18.315 6.14653 17.4378 4.03256 15.8785 2.47344C14.3192 0.914308 12.2052 0.037338 10.0001 0.0349121ZM10.0001 11.6666C9.34085 11.6666 8.69638 11.4711 8.14822 11.1048C7.60005 10.7385 7.17281 10.2179 6.92052 9.60886C6.66823 8.99977 6.60222 8.32955 6.73083 7.68294C6.85945 7.03634 7.17692 6.4424 7.64309 5.97622C8.10927 5.51005 8.70321 5.19258 9.34982 5.06396C9.99642 4.93534 10.6666 5.00136 11.2757 5.25365C11.8848 5.50594 12.4054 5.93318 12.7717 6.48135C13.138 7.02951 13.3335 7.67397 13.3335 8.33325C13.3335 9.2173 12.9823 10.0651 12.3571 10.6903C11.732 11.3154 10.8842 11.6666 10.0001 11.6666Z" fill="#414042" fillOpacity="0.4"/>
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_471_4033">
                                <rect width="20" height="20" fill="white"/>
                            </clipPath>
                            <clipPath id="clip1_471_4033">
                                <rect width="20" height="20" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>


                    
                    <div className="search__field">
                        <input 

                            value={value}
                            onChange={handleInput}
                            disabled={!ready}
                            placeholder={t("City or region")} 
                            type="text" />
                    </div>
                    { (!!error) && <p className="warn warn--absolute">{error.message}</p> }
                </div>
                <div className="address-select">
                    {status === "OK" && <AddressSelectContainer {...{data, setAddressChoice: handleSelect}} />}
                </div>
                
            </div>
            
        </>
    );
}

export default AddressField;