import { useDispatch, useSelector } from "react-redux";
import useLocation from "../../../../../../locales/hooks/useLocation";
import { changeLocationFieldValue, setLocationOpen } from "../../../../../../store/slices/LocationSlice";
import ApplyLocationButton from "./ApplyLocationButton";

const ApplyLocationButtonContainer = () => {
    const {locationId, location} = useSelector(state => state.location)
    const {changeLocation} = useLocation()
    const dispatch = useDispatch()

    const isLocationChosed = !!locationId && !!location

    const onLocationApplyClick = () => {
        if(isLocationChosed) {
            changeLocation({city: location, cityId: locationId})
            dispatch(setLocationOpen({bool: false}))
            dispatch(changeLocationFieldValue({val: ''}))
        } 
    }

    return <ApplyLocationButton {...{onLocationApplyClick, isDisabled: !isLocationChosed}} />;
}

export default ApplyLocationButtonContainer;