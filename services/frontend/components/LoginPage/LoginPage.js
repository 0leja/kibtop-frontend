import LocaleBurgerButtonContainer from "../Header/HeaderService/Logo/LocaleBurgerButton/LocaleBurgerButtonContainer";
import LoginDecoration from "./LoginDecoration/LoginDecoration";
import LoginFormContainer from "./LoginForm/LoginFormContainer";

const LoginPage = () => {
    return (
        <>
            <section className="section section--reg section--login">
                <div className="login-locale">
                    <LocaleBurgerButtonContainer />
                </div>
                <div className="container container--reg">
                    <LoginFormContainer />
                    
                    <LoginDecoration />
                </div>
            </section>
        </>
    );
}

export default LoginPage;