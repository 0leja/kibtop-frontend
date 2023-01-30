import { useRouter } from "next/router"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCategoryAdvertsThunk } from "../../../../store/slices/CategorySlice"
import RealtyAdverts from "../../../AdvertDetailPage/RealEstateDetail/SimilaRealtyAds/RealtyAdverts/RealtyAdverts"
import Adverts from "../../../Adverts/Adverts"

const Realty = () => {
    const {locale, query: {category, page}} = useRouter()
    const {adverts} = useSelector(state => state.category)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategoryAdvertsThunk(category, locale, page))
    }, [category])


    return (
        <>
            <div className="realty-similar">
                <Adverts adverts={adverts} />
            </div>
            <RealtyAdverts adverts={adverts} />
        </>
    );
}

export default Realty;