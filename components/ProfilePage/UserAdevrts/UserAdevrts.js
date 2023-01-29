import AddAdvertWarn from "../AddAdvertWarn/AddAdvertWarn";
import UserAdevrt from "./UserAdevrt/UserAdevrt";

const UserAdevrts = ({adverts}) => {
    
    return (
        <>
            {
                !!(adverts?.length) ? <>
                    <div className="profile__adverts">
                        {
                            adverts?.map(advert => <UserAdevrt 
                                        key={`${advert.category}_${advert.advertId}`}
                                        {...advert} 
                                    />)
                        }
                    </div>
                </> : <AddAdvertWarn title={"You don't have active ads"} />
            }
        </>
    );
}

export default UserAdevrts;