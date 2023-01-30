import FavoritesPage from "../components/FavoritesPage/FavoritesPage";
import Header from "../components/Header/Header";
import HeaderService from "../components/Header/HeaderService/HeaderService";
import { FavoritesApi } from "../services/FavoritesApi";
import { getStringCookies } from "../services/tools/CookieController";
import { getServerSideUser } from "../services/tools/getServerSideUser/getServerSideUser";

const Favorites = ({user, favoriteAdverts}) => {
    return (
        <>
            <Header />
            <HeaderService />
            <FavoritesPage {...{user, favoriteAdverts}} />
        </>
    );
}


export async function getServerSideProps({req, res, locale}) {

    
    const user = await getServerSideUser(req.cookies)


    if(!user) {
        return {
            props: {user, favoriteAdverts: []},
        }
    }

    const favoriteAdverts = await FavoritesApi.getUserFavoritesAdverts(user.userId, locale)
            .catch((err) => null)
    
    return {
      props: {user, favoriteAdverts},
    }
}

export default Favorites;