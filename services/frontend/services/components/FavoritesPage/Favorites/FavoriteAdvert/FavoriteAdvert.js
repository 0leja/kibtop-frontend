import { useCurrency } from "../../../../locales/hooks/useCurrency";
import LikeButtonContainer from "../../../HomePage/LikeButton/LikeButtonContainer";
import Image from "next/image"

const FavoriteAdvert = ({id, category, index, title, cost, address, img, date}) => {
    const {currency} = useCurrency()
    return (
        <>
            <div href={'/adverts/'+id} className="advert advert--full">
                <img width={100} height={100} alt={''} src={img} className="advert__img" />

                <div className="advert__desc">
                    <div className="advert__column">
                        <h5 className="advert-title advert-title--profile">
                            {title}
                        </h5>

                        <p className="advert-cost advert-cost--desk advert-cost--profile">{currency} {cost}</p>
                    
                        
                    </div>

                    <div className="advert__column advert__column--right">
                         <LikeButtonContainer className={'advert__btn'} {...{id, category}} />

                        <p className="advert-cost advert-cost--mob advert-cost--profile">{currency} {cost}</p>

                        <div className="advert__info advert__info--desk">
                            <p className="info-text">{address}</p>
                            <p className="info-text">{date}</p>
                        </div>
                    </div>

                    <div className="advert__info advert__info--mob">
                            <p className="info-text">{address}</p>
                            <p className="info-text">{date}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FavoriteAdvert;