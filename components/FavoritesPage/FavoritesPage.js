import SettingsNav from "../SettingsPage/SettingsNav";
import FavoritesContainer from "./Favorites/FavoritesContainer";
import FavoritesNoAuth from "./FavoritesNoAuth/FavoritesNoAuth";

const FavoritesPage = ({user, favoriteAdverts}) => {
    return (
        <>
            <main className="main">
                <SettingsNav title={'Favorites'} />
                <div className="container">
                    {
                        !!user ? <>
                            <FavoritesContainer adverts={favoriteAdverts} />
                        </> : <FavoritesNoAuth />
                    }
                </div>
            </main>
        </>
    );
}

export default FavoritesPage;