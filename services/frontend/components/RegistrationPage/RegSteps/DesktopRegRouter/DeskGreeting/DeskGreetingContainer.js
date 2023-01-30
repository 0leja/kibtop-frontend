import { useSelector } from "react-redux";
import DeskGreeting from "./DeskGreeting";

const DeskGreetingContainer = () => {
    const {isConfirmed} = useSelector(state => state.registration)

    return <DeskGreeting {...{isConfirmed}} />;
}

export default DeskGreetingContainer;