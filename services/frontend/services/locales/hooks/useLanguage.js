import useTranslation from "next-translate/useTranslation";

export const useLanguage = () => {
    const { t, lang } = useTranslation('common');

    return {t, lang}
}