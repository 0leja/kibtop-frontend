import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAdvertDataThunk } from "../../store/slices/AdvertSlice";

const AdvertDataContainer = ({children}) => {
    const {query: {category, advertId}, locale} = useRouter()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setAdvertDataThunk(advertId, category, locale))
    }, [category, advertId, locale])
    
    return (
        <>
            {children}
        </>
    );
}

export default AdvertDataContainer;