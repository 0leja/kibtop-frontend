import { useSelector } from "react-redux";
import DetailParameter from "./DetailParameter";

const DetailParameterContainer = () => {
    const advert = useSelector(state => state.advert)

    return <DetailParameter {...advert} />;
}

export default DetailParameterContainer;