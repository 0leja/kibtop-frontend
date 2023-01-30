import { useSelector } from "react-redux";
import { useLanguage } from "../../../../../../locales/hooks/useLanguage";

import LanguageText from "./LanguageText";

const LanguageTextContainer = () => {
    const {t, lang} = useLanguage();
    const languages = {
        'en': t('English'),
        'ru': t('Russian'),
        'tr': t('Turkish'),
    }

    return <LanguageText text={languages[lang]} />
}

export default LanguageTextContainer;