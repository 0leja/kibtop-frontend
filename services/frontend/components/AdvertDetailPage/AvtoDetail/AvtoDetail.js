import Link from "next/link";
import Text from "../../Elementes/Text/Text";
import DetailBannerContainer from "../OtherDetail/DetailBanner/DetailBannerContainer";
import DetailCardContainer from "../OtherDetail/DetailCard/DetailCardContainer";
import DetailDataContainer from "../OtherDetail/DetailData/DetailDataContainer";
import DetailDateContainer from "../OtherDetail/DetailDate/DetailDateContainer";
import DetailMapsContainer from "../OtherDetail/DetailMaps/DetailMapsContainer";
import DetailNav from "../OtherDetail/DetailNav/DetailNav";
import DetailProfileContainer from "../OtherDetail/DetailProfile/DetailProfileContainer";
import SimilarAds from "../OtherDetail/SimilarAds/SimilarAds";
import AvtoParameterContainer from "./AvtoParameter/AvtoParameterContainer";

const AvtoDetail = () => {
    return (
        <>
            <DetailNav />
            <div className="container container--detail">
                <DetailBannerContainer />

                <DetailCardContainer />
            </div>

            <div className="container container-brad">
                <div className="detail-wrapper">
                    <DetailDataContainer />

                    <DetailMapsContainer />

                    <AvtoParameterContainer />

                    <div className="detail-wrapper__container detail-wrapper__container--date">
                        <DetailDateContainer />
                    </div>

                    <DetailProfileContainer />

                    <div className="detail-wrapper__container">
                        <DetailDateContainer className={'exception'} />

                        <Link href="/support" className="detail-tag-text detail-tag-text--red">
                            <Text content="Complain about the ad" />
                        </Link>
                    </div>
                </div>
            </div>

            <SimilarAds />
        </>
    );
}

export default AvtoDetail;