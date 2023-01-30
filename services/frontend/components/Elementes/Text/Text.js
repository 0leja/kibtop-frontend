import { useLanguage } from "../../../locales/hooks/useLanguage"


const Text = ({content}) => {
    const {t} = useLanguage()

    return (
        <>
            {t(content)}
        </>
    );
}

export default Text;