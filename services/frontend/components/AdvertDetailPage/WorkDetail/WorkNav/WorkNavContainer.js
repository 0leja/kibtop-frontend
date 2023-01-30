import { useSelector } from "react-redux";
import WorkNav from "./WorkNav";

const WorkNavContainer = () => {
    const advert = useSelector(state => state.advert)
    return <WorkNav {...advert} />;
}

export default WorkNavContainer;