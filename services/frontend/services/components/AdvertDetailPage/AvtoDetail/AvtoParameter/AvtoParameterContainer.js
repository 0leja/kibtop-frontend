import { useSelector } from "react-redux";
import AvtoParameter from "./AvtoParameter";

const AvtoParameterContainer = () => {
    const advert = useSelector(state => state.advert)
    return <AvtoParameter {...advert} />;
}

export default AvtoParameterContainer;