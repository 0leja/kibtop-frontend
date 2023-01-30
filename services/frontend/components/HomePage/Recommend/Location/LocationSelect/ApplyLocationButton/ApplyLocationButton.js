import Text from "../../../../../Elementes/Text/Text";

const ApplyLocationButton = ({onLocationApplyClick, isDisabled}) => {
    return (
        <>
            <button disabled={isDisabled} 
                    onClick={onLocationApplyClick} 
                    className="btn btn--hug">
                <Text content="Apply" />
            </button>
        </>
    );
}

export default ApplyLocationButton;