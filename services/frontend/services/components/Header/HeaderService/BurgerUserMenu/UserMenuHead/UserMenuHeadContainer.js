import { useEffect } from "react";
import { useSelector } from "react-redux";
import UserMenuHead from "./UserMenuHead";

const UserMenuHeadContainer = ({onClose}) => {
    const {isAuthed} = useSelector(state => state.auth)

    useEffect(() => {

    }, [isAuthed])

    return <UserMenuHead {...{isAuthed, onClose}} />;
}

export default UserMenuHeadContainer;