import { useDispatch, useSelector } from "react-redux";
import { resendEmailThunk } from "../../../../store/slices/RegistrationSlice";
import ResendEmailButton from "./ResendEmailButton";

const ResendEmailButtonContainer = () => {
    const {resendEmail} = useSelector(state => state.profile)
    const {isResending, isDisabled} = useSelector(state => state.registration.resend)
    const dispatch= useDispatch()

    const onResendClick = () => {
        if(!!resendEmail) dispatch(resendEmailThunk(resendEmail))
    }

    return <ResendEmailButton {...{isResending, isDisabled, onResendClick}} />;
}

export default ResendEmailButtonContainer;