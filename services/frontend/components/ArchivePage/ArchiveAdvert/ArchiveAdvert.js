import Link from "next/link";
import { useCurrency } from "../../../locales/hooks/useCurrency";
import { BASE_URL } from "../../../services/Instance";
import DeleteAdvertButtonContainer from "./DeleteAdvertButton/DeleteAdvertButtonContainer";
import Image from "next/image"


const ArchiveAdvert = ({advertId, category, index, title, cost, address, img, date}) => {
    const {currency} = useCurrency()
    return (
        <>
            <div href={`/advert/${category}/${advertId}`} className="advert advert--full advert--del">
                <img width={100} height={100} alt={''} src={img} className="advert__img" />
                <div className="adver-dimmer advert__img" />

                <div className="advert__desc">
                    <div className="advert__column">
                        <h5 className="advert-title advert-title--profile">
                            {title}
                        </h5>

                        <p className="advert-cost advert-cost--desk advert-cost--profile">{currency} {cost}</p>
                    
                        
                    </div>

                    <div className="advert__column advert__column--right">
                         <DeleteAdvertButtonContainer {...{category, id: advertId, index}} />

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

export default ArchiveAdvert;