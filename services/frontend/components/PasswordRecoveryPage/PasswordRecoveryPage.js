import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Text from "../Elementes/Text/Text";
import LocaleBurgerButtonContainer from "../Header/HeaderService/Logo/LocaleBurgerButton/LocaleBurgerButtonContainer";
import PasswordRecoveryFormContainer from "./PasswordRecoveryForm/PasswordRecoveryFormContainer";

const PasswordRecoveryPage = () => {
    const {isSuccess} = useSelector(state => state.recovery)
    const {push} = useRouter()

    useEffect(() => {
        if(isSuccess) push('/auth/login', '/auth/login', {locale: localStorage.getItem('i18nextLng') || 'en'})
    }, [isSuccess])

    return (
        <>
            <section className="section section--reg section--recovery">
                <div className="login-locale">
                        <LocaleBurgerButtonContainer />
                </div>
                <Link href='/' className="logo-icon logo-icon--recovery">kib<span className="green">t</span>
                                                <span className="yellow">o</span>
                                                <span className="blue">p</span>
                </Link>
                <h1 className="recovery-title"><Text content='Password recovery' /></h1>

                <PasswordRecoveryFormContainer />
            </section>
        </>
    );
}

export default PasswordRecoveryPage;