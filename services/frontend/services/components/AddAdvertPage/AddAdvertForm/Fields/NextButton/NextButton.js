import Text from "../../../../Elementes/Text/Text";

const NextButton = ({isDisabled, onClick}) => {
    return (
        <>
            {
                isDisabled ? <>
                    <a className="reg-btn next-btn disabled">
                        <Text content="Next" />
                    </a>
                </> : <>
                    <a {...{onClick}} className="reg-btn next-btn">
                        <Text content="Next" />
                    </a>
                </>
            }
        </>
    );
}

export default NextButton;