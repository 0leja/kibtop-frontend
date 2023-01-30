import axios from "axios";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import { LocationApi } from "../services/LocationApi";

export const LocationContext = createContext(null)

export const LocationProvider = ({children}) => {
    const {locale} = useRouter()
    const [location, setLocation] = useState(null)

    const changeLocation = ({city, cityId}) => {
        localStorage.setItem('location', cityId)
        setLocation(city)
    }

    const checkcity = async (cityId) => {
        const city = await LocationApi.getCityById(cityId, locale)
        if(!!city) {
            changeLocation(city)
        }
    }

    useEffect(() => {
        const cityId = parseInt(localStorage.getItem('location'))
        if(!!cityId) checkcity(cityId)
    }, [locale])
        
    return (
        <>
            <LocationContext.Provider value={{location, changeLocation}}>
                {children}
            </LocationContext.Provider>
        </>
    );
}