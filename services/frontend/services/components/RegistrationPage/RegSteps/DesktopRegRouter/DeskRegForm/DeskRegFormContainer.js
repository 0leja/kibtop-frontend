import { useDispatch, useSelector } from "react-redux";
import { registrationThunk } from "../../../../../store/slices/AuthSlice";
import { setDeskStep } from "../../../../../store/slices/RegistrationSlice";
import DeskRegForm from "./DeskRegForm";

const DeskRegFormContainer = () => {
    const {deskStep, isLoading, error} = useSelector(state => state.registration)
    const dispatch = useDispatch()

    const onRegistrationSubmit = data => {
        const {email, password1, password2, name, city, file} = data
        dispatch(registrationThunk(email, password1, password2, name, city, file[0]))
    }

    const setErrorStep = step => dispatch(setDeskStep({step}))

    const seriealizeErrors = (errors) => ({
        name: Object.keys(errors)[0],
        message: errors[Object.keys(errors)[0]]?.message
    })

    const firstStepStyle = {display: (deskStep === 1 ? 'flex' : 'none')}
    const secondStepStyle = {display: (deskStep === 2 ? 'flex' : 'none')}

    return <DeskRegForm {...{deskStep, isLoading, firstStepStyle, secondStepStyle, 
                            seriealizeErrors, onRegistrationSubmit, error, setErrorStep}} />;
}

export default DeskRegFormContainer;