import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Text from "../../../../components/Elementes/Text/Text";
import Header from "../../../../components/Header/Header";
import Access from "../../../../components/RegistrationPage/RegSteps/DesktopRegRouter/DeskGreeting/Access/Access";
import RegDecoration from "../../../../components/RegistrationPage/RegSteps/RegDecoration/RegDecoration";
import { RecoveryApi } from "../../../../services/RecoveryApi";
import { clearUserData, getUserData } from "../../../../services/tools/crypto";
import { loginThunk } from "../../../../store/slices/AuthSlice";
import { activateEmailThunk } from "../../../../store/slices/RecoverySlice";

const EmailConfirm = () => {
    const dispatch = useDispatch()
    const {query: {uid, token}, pathname, query, asPath, push} = useRouter()
    const {isAuthed} = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(activateEmailThunk({uid, token}))
        
        push({
            pathname, query
        }, asPath, {locale: localStorage.getItem('i18nextLng') || 'en'})
    }, [])

    return (
        <>
            <Header/>
            <section className="section section--reg">
                <div className="container container--reg">
                <article className="greeting">
                <h2 className="reg-title">
                    <span className="reg-title__line"><Text content="Create new" /></span>
                    <span className="reg-title__line"><Text content="account" /></span>
                </h2>

                <div className="greeting__desc">
                    <svg className="greeting__img" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="40" cy="40" r="40" fill="#71CD96"/>
                        <path d="M32.9153 55C31.7799 55.0005 30.6909 54.5472 29.8888 53.7402L20.7384 44.5538C19.7539 43.5647 19.7539 41.9613 20.7384 40.9721C21.7233 39.9833 23.3198 39.9833 24.3047 40.9721L32.9153 49.6199L55.6953 26.7416C56.6802 25.7528 58.2767 25.7528 59.2616 26.7416C60.2461 27.7308 60.2461 29.3342 59.2616 30.3233L35.9419 53.7402C35.1397 54.5472 34.0508 55.0005 32.9153 55Z" fill="white"/>
                    </svg>

                    <div className="greeting__content">
                        <h3 className="greeting__title"><Text content="Ready! Welcome to kibtop" /></h3>
                        <p className="greeting__text"><Text content="Now you can place your ad or buy products" /></p>
                    </div>
                </div>
                        
                {
                    isAuthed ? <>
                        <Link href="/" className="reg-btn"><Text content="Watch ads" /></Link>
                        <Link href="/" className="reg-btn reg-btn--free"><Text content="Place ad" /></Link>
                    </> : <Link href="/auth/login" className="reg-btn"><Text content="Login" /></Link>
                }
                
            </article>


                    <RegDecoration isConfirmed={true} />
                </div>
            </section>
        </>
    );
}

export async function getServerSideProps(context) {
    const {params: {uid, token}} = context
    
    
    // await RecoveryApi.confirmEmail(uid, token)


    return {
        props: {}
    }
}

export default EmailConfirm;