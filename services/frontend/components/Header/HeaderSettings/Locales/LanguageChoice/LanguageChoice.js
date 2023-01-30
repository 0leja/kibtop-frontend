import LanguageButton from "./LanguageButton/LanguageButton";


const LanguageChoice = ({linkPath}) => {
    return (
        <>
            <div className="wrapper">
                <LanguageButton {...{text: 'Türkçe', value: 'tr'}} />
                <LanguageButton {...{text: 'English', value: 'en'}} />
                <LanguageButton {...{text: 'Русский', value: 'ru'}} />
            </div>
        </>
    );
}

export default LanguageChoice;