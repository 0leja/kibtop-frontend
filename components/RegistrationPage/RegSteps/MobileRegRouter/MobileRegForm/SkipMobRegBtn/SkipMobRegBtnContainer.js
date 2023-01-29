import { useDispatch } from "react-redux";
import { mobileStepIncrement } from "../../../../../../store/slices/RegistrationSlice";
import SkipMobRegBtn from "./SkipMobRegBtn";

const SkipMobRegBtnContainer = ({isError}) => {
    const dispatch = useDispatch()

    const onSkipMobStep = () => dispatch(mobileStepIncrement())

    return <SkipMobRegBtn {...{onSkipMobStep, isError}} />;
}

export default SkipMobRegBtnContainer;