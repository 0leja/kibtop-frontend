import Link from "next/link";
import { useRouter } from "next/router";

const UserLanguageOption = ({value, text}) => {
    const {locale, pathname, query} = useRouter()

    const isSelected = value == locale
    const isSelectedStyle = isSelected ? ' profile-select__option--selected' : ''

    return (
        <>
            <Link href={{pathname, query}} locale={value} className={'profile-select__option' + isSelectedStyle}>
                <p>{text}</p>

                {isSelected && (
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.45766 17.3327C5.88994 17.3329 5.34547 17.1037 4.94438 16.6956L0.369217 12.0496C-0.123072 11.5493 -0.123072 10.7384 0.369217 10.2381C0.861665 9.73803 1.65992 9.73803 2.15237 10.2381L6.45766 14.6117L17.8476 3.04109C18.3401 2.54099 19.1383 2.54099 19.6308 3.04109C20.1231 3.54135 20.1231 4.35226 19.6308 4.85252L7.97094 16.6956C7.56984 17.1037 7.02538 17.3329 6.45766 17.3327Z" fill="#65A4FE"/>
                    </svg>                    
                )}
            </Link>
        </>
    );
}

export default UserLanguageOption;