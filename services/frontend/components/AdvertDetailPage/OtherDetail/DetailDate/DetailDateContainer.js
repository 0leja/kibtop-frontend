import { useSelector } from "react-redux";
import DetailDate from "./DetailDate";

const DetailDateContainer = ({className}) => {
    const advert = useSelector(state => state.advert)

    return <DetailDate className={className} {...advert} />;
}

export default DetailDateContainer;