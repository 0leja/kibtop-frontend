import { useSelector } from "react-redux";
import DetailData from "./DetailData";

const DetailDataContainer = () => {
    const advert = useSelector(state => state.advert)

    return <DetailData {...advert} />
}

export default DetailDataContainer;