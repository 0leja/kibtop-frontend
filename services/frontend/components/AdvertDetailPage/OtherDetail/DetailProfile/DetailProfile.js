import Link from "next/link";
import { useRouter } from "next/router";
import Text from "../../../Elementes/Text/Text";
import Image from "next/image"


const DetailProfile = ({name, avatar, userId}) => {
    const {query: {category}} = useRouter()

    return (
        <>
            <div className="detail-profile">
                <div className="detail-profile__user">
                    {
                        !!avatar ? <img width={100} height={100} alt={''} src={avatar} className="detail-profile__ava" />
                                 : <div className="detail-profile__ava" />
                    }
                    

                    <div className="detail-profile__data">
                        <p className="detail-title detail-title--mb-10">
                            {
                                category === 'realty' ? <Text content="landlord" />
                                                      : <Text content="seller" />
                            }
                        </p>

                        <p className="detail-text">{name}</p>
                    </div>
                </div>

                <Link href={`/seller/${userId}`} className="detail-tag-text detail-tag-text--blue">
                    <Text content="Go to profile" />
                </Link>
            </div>
        </>
    );
}

export default DetailProfile;