import Link from "next/link";
import Text from "../../../../Elementes/Text/Text";
import Image from "next/image"


const Event = ({id, isDark, img, title, desc, background}) => {
    return (
        <>
            <div style={{backgroundImage: `url(${background})`}} className={'event' + (isDark ? '' : ' event--light')}>
                <div className="event__img">
                    { !!img && <img width={100} height={100} alt={''} src={img}  />}
                </div>
                                            
                <article className="event__article">
                    <h4 className="title event__title">{title}</h4>
                    <p className="text event__text">{desc}</p>
                    {
                        !!title &&
                            <Link href='/' className="more-link-text event__link">
                                <Text content="MORE" />
                                <svg className="more-icon" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_200_531)">
                                        <path d="M13.489 5.76275L10.8138 3.08758L9.989 3.91241L12.4752 6.39917L0 6.41667V7.58333L12.5102 7.56583L9.98842 10.0876L10.8132 10.9124L13.489 8.23725C13.8161 7.90855 13.9997 7.46371 13.9997 7C13.9997 6.53629 13.8161 6.09145 13.489 5.76275Z" />
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_200_531">
                                        <rect width="14" height="14" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>

                            </Link>
                    }
                </article>                            
            </div>
        </>
    );
}

export default Event;