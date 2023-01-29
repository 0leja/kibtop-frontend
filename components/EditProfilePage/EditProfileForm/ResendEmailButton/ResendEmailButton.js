import Text from "../../../Elementes/Text/Text";

const ResendEmailButton = ({onResendClick, isResending, isDisabled}) => {
    return (
        <>
            {
                (isResending || isDisabled) ? <>
                    <a className="reg-btn reg-btn--resend reg-btn--disabled">
                        <Text content="Resend" />
                    </a>
                </> : <>
                    <a onClick={onResendClick} className="reg-btn reg-btn--resend reg-btn--confirm">
                        <Text content="Resend" />
                    </a>
                </>
            }
        </>
    );
}

export default ResendEmailButton;