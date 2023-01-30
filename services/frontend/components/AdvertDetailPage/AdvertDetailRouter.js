import { useEffect } from "react";
import Header from "../Header/Header";
import HeaderService from "../Header/HeaderService/HeaderService";
import AdvertDataContainer from "./AdvertDataContainer";
import AvtoDetail from "./AvtoDetail/AvtoDetail";
import OtherDetail from "./OtherDetail/OtherDetail";
import RealEstateDetail from "./RealEstateDetail/RealEstateDetail";
import WorkDetail from "./WorkDetail/WorkDetail";

const AdvertDetailRouter = ({category}) => {
    const other = ['children', 'electronics', 'fashion', 'house_garden', 'services']

    return (
        <>
            <Header />
            <HeaderService />
            <main className="main">
                <AdvertDataContainer>
                    {
                        other.some(categoryPath => categoryPath === category) 
                            ? <OtherDetail /> :
                            category === 'avto' ? <AvtoDetail /> :
                            category === 'realty' ? <RealEstateDetail /> :
                            category === 'work' ? <WorkDetail /> :
                            <></>
                    }
                </AdvertDataContainer>
            </main>
        </>
    );
}

export default AdvertDetailRouter;