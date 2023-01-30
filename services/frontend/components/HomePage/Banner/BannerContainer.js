import { useRouter } from "next/router";
import { useGetSlidesQuery } from "../../../services/HomePageApi";
import Banner from "./Banner";

const BannerContainer = ({slides}) => {
    const {locale} = useRouter()
    const {data, isLoading} = useGetSlidesQuery(locale)
    

    return <Banner {...{data: data || slides, isLoading}} />;
}

export default BannerContainer;