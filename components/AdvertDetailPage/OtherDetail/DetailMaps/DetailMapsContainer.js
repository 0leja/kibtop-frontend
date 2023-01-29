import { useSelector } from "react-redux";
import DetailMaps from "./DetailMaps";

const DetailMapsContainer = () => {
    const advert = useSelector(state => state.advert)
    
    return <DetailMaps {...advert} />;
}

export default DetailMapsContainer;