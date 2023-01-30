import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { useLanguage } from "../../../../../locales/hooks/useLanguage";
import Text from "../../../../Elementes/Text/Text";
import BrandSelect from "./BrandSelect/BrandSelect";
import BrandSelectContainer from "./BrandSelect/BrandSelectContainer";

const BrandField = () => {
    const {t} = useLanguage()
    const {register, formState, getFieldState} = useFormContext()
    const {error, isTouched} = getFieldState('brand', formState)

    const [isSearching, setSearching] = useState(false)
    return (
        <>
        <div className="radio-group">
            <div className={"search search--location search--address" + (!!error ? ' field--error': '')}>
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1082_8060)">
                    <path d="M19.635 17.871L15.7637 13.9984C18.6604 10.1278 17.8706 4.64195 13.9996 1.74552C10.1286 -1.15092 4.64234 -0.361157 1.74566 3.50949C-1.15102 7.38014 -0.361187 12.866 3.50979 15.7624C6.61927 18.0891 10.8901 18.0891 13.9996 15.7624L17.8725 19.635C18.3592 20.1217 19.1483 20.1217 19.635 19.635C20.1217 19.1483 20.1217 18.3593 19.635 17.8727L19.635 17.871ZM8.78697 15.015C5.34663 15.015 2.55772 12.2263 2.55772 8.78624C2.55772 5.34619 5.34663 2.55751 8.78697 2.55751C12.2273 2.55751 15.0162 5.34619 15.0162 8.78624C15.0126 12.2247 12.2258 15.0113 8.78697 15.015Z" fill="#BDBDBD"/>
                </g>
                <defs>
                    <clipPath id="clip0_1082_8060">
                        <rect width="20" height="20" fill="white"/>
                    </clipPath>
                </defs>
            </svg>

                
                <div className="search__field">
                    <input {...register('brand', {
                            required: 'field is required',
                            onChange: () => {if(!isSearching) setSearching(true)}
                        })}
                        placeholder={t("Brand name")} 
                        type="text" />
                </div>
                { (!!error && isTouched && !!error.message) && <p className="warn warn--absolute"><Text content={error.message} /></p> }
            </div>
            
            <div className="address-select">
                <BrandSelectContainer {...{onSearchSelect: () => setSearching(false), isSearching}}  />
            </div>
        </div>
            
        </>
    );
}

export default BrandField;