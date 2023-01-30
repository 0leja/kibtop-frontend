import Text from "../../Elementes/Text/Text";
import CategoryNavLink from "./CategoryNavLink";
import Link from "next/link";


const CategoriesNav = () => {
    const NavLinks = [
        {id: 0, link: 'adverts/realty', text: 'Real estate', backgroundColor: '#4B76F6', img: 'keys.png'},
        {id: 1, link: 'adverts/avto', text: 'Auto', backgroundColor: '#6DE2DB', img: 'car.png'},
        {id: 2, link: 'adverts/work', text: 'Job', backgroundColor: '#FFF6DC', img: 'bag.png'},
        {id: 3, link: 'adverts/services', text: 'Services', backgroundColor: '#CDDDFF', img: 'paint.png'},
        {id: 4, link: 'adverts/children', text: 'For kids', backgroundColor: '#F7D055', img: 'carriage.png'},
        {id: 5, link: 'adverts/electronics', text: 'Electronics', backgroundColor: '#F8D8CB', img: 'phone.png'},
        {id: 7, link: 'adverts/fashion', text: 'Fashion and style', backgroundColor: '#D1DEFC', img: 'dress.png'},
        {id: 6, link: 'adverts/house_garden', text: 'House and garden', backgroundColor: '#D2F7F5', img: 'armchair.png'},

    ]


    return (
        <>
            <nav className="categories-nav">
                <div className="container container--categories">
                    <div className="categories-nav__item">
                        <Link href='/' className="all-link">
                            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_572_482)">
                                    <path d="M3.33336 29.1666H7.5C9.34094 29.1666 10.8334 30.659 10.8334 32.5V36.6666C10.8334 38.5076 9.34094 40 7.5 40H3.33336C1.49242 40 0 38.5076 0 36.6666V32.5C0 30.659 1.49242 29.1666 3.33336 29.1666Z" fill="#414042"/>
                                    <path d="M32.4999 29.1666H36.6665C38.5075 29.1666 39.9999 30.659 39.9999 32.5V36.6666C39.9999 38.5076 38.5075 40 36.6665 40H32.4999C30.6589 40 29.1665 38.5076 29.1665 36.6666V32.5C29.1665 30.659 30.6589 29.1666 32.4999 29.1666Z" fill="#414042"/>
                                    <path d="M3.33336 14.5834H7.5C9.34094 14.5834 10.8334 16.0758 10.8334 17.9167V22.0834C10.8334 23.9243 9.34094 25.4167 7.5 25.4167H3.33336C1.49242 25.4167 0 23.9243 0 22.0834V17.9167C0 16.0757 1.49242 14.5834 3.33336 14.5834Z" fill="#414042"/>
                                    <path d="M32.4999 14.5834H36.6665C38.5074 14.5834 39.9999 16.0758 39.9999 17.9167V22.0834C39.9999 23.9243 38.5075 25.4167 36.6665 25.4167H32.4999C30.6589 25.4167 29.1665 23.9243 29.1665 22.0834V17.9167C29.1665 16.0757 30.6589 14.5834 32.4999 14.5834Z" fill="#414042"/>
                                    <path d="M3.33336 0H7.5C9.34094 0 10.8334 1.49242 10.8334 3.33336V7.5C10.8334 9.34094 9.34094 10.8334 7.5 10.8334H3.33336C1.49242 10.8334 0 9.34094 0 7.5V3.33336C0 1.49242 1.49242 0 3.33336 0Z" fill="#414042"/>
                                    <path d="M17.9169 29.1666H22.0835C23.9244 29.1666 25.4169 30.659 25.4169 32.5V36.6666C25.4169 38.5076 23.9244 40 22.0835 40H17.9169C16.0759 40 14.5835 38.5076 14.5835 36.6666V32.5C14.5836 30.659 16.0759 29.1666 17.9169 29.1666Z" fill="#414042"/>
                                    <path d="M17.9169 14.5834H22.0835C23.9244 14.5834 25.4169 16.0758 25.4169 17.9167V22.0834C25.4169 23.9243 23.9244 25.4167 22.0835 25.4167H17.9169C16.0759 25.4167 14.5835 23.9243 14.5835 22.0834V17.9167C14.5836 16.0757 16.0759 14.5834 17.9169 14.5834Z" fill="#414042"/>
                                    <path d="M17.9169 0H22.0835C23.9244 0 25.4169 1.49242 25.4169 3.33336V7.5C25.4169 9.34094 23.9244 10.8334 22.0835 10.8334H17.9169C16.0759 10.8334 14.5835 9.34094 14.5835 7.5V3.33336C14.5836 1.49242 16.0759 0 17.9169 0Z" fill="#414042"/>
                                    <path d="M32.4999 0H36.6665C38.5075 0 39.9999 1.49242 39.9999 3.33336V7.5C39.9999 9.34094 38.5075 10.8334 36.6665 10.8334H32.4999C30.6589 10.8334 29.1665 9.34094 29.1665 7.5V3.33336C29.1665 1.49242 30.6589 0 32.4999 0Z" fill="#414042"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_572_482">
                                        <rect width="40" height="40" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>

                            <p><Text content="All categories" /></p>
                        </Link>
                    </div>
                    <div className="categories-nav__item">
                        <span className="categories-nav__line"></span>
                    </div>
                    <ul className="categories-nav__list">
                        <div className="categories-nav__wrapper">
                            {
                                NavLinks.map(link => <CategoryNavLink {...link} key={link.id} />)
                            }
                        </div>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default CategoriesNav;