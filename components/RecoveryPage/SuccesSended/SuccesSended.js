import Link from "next/link";
import Text from "../../Elementes/Text/Text";
import AltReg from "../../RegistrationPage/RegSteps/AltReg/AltReg";

const SuccesSended = () => {
    return (
        <>
            <article className="greeting">
                <h2 className="reg-title reg-title--rec">
                    <Text content="Password recovery" />
                </h2>

                <div className="greeting__desc greeting__desc--rec">
                    <svg className="greeting__img" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="40" cy="40" r="40" fill="#71CD96"/>
                        <path d="M32.9153 55C31.7799 55.0005 30.6909 54.5472 29.8888 53.7402L20.7384 44.5538C19.7539 43.5647 19.7539 41.9613 20.7384 40.9721C21.7233 39.9833 23.3198 39.9833 24.3047 40.9721L32.9153 49.6199L55.6953 26.7416C56.6802 25.7528 58.2767 25.7528 59.2616 26.7416C60.2461 27.7308 60.2461 29.3342 59.2616 30.3233L35.9419 53.7402C35.1397 54.5472 34.0508 55.0005 32.9153 55Z" fill="white"/>
                    </svg>

                    <div className="greeting__content">
                        <h3 className="greeting__title"><Text content="Ready! Check your email" /></h3>
                        <p className="greeting__text"><Text content="We have sent a password reset link to your email" /></p>
                    </div>
                </div>
                        
                <Link href="/auth/login" className="reg-btn reg-btn--sended"><Text content="Login" /></Link>

                <div className="greeting__bottom">
                    <AltReg />

                    <p className="to-login">
                        <Text content="Don't have an account?" /> <Link className="bigger" href="/auth/registration"><Text content="Sign up" /></Link>
                    </p>
                </div>
            </article>
        </>
    );
}

export default SuccesSended;