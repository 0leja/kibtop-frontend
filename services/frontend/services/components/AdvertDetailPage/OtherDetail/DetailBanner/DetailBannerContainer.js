import { useState } from "react";
import { useSelector } from "react-redux";
import DetailBanner from "./DetailBanner";
import DetailBannerState from "./DetailBannerState";

const DetailBannerContainer = () => {
    const [offset, setOffset] = useState(0);
    const {uploads} = useSelector(state => state.advert)
    const items = [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
    ]

    return <DetailBannerState {...{offset, setOffset, items: uploads}} />;
}

export default DetailBannerContainer;