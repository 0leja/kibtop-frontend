import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../Header/Header";
import HeaderService from "../Header/HeaderService/HeaderService";
import AdvertDetailRouter from "./AdvertDetailRouter";

const AdvertDetailPage = () => {
    const {query: {category}, push} = useRouter()
    const allPaths = ['avto', 'children', 'electronics', 'fashion', 'house_garden', 'realty', 'services', 'work']

    useEffect(() => {
        if(!allPaths.some(categoryPath => categoryPath === category)) push('/')
    }, [])
    return (
        <>
            {
                !allPaths.some(categoryPath => categoryPath === category) ? <></>
                : <AdvertDetailRouter {...{category}} />
            }
        </>
    );
}

export default AdvertDetailPage;