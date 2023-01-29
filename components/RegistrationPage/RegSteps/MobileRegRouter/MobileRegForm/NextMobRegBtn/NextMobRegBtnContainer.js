import { useDispatch } from "react-redux";
import { mobileStepIncrement } from "../../../../../../store/slices/RegistrationSlice";
import NextMobRegBtn from "./NextMobRegBtn";

const NextMobRegBtnContainer = ({isError}) => {
    const dispatch = useDispatch()
    
    const onNextMobRegClick = () => dispatch(mobileStepIncrement())

    return <NextMobRegBtn {...{isError, onNextMobRegClick}} />;
}

export default NextMobRegBtnContainer;