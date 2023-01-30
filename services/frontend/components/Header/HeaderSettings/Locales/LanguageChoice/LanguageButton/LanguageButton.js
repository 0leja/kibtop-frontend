import Link from "next/link";
import { useRouter } from "next/router";

const LanguageButton = ({text, value}) => {
    const {locale, pathname, query, asPath} = useRouter()
    const isSelectedStyle = locale === value ?  'language-btn language-btn--selected' : 'language-btn'

    return (
        <>
            <Link href={{pathname, query}} locale={value} className={isSelectedStyle}>
                    
                {text}
            </Link>
        </>
    );
}

export default LanguageButton;