import AddAdvertButtonContainer from "./AddAdvertButton/AddAdvertButtonContainer";
import UserButtonsContainer from "./UserButtons/UserButtonsContainer";

const Auth = () => {
    return (
        <>
            <div className="auth">
                <AddAdvertButtonContainer />

                <UserButtonsContainer />
            </div>
        </>
    );
}

export default Auth;