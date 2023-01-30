import Text from "../../../../../../Elementes/Text/Text";

const NextRegBtn = ({isError, onNextDeskStep}) => {
    return (
        <>
            {
                !isError ? <a onClick={onNextDeskStep} className="reg-btn"><Text content="Next" /></a> 
                         : <a className="reg-btn"><Text content="Next" /></a> 
            }
            
        </>
    );
}

export default NextRegBtn;