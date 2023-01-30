import Link from "next/link";
import Text from "../../Elementes/Text/Text";
import AdvertDataContainer from "../AdvertDataContainer";
import DetailBannerContainer from "./DetailBanner/DetailBannerContainer";
import DetailCardContainer from "./DetailCard/DetailCardContainer";
import DetailDataContainer from "./DetailData/DetailDataContainer";
import DetailDateContainer from "./DetailDate/DetailDateContainer";
import DetailMapsContainer from "./DetailMaps/DetailMapsContainer";
import DetailNav from "./DetailNav/DetailNav";
import DetailParameterContainer from "./DetailParameter/DetailParameterContainer";
import DetailProfileContainer from "./DetailProfile/DetailProfileContainer";
import SimilarAds from "./SimilarAds/SimilarAds";

const OtherDetail = () => {
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

                    <DetailParameterContainer />

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

export default OtherDetail;