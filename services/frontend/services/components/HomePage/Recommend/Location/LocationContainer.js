import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useLocation from "../../../../locales/hooks/useLocation";
import { getCitiesThunk, setLocationOpen } from "../../../../store/slices/LocationSlice";
import Location from "./Location";

const LocationContainer = () => {
    const {locale} = useRouter()
    const { isOpen, cities } = useSelector(state => state.location)
    const dispatch = useDispatch()
    const {location} = useLocation()
    
    const closeLocationSelect = () => dispatch(setLocationOpen({bool: false}))
    const openLocationSelect = () => dispatch(setLocationOpen({bool: true}))
    
    return <Location {...{isOpen, location, closeLocationSelect, openLocationSelect}} />;
}

export default LocationContainer;