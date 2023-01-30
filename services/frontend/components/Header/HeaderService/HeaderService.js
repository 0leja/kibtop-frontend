
import AddAdvertMobileButton from "./AddAdvertMobileButton/AddAdvertMobileButton";
import BurgerLocaleMenuContainer from "./BurgerLocaleMenu/BurgerLocaleMenuContainer";
import BurgerUserMenuContainer from "./BurgerUserMenu/BurgerUserMenuContainer";
import Logo from "./Logo/Logo";
import MobileFilterButtonContainer from "./Services/SearchProducts/MobileFilterButton/MobileFilterButtonContainer";
import Services from "./Services/Services";
import useHideMobilePages from "./useHideMobilePages";

const HeaderService = () => {

    const ExceptionStyle = useHideMobilePages()

    return (
        <>
            <div className={"header__service" + ExceptionStyle}>
                <div className="container container--header">
                    <Logo />
                    <Services />
                </div>
            </div>
            
        </>
        
    );
}

export default HeaderService;