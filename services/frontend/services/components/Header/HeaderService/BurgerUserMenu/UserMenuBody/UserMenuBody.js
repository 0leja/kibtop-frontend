import UserMenuFoot from "../UserMenuFoot/UserMenuFoot";
import UserMenuNavContainer from "./UserMenuNav/UserMenuNavContainer";

const UserMenuBody = ({onClose}) => {
    return (
        <>
            <div className="user-menu__body">
                <UserMenuNavContainer {...{onClose}} />
                <UserMenuFoot />
            </div>
        </>
    );
}

export default UserMenuBody;