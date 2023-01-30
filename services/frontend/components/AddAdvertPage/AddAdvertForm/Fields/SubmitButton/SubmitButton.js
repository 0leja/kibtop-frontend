import Text from "../../../../Elementes/Text/Text";

const SubmitButton = ({onSubmitClick, isDisabled, isLoading, isPhoneNull, openAddPhoneModal}) => {
    return (
        <>
            {
                isPhoneNull ? <>
                    <button disabled={isDisabled || isLoading} onClick={openAddPhoneModal} className="reg-btn reg-btn--add reg-btn--grey">
                        <Text content="Publish without promotion" />
                    </button>
                </> : <>
                    <button 
                        onClick={onSubmitClick}
                        disabled={isDisabled || isLoading}
                        className="reg-btn reg-btn--add reg-btn--grey"
                    >
                        {
                            isLoading ? <><Text content="Publishing" />...</> : <Text content="Publish without promotion" />
                        }
                        
                    </button>
                </>
            }
        </>
    );
}

export default SubmitButton;