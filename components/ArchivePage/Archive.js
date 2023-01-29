import AddAdvertWarn from "../ProfilePage/AddAdvertWarn/AddAdvertWarn";
import ArchiveAdvert from "./ArchiveAdvert/ArchiveAdvert";

const Archive = ({adverts}) => {
    return (
        <>
            <div className="container">
                {
                    !!(adverts?.length) ? <>
                        <div className="adverts">
                            {
                                adverts?.map((advert, index) => <ArchiveAdvert 
                                        key={`${advert.category}_${advert.advertId}`} 
                                        index = {index}
                                        {...advert}
                                    />)
                            }
                        </div>
                    </> : <AddAdvertWarn title={'Archive is empty'} />
                }
            
            </div>
        </>
    );
}

export default Archive;