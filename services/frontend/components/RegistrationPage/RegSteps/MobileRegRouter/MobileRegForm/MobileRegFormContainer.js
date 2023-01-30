import { useDispatch, useSelector } from "react-redux";
import { registrationThunk } from "../../../../../store/slices/AuthSlice";
import { setMobileStep } from "../../../../../store/slices/RegistrationSlice";
import MobileRegForm from "./MobileRegForm";

const MobileRegFormContainer = () => {
    const {mobileStep, isLoading, error} = useSelector(state => state.registration)
    const dispatch = useDispatch()

    const seriealizeErrors = (errors) => ({
        name: Object.keys(errors)[0],
        message: errors[Object.keys(errors)[0]]?.message
    })

    const setErrorStep = step => dispatch(setMobileStep({step}))

    const onRegistrationSubmit = data => {
        const {email, password1, password2, name, city, file} = data
        dispatch(registrationThunk(email, password1, password2, name, city, file[0]))
    }

    return <MobileRegForm {...{mobileStep, seriealizeErrors, error, setErrorStep,
                                isLoading, onRegistrationSubmit}} />;
}

export default MobileRegFormContainer;