import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { confirmRecoveryThunk } from "../../../store/slices/RecoverySlice";
import PasswordRecoveryForm from "./PasswordRecoveryForm";

const PasswordRecoveryFormContainer = () => {
    const {query: {uid, token}} = useRouter()

    const {isError, isLoading} = useSelector(state => state.recovery)
    const dispatch = useDispatch()
    const onPasswordRecoverySubmit = data => {
        const {new_password, re_new_password} = data

        dispatch(confirmRecoveryThunk({new_password, re_new_password, uid, token}))
    }

    return <PasswordRecoveryForm {...{onPasswordRecoverySubmit, isError, isLoading}} />;
}

export default PasswordRecoveryFormContainer;