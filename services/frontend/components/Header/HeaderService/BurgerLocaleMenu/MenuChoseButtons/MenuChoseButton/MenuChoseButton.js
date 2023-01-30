import Text from "../../../../../Elementes/Text/Text";

const MenuChoseButton = ({isActive, text, onChangeMenuClick}) => {
    const isActiveStyle = isActive ? 
                        'locale-menu__btn locale-menu__btn--active' : 'locale-menu__btn'

    return (
        <>
            <button onClick={onChangeMenuClick} className={isActiveStyle}>
                <Text content={text} />
            </button>
        </>
    );
}

export default MenuChoseButton;