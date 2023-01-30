import Link from "next/link";
import { useRouter } from "next/router";
import Text from "../../../../../../Elementes/Text/Text";

const LanguageChoiceOption = ({value, text, style}) => {
    const {locale} = useRouter()

    const isSelected = value == locale
    const isSelectedStyle = isSelected ? ' settings-mobile-select__option--selected' : ''


    return (
        <>
            <Link href="" locale={value} className={"settings-mobile-select__option" + isSelectedStyle} {...{style}}>
                <div className="select-circle" />
                
                {text}
            </Link>
        </>
    );
}

export default LanguageChoiceOption;