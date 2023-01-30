import RealtyAdvert from "./RealtyAdvert/RealtyAdvert";

const RealtyAdverts = ({adverts}) => {
    return (
        <>
            <div className="mobile-realty">
                {
                    adverts.map(advert => <RealtyAdvert key={`${advert.category}_${advert.advertId}`} {...advert} />)
                }
            </div>
        </>
    );
}

export default RealtyAdverts;