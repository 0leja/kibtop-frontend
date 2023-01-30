import { useSelector } from "react-redux";
import MobileRegRouter from "./MobileRegRouter";

const MobileRegRouterContainer = () => {
    const {isRegistered} = useSelector(state => state.registration)

    return <MobileRegRouter {...{isRegistered}} />;
}

export default MobileRegRouterContainer;