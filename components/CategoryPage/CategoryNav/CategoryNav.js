import Link from "next/link";
import { useRouter } from "next/router";
import Text from "../../Elementes/Text/Text";

const CategoryNav = () => {
    const {query: {category}} = useRouter()
    return (
        <>
            <div className="container container--profile nav-category">
                <div className="category-label">
                    {
                        category === 'realty' ? <>
                                                <img src="/img/add_advert/realty.png" alt="" className="category-label__img" />
                                                <h2 className="title">
                                                    <Text content="Real estate" />
                                                </h2>                   
                                        </> :
                        category === 'avto' ? <>
                                                <img src="/img/add_advert/avto.png" alt="" className="category-label__img" />
                                                <h2 className="title">
                                                    <Text content="Auto" />
                                                </h2>                   
                                        </> :
                        category === 'work' ? <>
                                                <img src="/img/add_advert/work.png" alt="" className="category-label__img" />
                                                <h2 className="title">
                                                    <Text content="Job" />
                                                </h2>                   
                                        </> :
                        category === 'services' ? <>
                                                <img src="/img/add_advert/services.png" alt="" className="category-label__img" />
                                                <h2 className="title">
                                                    <Text content="Services" />
                                                </h2>                   
                                        </> :
                        category === 'children' ? <>
                                                <img src="/img/add_advert/children.png" alt="" className="category-label__img" />
                                                <h2 className="title">
                                                    <Text content="" />
                                                </h2>                   
                                        </> :
                        category === 'electronics' ? <>
                                                <img src="/img/add_advert/electronics.png" alt="" className="category-label__img" />
                                                <h2 className="title">
                                                    <Text content="Electronics" />
                                                </h2>                   
                                        </> :
                        category === 'house_garden' ? <>
                                                <img src="/img/add_advert/house_garden.png" alt="" className="category-label__img" />
                                                <h2 className="title">
                                                    <Text content="Fashion and style" />
                                                </h2>                   
                                        </> :
                        category === 'fashion' ? <>
                                                <img src="/img/add_advert/fashion.png" alt="" className="category-label__img" />
                                                <h2 className="title">
                                                    <Text content="Fashion and style" />
                                                </h2>                   
                                        </> : ''
                    }
                </div>
                <Link href="/" className="profile-link">
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 1.25199C14.9997 1.58377 14.8661 1.90186 14.6284 2.13633L8.14972 8.53693C7.95362 8.73061 7.79806 8.96056 7.69193 9.21365C7.5858 9.46673 7.53118 9.73799 7.53118 10.0119C7.53118 10.2859 7.5858 10.5571 7.69193 10.8102C7.79806 11.0633 7.95362 11.2933 8.14972 11.4869L14.62 17.8792C14.8507 18.1152 14.9784 18.4313 14.9755 18.7595C14.9726 19.0876 14.8394 19.4014 14.6046 19.6335C14.3697 19.8655 14.052 19.9971 13.7199 20C13.3878 20.0028 13.0678 19.8767 12.8289 19.6487L6.35861 13.2615C5.48861 12.4003 5 11.2332 5 10.0165C5 8.7998 5.48861 7.63279 6.35861 6.77159L12.8373 0.366817C13.0145 0.191688 13.2402 0.0724106 13.486 0.0240773C13.7318 -0.024256 13.9866 0.000527255 14.2181 0.0952911C14.4497 0.190055 14.6475 0.35054 14.7867 0.55644C14.9259 0.762339 15.0001 1.0044 15 1.25199Z" fill="#7AB1FF"/>
                    </svg>

                    <Text content="Go back to the main page" />
                </Link>
            </div>
        </>
    );
}

export default CategoryNav;