import Link from "next/link";
import Text from "../../../../../Elementes/Text/Text";

const UserMenuNav = ({isAuthed, onClose}) => {
    const isAuthedStyle = isAuthed ? 'user-menu__text user-menu__item user-menu__item--authed' : 'user-menu__text user-menu__item'

    return (
        <nav>
            <Link href={isAuthed ? "/favorites" : "/auth/registration"} onClick={onClose} className={isAuthedStyle}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.2269 1C17.0544 1.01799 15.9074 1.34088 14.9019 1.93606C13.8964 2.53123 13.0679 3.37762 12.5 4.38975C11.9321 3.37762 11.1036 2.53123 10.0981 1.93606C9.09256 1.34088 7.94564 1.01799 6.77314 1C4.90404 1.08011 3.14305 1.88673 1.87489 3.24364C0.606735 4.60055 -0.0655042 6.39744 0.00504078 8.24175C0.00504078 15.201 11.4129 23.2388 11.8982 23.5799L12.5 24L13.1018 23.5799C13.5871 23.2409 24.995 15.201 24.995 8.24175C25.0655 6.39744 24.3933 4.60055 23.1251 3.24364C21.8569 1.88673 20.096 1.08011 18.2269 1Z"/>
                </svg>

                <Text content="Favorites" />
            </Link>

            <Link href={isAuthed ? "/messages" : "/auth/registration"} onClick={onClose} className={isAuthedStyle}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.9521 6L16.1833 14.6793C15.2056 15.6447 13.881 16.1868 12.5 16.1868C11.119 16.1868 9.7944 15.6447 8.81667 14.6793L0.0479167 6C0.0333333 6.16291 0 6.31034 0 6.47222V18.8448C0.00165402 20.2115 0.550919 21.5218 1.52731 22.4883C2.50371 23.4547 3.82751 23.9984 5.20833 24H19.7917C21.1725 23.9984 22.4963 23.4547 23.4727 22.4883C24.4491 21.5218 24.9983 20.2115 25 18.8448V6.47222C25 6.31034 24.9667 6.16291 24.9521 6Z" />
                    <path d="M14.668 13.0828L24 3.52309C23.5479 2.7553 22.9103 2.11978 22.1487 1.67784C21.3871 1.2359 20.5271 1.00245 19.6517 1H5.34826C4.47291 1.00245 3.61294 1.2359 2.85131 1.67784C2.08967 2.11978 1.45207 2.7553 1 3.52309L10.332 13.0828C10.9078 13.6702 11.6873 14 12.5 14C13.3127 14 14.0922 13.6702 14.668 13.0828Z" />
                </svg>

                <Text content="Messages" />
            </Link>

            <div className="user-menu__line"></div>

            <Link href={isAuthed ? "/add_advert" : "/auth/registration"} onClick={onClose} className={'user-menu__text user-menu__item'}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12.5" cy="12.5" r="12.5" fill="#7AB1FF"/>
                    <g clipPath="url(#clip0_402_1705)">
                        <path d="M18.125 11.125H12.875V5.875C12.875 5.39175 12.4832 5 12 5C11.5168 5 11.125 5.39175 11.125 5.875V11.125H5.875C5.39175 11.125 5 11.5168 5 12C5 12.4832 5.39175 12.875 5.875 12.875H11.125V18.125C11.125 18.6082 11.5168 19 12 19C12.4832 19 12.875 18.6082 12.875 18.125V12.875H18.125C18.6082 12.875 19 12.4832 19 12C19 11.5168 18.6082 11.125 18.125 11.125Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_402_1705">
                            <rect width="14" height="14" fill="white" transform="translate(5 5)"/>
                        </clipPath>
                    </defs>
                </svg>

                <Text content="Add advert" />
            </Link>
        </nav>
    );
}

export default UserMenuNav;