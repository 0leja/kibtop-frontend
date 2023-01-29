import Link from "next/link";
import { useSelector } from "react-redux";
import Text from "../../../Elementes/Text/Text";

const AddAdvertMobileButton = () => {
    const {isAuthed} = useSelector(state => state.auth)
    return (
        <div className="add-advert-mobile-area">
            <Link href={isAuthed ? '/add_advert' : 'auth/registration'} className="add-advert-mobile">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_763_8330)">
                        <path d="M15 7H9V1C9 0.447719 8.55228 0 8 0C7.44772 0 7 0.447719 7 1V7H1C0.447719 7 0 7.44772 0 8C0 8.55228 0.447719 9 1 9H7V15C7 15.5523 7.44772 16 8 16C8.55228 16 9 15.5523 9 15V9H15C15.5523 9 16 8.55228 16 8C16 7.44772 15.5523 7 15 7Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_763_8330">
                            <rect width="16" height="16" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>

                <Text content="Add advert"/>
            </Link>
        </div>
    );
}

export default AddAdvertMobileButton;