import { useSelector } from "react-redux";
import LocaleBurgerButtonContainer from "../Header/HeaderService/Logo/LocaleBurgerButton/LocaleBurgerButtonContainer";
import RegDecoration from "../RegistrationPage/RegSteps/RegDecoration/RegDecoration";
import RecoveryFormContainer from "./RecoveryForm/RecoveryFormContainer";
import SuccesSended from "./SuccesSended/SuccesSended";

const RecoveryPage = () => {

    const {isSended} = useSelector(state => state.recovery)

    return (
        <>
            <section className="section section--reg">
                <div className="login-locale">
                    <LocaleBurgerButtonContainer />
                </div>
                <div className="container container--reg">
                    {
                        isSended ? <SuccesSended /> : <RecoveryFormContainer />
                    }

                    <RegDecoration isConfirmed={true} />
                </div>
            </section>
        </>
    );
}

export default RecoveryPage;