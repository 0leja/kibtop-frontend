import Link from "next/link";
import { useDispatch } from "react-redux";
import { setDeletingOpen } from "../../store/slices/ProfileSlice";
import Text from "../Elementes/Text/Text";
import DeleteAccountButtonContainer from "./DeleteAccountButton/DeleteAccountButtonContainer";
import SettingsNav from "./SettingsNav";

const Settings = () => {
    const dispatch = useDispatch()
    const closeDeletingAccount = () => dispatch(setDeletingOpen(false))
    return (
        <>
            <main className="main">
                <SettingsNav title={'Settings'} onClick={closeDeletingAccount} />

                <div className="container">
                    <nav className="settings">
                        <Link href="/profile/settings/locale" className="settings__link">
                            <Text content="language and currency" />
                        </Link>

                        <Link href="" className="settings__link">
                            <Text content="Website advertising" />
                        </Link>

                        <Link href="" className="settings__link">
                            <Text content="Сontact support" />
                        </Link>

                        <DeleteAccountButtonContainer />
                    </nav>
                </div>
            </main>
        </>
    );
}

export default Settings;