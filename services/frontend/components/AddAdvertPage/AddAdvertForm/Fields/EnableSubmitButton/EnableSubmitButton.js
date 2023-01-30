import Text from "../../../../Elementes/Text/Text";

const EnableSubmitButton = ({onSubmitClick, isDisabled, isPhoneNull, openAddPhoneModal}) => {
    return (
        <>
            {
                isPhoneNull ? <>
                    <button disabled={isDisabled} onClick={openAddPhoneModal} className="reg-btn reg-btn--max-content">
                        <Text content="Enable" />
                    </button>
                </> : <>
                    <button disabled={isDisabled} onClick={onSubmitClick} className="reg-btn reg-btn--max-content">
                        <Text content="Enable" />
                    </button>
                </>
            }
            
        </>
    );
}

export default EnableSubmitButton;