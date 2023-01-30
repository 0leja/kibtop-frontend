import { useJsApiLoader } from "@react-google-maps/api"
import { useRouter } from "next/router"
import { createContext, useState } from "react"

export const CoogleMapContext = createContext(null)

const libraries = ['places']

const API_KEY = process.env.NEXT_PUBLIC_MAP_API_KEY

export const CoogleMapProvider = ({children}) => {
    const {locale} = useRouter()


    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY,
        libraries,
        language: 'ALl',
        region: 'CY'
      })
    
    return (
        <CoogleMapContext.Provider value={{isLoaded}}>
            {children}
        </CoogleMapContext.Provider>
    );
}