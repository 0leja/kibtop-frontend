import CurrencySelectContainer from "../../HeaderSettings/Locales/CurrencyChoice/CurrencySelect/CurrencySelectContainer";
import LanguageSelectContainer from "./LanguageSelect/LanguageSelectContainer";
import MenuChoseButtons from "./MenuChoseButtons/MenuChoseButtons";

const BurgerLocaleMenu = ({isOpen, menu, closeLocaleBurgerMenu}) => {
    return (
        <>
            {
                isOpen && (
                    <>
                        <div className="locale-menu">
                            <MenuChoseButtons {...{menu}} />
                            {
                                menu === 'currency' && <CurrencySelectContainer />
                            }
                            {
                                menu === 'language' && <LanguageSelectContainer />
                            }
                        </div>

                        <div className="screen-dimmer screen-dimmer--full" onClick={closeLocaleBurgerMenu} />
                    </>
                )
            }
        </>
    );
}

export default BurgerLocaleMenu;