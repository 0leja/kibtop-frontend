import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Text from "../../components/Elementes/Text/Text";
import Header from "../../components/Header/Header";
import HeaderService from "../../components/Header/HeaderService/HeaderService";
import ProfileMenu from "../../components/ProfilePage/ProfileMenu/ProfileMenu";
import NameData from "../../components/ProfilePage/ProfileMenu/ProfileUser/NameData/NameData";
import UserLocale from "../../components/ProfilePage/ProfileMenu/ProfileUser/UserLocale/UserLocale";
import UserStatistic from "../../components/ProfilePage/ProfileMenu/ProfileUser/UserStatistic/UserStatistic";
import UserAdevrtsContainer from "../../components/ProfilePage/UserAdevrts/UserAdevrtsContainer";
import SellerPage from "../../components/SellerPage/SellerPage";
import { AdvertApi } from "../../services/AdvertApi";
import { GoodsApi } from "../../services/IndexApi";
import { ProfileApi } from "../../services/ProfileApi";

const Seller = ({newGoods, user}) => {
    
    return (
        <>
            <Header />
            <HeaderService />
            <main className="main main--profile">
                <SellerPage {...{newGoods, user}} />
            </main>
        </>
    );
}


export async function getServerSideProps(context) {
    const {locale, params: {userId}} = context
    
    const user = await AdvertApi.getAdvertSeller(userId)
    
    const newGoods = await ProfileApi.getUserAdverts(userId, locale) || null

    return {
        props: {newGoods, user}
    }
}

export default Seller;