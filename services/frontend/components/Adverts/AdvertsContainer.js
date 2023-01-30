import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSimilarAdvertsThunk } from "../../store/slices/AdvertSlice";
import Adverts from "./Adverts";

const AdvertsContainer = ({category, locale}) => {
    

    const adverts = [1,2,3,4,5,6,7,8]

    return <Adverts {...{adverts}} />;
}

export default AdvertsContainer;