import LanguageSelectOption from "./LanguageSelectOption/LanguageSelectOption";

const LanguageSelect = ({language, closeLocaleBurgerMenu}) => {
    return (
        <>
           <div className="modal-select">
                <LanguageSelectOption {...{language, value: 'en', 
                                           text: 'English', closeLocaleBurgerMenu}} />

                <LanguageSelectOption {...{language, value: 'tr', 
                                           text: 'Türkçe', closeLocaleBurgerMenu}} />

                <LanguageSelectOption {...{language, value: 'ru', 
                                           text: 'Русский', closeLocaleBurgerMenu}} />
           </div>
        </>
    );
}

export default LanguageSelect;