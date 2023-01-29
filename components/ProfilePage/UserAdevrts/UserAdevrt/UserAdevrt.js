import Link from "next/link";
import { useCurrency } from "../../../../locales/hooks/useCurrency";
import { BASE_URL } from "../../../../services/Instance";
import LikeButtonContainer from "../../../HomePage/LikeButton/LikeButtonContainer";
import EditAdvertButtonContainer from "./EditAdvertButton/EditAdvertButtonContainer";
import Image from "next/image"


const UserAdevrt = ({advertId, title, cost, address, img, date, category}) => {
    const {currency} = useCurrency()
    return (
        <>
            <div className="advert">
                <Link href={`/advert/${category}/${advertId}`}>
                    <img width={100} height={100} alt={''} src={img} className="advert__img" />
                </Link>

                <div className="advert__desc">
                    <div className="advert__column">
                        <h5 className="advert-title">
                            {title}
                        </h5>

                        <p className="advert-cost advert-cost--desk">{currency} {cost}</p>
                    
                        
                    </div>

                    <div className="advert__column advert__column--right">
                        <LikeButtonContainer {...{id: advertId, category}} /> 

                        <p className="advert-cost advert-cost--mob">{currency} {cost}</p>

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

export default UserAdevrt;