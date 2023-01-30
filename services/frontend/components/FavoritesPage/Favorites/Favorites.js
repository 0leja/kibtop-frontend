import FavoriteAdvert from "./FavoriteAdvert/FavoriteAdvert";
import FavoritesEmpty from "./FavoritesEmpty/FavoritesEmpty";

const Favorites = ({adverts}) => {
    return (
        <>
            {
                !!(adverts?.length) ? <>
                    <div className="adverts">
                        {
                            adverts?.map(advert => <FavoriteAdvert key={`${advert.category}_${advert.id}`} 
                                                                    {...advert} />)
                        }
                    </div>
                </> : <FavoritesEmpty />
            }
        </>
    );
}

export default Favorites;