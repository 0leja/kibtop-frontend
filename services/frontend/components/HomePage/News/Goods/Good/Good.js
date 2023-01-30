import Link from "next/link";
import { useCurrency } from "../../../../../locales/hooks/useCurrency";
import LikeButtonContainer from "../../../LikeButton/LikeButtonContainer";
import Image from "next/image"


const Good = ({id, category, img, title, cost, address, date}) => {
    const {currency} = useCurrency()
    return (
        <>
            <div className="goods__item">
                <Link href={`/advert/${category}/${id}`} className="goods__img">
                    <img width={100} height={100} alt={''} src={img}  />
                </Link>

                <div className="goods__article">
                    <div>
                        <h5 className="goods__title">{title}</h5>
                        <h5 className="goods__cost">{currency} {cost}</h5>

                        <div className="goods__litle-info goods__litle-info--mobile">
                            <p className="goods__text">{address}</p>
                            <p className="goods__text">{date}</p>
                        </div>
                    </div>
                    <div className="goods__litle-info">
                        <LikeButtonContainer className={'like-btn'} {...{id, category}} />
                        
                        <p className="goods__text">{address}</p>
                        <p className="goods__text">{date}</p>
                        
                    </div>

                    <h5 className="goods__cost goods__cost--mobile">{currency} {cost}</h5>
                </div>

                <LikeButtonContainer className={'like-btn like-btn--mobile'} {...{id, category}} />
            </div>
        </>
    );
}

export default Good;