import Header from "../Header/Header";
import HeaderService from "../Header/HeaderService/HeaderService";
import SettingsNav from "../SettingsPage/SettingsNav";
import EditProfileFormContainer from "./EditProfileForm/EditProfileFormContainer";

const EditProfilePage = ({user}) => {

    return (
        <>
            <Header />
            <HeaderService />
            <main className="main">
                <SettingsNav title="Edit profile" />
                <div className="container">
                    <EditProfileFormContainer user={user} />
                </div>
            </main>
        </>
    );
}

export default EditProfilePage;