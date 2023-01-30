import Link from "next/link";
import Text from "../../../../../Elementes/Text/Text";
import Image from "next/image"



const UserMenuAva = ({isAuthed, onClose, avatar, name}) => {
    return (
        <>
            <Link href="/profile/" onClick={onClose} className="user-menu__ava">
                {
                    !isAuthed || !avatar ? <>
                        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 27C0 12.0883 12.0883 0 27 0C41.9117 0 54 12.0883 54 27C54 36.4511 49.1441 44.768 41.7911 49.5918C40.5524 41.8893 33.9556 36.0089 26 36C18.4805 36.0085 12.1748 41.2625 10.4602 48.3426C4.09585 43.4032 0 35.6799 0 27ZM25.5 33C31.299 33 36 28.0751 36 22C36 15.9249 31.299 11 25.5 11C19.701 11 15 15.9249 15 22C15 28.0751 19.701 33 25.5 33Z" fill="white" fillOpacity="0.6"/>
                        </svg>
                    </> : <img width={100} height={100} alt={''} src={avatar}  />
                }
                {
                    !isAuthed ? <p className="user-menu__text user-menu__text--white"><Text content='Guest account' /></p> 
                              : <p className="user-menu__text user-menu__text--white">{name}</p>
                }
            </Link>
        </>
    );
}

export default UserMenuAva;