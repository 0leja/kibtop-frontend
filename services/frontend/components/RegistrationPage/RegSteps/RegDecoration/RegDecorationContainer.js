import { useSelector } from "react-redux";
import RegDecoration from "./RegDecoration";

const RegDecorationContainer = () => {
    const {deskStep, isConfirmed} = useSelector(state => state.registration)

    return <RegDecoration {...{deskStep, isConfirmed}} />;
}

export default RegDecorationContainer;