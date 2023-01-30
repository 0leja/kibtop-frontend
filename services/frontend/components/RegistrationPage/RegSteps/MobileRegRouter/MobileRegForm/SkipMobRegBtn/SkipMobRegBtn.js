import Text from "../../../../../Elementes/Text/Text";

const SkipMobRegBtn = ({onSkipMobStep, isError}) => {
    return (
        <>
            {
                !isError ? <a onClick={onSkipMobStep} className="reg-btn reg-btn--free"><Text content="Skip" /></a>
                         : <a className="reg-btn reg-btn--free"><Text content="Skip" /></a>
            }
            
        </>
    );
}

export default SkipMobRegBtn;