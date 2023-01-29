import Text from "../../../../../Elementes/Text/Text";

const NextMobRegBtn = ({isError, onNextMobRegClick}) => {
    return (
        <>
            {
                !isError ? <a onClick={onNextMobRegClick} className="reg-btn"><Text content="Next" /></a>
                         : <a className="reg-btn"><Text content="Next" /></a>
            }
            
        </>
    );
}

export default NextMobRegBtn;