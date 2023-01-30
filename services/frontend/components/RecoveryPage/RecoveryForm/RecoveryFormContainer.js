import { useDispatch, useSelector } from "react-redux"
import { sendRecoveryLinkThunk } from "../../../store/slices/RecoverySlice"
import RecoveryForm from "./RecoveryForm"

const RecoveryFormContainer = () => {
    const {isLoading, isUserFail} = useSelector(state => state.recovery)
    const dispatch = useDispatch()

    const onRecoverySubmit = data => {
        const {email} = data
        dispatch(sendRecoveryLinkThunk(email))
    }


    return <RecoveryForm {...{isLoading, onRecoverySubmit, isUserFail}} />;
}

export default RecoveryFormContainer;