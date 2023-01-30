import { useSelector } from "react-redux";
import WorkData from "./WorkData";

const WorkDataContainer = () => {
    const  advert = useSelector(state => state.advert)
    return <WorkData {...advert} />;
}

export default WorkDataContainer;