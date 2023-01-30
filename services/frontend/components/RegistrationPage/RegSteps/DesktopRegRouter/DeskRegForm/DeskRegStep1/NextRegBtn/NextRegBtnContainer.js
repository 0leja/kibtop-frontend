import { useDispatch } from "react-redux";
import { deskStepIncrement } from "../../../../../../../store/slices/RegistrationSlice";
import NextRegBtn from "./NextRegBtn";

const NextRegBtnContainer = ({isError}) => {
    const dispatch = useDispatch()

    const onNextDeskStep = () => {
        dispatch(deskStepIncrement())
    }

    return <NextRegBtn {...{isError, onNextDeskStep}} />;
}

export default NextRegBtnContainer;