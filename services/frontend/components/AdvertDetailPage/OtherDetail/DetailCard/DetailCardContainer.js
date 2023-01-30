import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAdvertSellerThunk } from "../../../../store/slices/AdvertSlice";
import DetailCard from "./DetailCard";

const DetailCardContainer = () => {
    const advert = useSelector(state => state.advert)
    const {seller, userId} = useSelector(state => state.advert)
    const dispatch = useDispatch()

    useEffect(() => {
        if(!!userId) dispatch(setAdvertSellerThunk(userId))
    }, [userId])


    return <DetailCard {...{...advert, phone: seller.phone}} />;
}

export default DetailCardContainer;