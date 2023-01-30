import Link from "next/link";
import Text from "../../../../../Elementes/Text/Text";

const AddAdvertButton = ({isAuthed}) => {
    return (
        <>
            <Link href={isAuthed ? '/add_advert' : '/auth/registration'} className="btn settings-link-text btn--header">
                <svg className="plus-icon" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.0625 6.5625H8.4375V0.9375C8.4375 0.419736 8.01776 0 7.5 0C6.98224 0 6.5625 0.419736 6.5625 0.9375V6.5625H0.9375C0.419736 6.5625 0 6.98224 0 7.5C0 8.01776 0.419736 8.4375 0.9375 8.4375H6.5625V14.0625C6.5625 14.5803 6.98224 15 7.5 15C8.01776 15 8.4375 14.5803 8.4375 14.0625V8.4375H14.0625C14.5803 8.4375 15 8.01776 15 7.5C15 6.98224 14.5803 6.5625 14.0625 6.5625Z" fill="white"/>
                </svg>

                <Text content="Add advert" />
            </Link>
        </>
    );
}

export default AddAdvertButton;