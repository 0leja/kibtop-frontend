import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthThunk } from "../../../store/slices/AuthSlice";
import RegSteps from "./RegSteps";

const RegStepsContainer = () => {
    const {isRegistered} = useSelector(state => state.registration)
    const dispatch = useDispatch()

    return <RegSteps {...{isRegistered}} />;
}

export default RegStepsContainer;