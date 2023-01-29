import { useDispatch, useSelector } from "react-redux";
import { resendEmailThunk } from "../../../../../../store/slices/RegistrationSlice";
import Confirm from "./Confirm";

const ConfirmContainer = () => {
    const {resendEmail, isResending, isDisabled} = useSelector(state => state.registration.resend)
    const dispatch= useDispatch()

    const onResendClick = () => {
        if(!!resendEmail) dispatch(resendEmailThunk(resendEmail))
    }

    return <Confirm onClick={onResendClick} disabled={isResending || isDisabled} />;
}

export default ConfirmContainer;