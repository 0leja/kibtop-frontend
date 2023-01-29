import Link from "next/link";
import { useLanguage } from "../../locales/hooks/useLanguage";
import { decrypt, encrypt } from "../../services/tools/crypto";
import Text from "../Elementes/Text/Text";
import RegNavContainer from "./RegNav/RegNavContainer";
import RegDecorationContainer from "./RegSteps/RegDecoration/RegDecorationContainer";
import RegStepsContainer from "./RegSteps/RegStepsContainer";

const RegistrationPage = () => {
    const {t} = useLanguage()

    

    return (
        <>
            <section className="section section--reg">
                <RegNavContainer />

                <div className="container container--reg">
                    <RegStepsContainer />


                    <RegDecorationContainer />
                </div>
            </section>
        </>
    );
}

export default RegistrationPage;