import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSimilarAdvertsThunk } from "../../../../store/slices/AdvertSlice";
import Adverts from "../../../Adverts/Adverts";
import AdvertsContainer from "../../../Adverts/AdvertsContainer";
import Text from "../../../Elementes/Text/Text";
import RealtyAdverts from "./RealtyAdverts/RealtyAdverts";
import RealtyAdvertsContainer from "./RealtyAdverts/RealtyAdvertsContainer";

const SimilaRealtyAds = () => {
    const { query: {category}, locale} = useRouter()

    const {similarAdverts} = useSelector(state => state.advert)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSimilarAdvertsThunk(category, locale))
    }, [])

    return (
        <>
            <div className="container">
                <h4 className="detail-title detail-title--similar">
                        <Text content="Similar ads" />
                </h4>
            </div>
            
            <div className="realty-similar">
                <Adverts adverts={similarAdverts} />
            </div>
            <RealtyAdverts adverts={similarAdverts} />
            
        </>
    );
}

export default SimilaRealtyAds;