import { useSelector } from "react-redux";
import UserMenuNav from "./UserMenuNav";

const UserMenuNavContainer = ({onClose}) => {
    const {isAuthed} = useSelector(state => state.auth)
    
    return <UserMenuNav {...{isAuthed, onClose}} />;
}

export default UserMenuNavContainer;