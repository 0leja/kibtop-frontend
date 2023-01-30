import { useSelector } from "react-redux";
import WorkParameter from "./WorkParameter";

const WorkParameterContainer = () => {
    const advert = useSelector(state => state.advert)

    return <WorkParameter {...advert} />;
}

export default WorkParameterContainer;