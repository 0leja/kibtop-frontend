
import Link from "next/link";
import Text from "../../../Elementes/Text/Text";
import BurgerButtonContainer from "./BurgerButton/BurgerButtonContainer";
import LocaleBurgerButtonContainer from "./LocaleBurgerButton/LocaleBurgerButtonContainer";
import LogoIcon from "./LogoIcon";

const Logo = () => {
    return (
        <>
            <div className="logo-title">
                <BurgerButtonContainer />

                <div className="logo-title__item">
                    <LogoIcon />
                </div>

                <LocaleBurgerButtonContainer />

                <div className="logo-title__item logo-title__item--desk">
                    <div className="line"></div>
                </div>

                <div className="logo-title__item logo-title__item--desk">
                    <Link href="description" className="desc-link-text desc-link"><Text content="North Cyprus bulletin board" /></Link>
                </div>
            </div>
        </>
    );
}

export default Logo;