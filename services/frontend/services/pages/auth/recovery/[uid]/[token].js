import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../../../../components/Header/Header";
import PasswordRecoveryPage from "../../../../components/PasswordRecoveryPage/PasswordRecoveryPage";

const PasswordReset = () => {
    const {query: {uid, token}, pathname, query, asPath, push} = useRouter()

    useEffect(() => {
        push({
            pathname, query
        }, asPath, {locale: localStorage.getItem('i18nextLng') || 'en'})
    }, [])
    
    return (
        <>
            <Header />
            <PasswordRecoveryPage />
        </>
    );
}

export default PasswordReset;