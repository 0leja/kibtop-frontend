import Link from "next/link";
import Text from "../../../../Elementes/Text/Text";
import CurrencyTextContainer from "./CurrencyText/CurrencyTextContainer";
import LanguageTextContainer from "./LanguageText/LanguageTextContainer";

const UserMenuFoot = () => {
    return (
        <div className="user-menu__foot">
            <Link href='/support' className="settings-link-text user-menu__support"><Text content="Сontact support" /></Link>
            <Link href='/rules' className="settings-link-text user-menu__support"><Text content="Website advertising" /></Link>
            
            <div className="user-menu__locale">
                <LanguageTextContainer />
                <CurrencyTextContainer />
            </div>
        </div>
    );
}

export default UserMenuFoot;