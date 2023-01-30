import { useSelector } from "react-redux";
import DesktopRegRouter from "./DesktopRegRouter";

const DesktopRegRouterContainer = () => {
    const {isRegistered} = useSelector(state => state.registration)

    return <DesktopRegRouter {...{isRegistered}} />;
}

export default DesktopRegRouterContainer;