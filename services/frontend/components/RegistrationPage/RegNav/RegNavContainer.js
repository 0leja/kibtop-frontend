import { useDispatch, useSelector } from "react-redux";
import { mobileStepDecrement } from "../../../store/slices/RegistrationSlice";
import RegNav from "./RegNav";

const RegNavContainer = () => {
    const {mobileStep} = useSelector(state => state.registration)
    const dispatch = useDispatch()

    const onBackClick = () => dispatch(mobileStepDecrement())

    return <RegNav {...{onBackClick, mobileStep}} />;
}

export default RegNavContainer;