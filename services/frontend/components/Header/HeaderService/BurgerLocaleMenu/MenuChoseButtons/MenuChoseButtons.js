import LocaleBurgerButtonContainer from "../../Logo/LocaleBurgerButton/LocaleBurgerButtonContainer";
import MenuChoseButtonContainer from "./MenuChoseButton/MenuChoseButtonContainer";

const MenuChoseButtons = ({menu}) => {
    return (
        <>
            <nav className="locale-menu__btns">
                <div className="locale-menu__container">
                    <MenuChoseButtonContainer {...{value: 'currency', text: 'Currency', menu}} />
                    <MenuChoseButtonContainer {...{value: 'language', text: 'language', menu}} />

                    <div className="close">
                        <LocaleBurgerButtonContainer />
                    </div>
                </div>
            </nav>
        </>
    );
}

export default MenuChoseButtons;