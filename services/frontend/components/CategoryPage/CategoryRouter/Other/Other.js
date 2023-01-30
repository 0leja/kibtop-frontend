import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryAdvertsThunk } from "../../../../store/slices/CategorySlice";
import Adverts from "../../../Adverts/Adverts";

const Other = () => {
    const {locale, query: {category, page}} = useRouter()
    const {adverts} = useSelector(state => state.category)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategoryAdvertsThunk(category, locale, page))
    }, [category])

    

    return <Adverts adverts={adverts} />;
}

export default Other;