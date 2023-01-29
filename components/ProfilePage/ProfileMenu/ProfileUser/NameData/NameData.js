import Link from "next/link";
import Image from "next/image"


const NameData = ({avatar, name, phone}) => {
    return (
        <>
            <div className="user__wrapper name-data">
                {
                    !!avatar ? <img width={100} height={100} alt={''} src={avatar} className="user__ava" /> 
                             : <Link href="/profile/edit" className="user__ava" />
                }
                

                <div className="user__data">
                    <p className="user__name">{name}</p>
                    {!!phone && <p className="user__name">{phone}</p>}
                </div>
            </div>

        </>
    );
}

export default NameData;