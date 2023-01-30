import Advert from "./Advert/Advert";

const Adverts = ({adverts}) => {
    return (
        <>
            <div className="adverts-table">
                {
                    adverts?.map(advert => <Advert key={`${advert.category}_${advert.advertId}`} {...advert}  />)
                }
            </div>
                
        </>
    );
}

export default Adverts;