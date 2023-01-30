import { useDispatch, useSelector } from "react-redux";
import useLocation from "../../../../../../locales/hooks/useLocation";
import {changeLocationFieldValue, changeLocationState, setLocationOpen } from "../../../../../../store/slices/LocationSlice";
import LocationSelectOptions from "./LocationSelectOptions";

const LocationSelectOptionsContainer = () => {
    const {cities, locationFieldValue, locationId, location} = useSelector(state => state.location)
    const dispatch = useDispatch()
    const {changeLocation} = useLocation()

    const filteredCities = cities.filter(({city}, index) => (city.toLowerCase()
                                                            .includes(locationFieldValue.toLowerCase())
                                                            )).slice(0, 3)

    const chooseLocation = (city, cityId) => {
        dispatch(changeLocationState({city, cityId}))
    }

    const chooseSetLocation = (city, cityId) => {
        dispatch(changeLocationState({city, cityId}))
        changeLocation({city: city, cityId: cityId})
        dispatch(setLocationOpen({bool: false}))
        dispatch(changeLocationFieldValue({val: ''}))
    }

    return <LocationSelectOptions cities={filteredCities} chooseLocation={chooseLocation} chooseSetLocation={chooseSetLocation} />;
}

export default LocationSelectOptionsContainer;