import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../../store/slices/AuthSlice";
import LoginForm from "./LoginForm";

const LoginFormContainer = () => {
    const {push} = useRouter()
    const dispatch = useDispatch()
    const {isLoading, error} = useSelector(state => state.login)
    const {isAuthed} = useSelector(state => state.auth)

    const seriealizeErrors = (errors) => ({
        name: Object.keys(errors)[0],
        message: errors[Object.keys(errors)[0]]?.message
    })

    const onLoginSubmit = data => {
        const {email, password1} = data

        dispatch(loginThunk(email, password1))
    }

    useEffect(() => {
        if(isAuthed) push('/')
    }, [isAuthed])

    return <LoginForm {...{seriealizeErrors, onLoginSubmit, isLoading, error}} />;
}

export default LoginFormContainer;