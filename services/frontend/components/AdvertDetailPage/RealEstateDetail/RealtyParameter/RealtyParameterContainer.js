import { useSelector } from "react-redux";
import RealtyParameter from "./RealtyParameter";

const RealtyParameterContainer = () => {
    const advert = useSelector(state => state.advert)

    return <RealtyParameter {...advert} />;
}

export default RealtyParameterContainer;