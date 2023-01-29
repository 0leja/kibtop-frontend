import CurrencyChoiceContainer from "./CurrencyChoice/CurrencyChoiceContainer";
import LanguageChoiceContainer from "./LanguageChoice/LanguageChoiceContainer";

const Locales = () => {
    return (
        <>
            <div className="locales">
                <CurrencyChoiceContainer />

                <LanguageChoiceContainer />
            </div>
        </>
    );
}

export default Locales;