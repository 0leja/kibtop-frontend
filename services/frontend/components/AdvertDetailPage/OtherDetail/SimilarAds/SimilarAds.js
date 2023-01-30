import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSimilarAdvertsThunk } from "../../../../store/slices/AdvertSlice";
import Adverts from "../../../Adverts/Adverts";
import AdvertsContainer from "../../../Adverts/AdvertsContainer";
import Text from "../../../Elementes/Text/Text";
import RealtyAdverts from "../../RealEstateDetail/SimilaRealtyAds/RealtyAdverts/RealtyAdverts";
import RealtyAdvertsContainer from "../../RealEstateDetail/SimilaRealtyAds/RealtyAdverts/RealtyAdvertsContainer";

const SimilarAds = () => {
    const { query: {category}, locale } = useRouter()

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
            

            <Adverts adverts={similarAdverts} />
        </>
    );
}

export default SimilarAds;