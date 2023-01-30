import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setLocaleOpen } from "../../../../../store/slices/LocaleSlice";
import LanguageSelect from "./LanguageSelect";

const LanguageSelectContainer = () => {
    const {locale} = useRouter()

    const dispatch = useDispatch()

    const closeLocaleBurgerMenu = () => dispatch(setLocaleOpen({bool: false}))

    return <LanguageSelect {...{language: locale, closeLocaleBurgerMenu}} />
}

export default LanguageSelectContainer;