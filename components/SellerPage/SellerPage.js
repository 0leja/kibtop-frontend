import Link from "next/link";
import { useRouter } from "next/router";
import Text from "../Elementes/Text/Text";
import NameData from "../ProfilePage/ProfileMenu/ProfileUser/NameData/NameData";
import UserLocale from "../ProfilePage/ProfileMenu/ProfileUser/UserLocale/UserLocale";
import UserStatistic from "../ProfilePage/ProfileMenu/ProfileUser/UserStatistic/UserStatistic";
import UserAdevrtsContainer from "../ProfilePage/UserAdevrts/UserAdevrtsContainer";

const SellerPage = ({newGoods, user}) => {
    const {locale, pathname, query} = useRouter()
    const {phone} = user

    return (
        <>
                <div className="container container--profile">
                    <h1 className="title title--profile"><Text content="Seller" /></h1>

                    <Link href="/" className="profile-link">
                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 1.25199C14.9997 1.58377 14.8661 1.90186 14.6284 2.13633L8.14972 8.53693C7.95362 8.73061 7.79806 8.96056 7.69193 9.21365C7.5858 9.46673 7.53118 9.73799 7.53118 10.0119C7.53118 10.2859 7.5858 10.5571 7.69193 10.8102C7.79806 11.0633 7.95362 11.2933 8.14972 11.4869L14.62 17.8792C14.8507 18.1152 14.9784 18.4313 14.9755 18.7595C14.9726 19.0876 14.8394 19.4014 14.6046 19.6335C14.3697 19.8655 14.052 19.9971 13.7199 20C13.3878 20.0028 13.0678 19.8767 12.8289 19.6487L6.35861 13.2615C5.48861 12.4003 5 11.2332 5 10.0165C5 8.7998 5.48861 7.63279 6.35861 6.77159L12.8373 0.366817C13.0145 0.191688 13.2402 0.0724106 13.486 0.0240773C13.7318 -0.024256 13.9866 0.000527255 14.2181 0.0952911C14.4497 0.190055 14.6475 0.35054 14.7867 0.55644C14.9259 0.762339 15.0001 1.0044 15 1.25199Z" fill="#7AB1FF"/>
                        </svg>

                        <Text content="Go back to the main page" />
                    </Link>

                    <Link href="/profile/settings" className="settings-icon">
                        <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.41178 18.75C2.25447 20.2454 4.12329 20.7592 5.58585 19.8976C5.58686 19.897 5.58781 19.8964 5.58881 19.8958L6.04216 19.6281C6.89794 20.3767 7.88161 20.9573 8.94364 21.3406V21.875C8.94364 23.6009 10.312 25 12 25C13.688 25 15.0564 23.6009 15.0564 21.875V21.3406C16.1185 20.9567 17.1023 20.3754 17.9578 19.626L18.4132 19.8948C19.8761 20.7577 21.7463 20.2447 22.5903 18.7489C23.4343 17.2532 22.9325 15.341 21.4696 14.4781L21.0173 14.2114C21.2209 13.0786 21.2209 11.9172 21.0173 10.7843L21.4696 10.5177C22.9325 9.65474 23.4343 7.74263 22.5903 6.24683C21.7463 4.75107 19.8762 4.23804 18.4132 5.10098L17.9599 5.3687C17.1033 4.621 16.1189 4.0415 15.0564 3.65937V3.125C15.0564 1.39912 13.688 0 12 0C10.312 0 8.94364 1.39912 8.94364 3.125V3.65937C7.88146 4.04331 6.89775 4.62456 6.04216 5.37397L5.58676 5.1042C4.12382 4.24121 2.25371 4.75425 1.40972 6.25C0.565739 7.74575 1.06746 9.65791 2.5304 10.5208L2.98274 10.7875C2.77911 11.9204 2.77911 13.0817 2.98274 14.2146L2.5304 14.4812C1.07152 15.3465 0.571422 17.2549 1.41178 18.75ZM12 8.33335C14.2506 8.33335 16.0751 10.1988 16.0751 12.5C16.0751 14.8012 14.2506 16.6667 12 16.6667C9.74938 16.6667 7.92487 14.8012 7.92487 12.5C7.92487 10.1988 9.74938 8.33335 12 8.33335Z" fill="#414042"/>
                        </svg>
                    </Link>
                </div>

                <div className="profile">
                    <aside className="profile__menu">
                        <div className="user user--seller">
                            <NameData {...user} />
                            <UserStatistic {...user} />
                            <UserLocale />

                            <Link href={!!phone ? `https://api.whatsapp.com/send/?phone=${phone}` : {pathname, query}} className="seller-contact contact-btn--green">
                                <Text content={'Write to WhatsApp'} />
                            </Link>

                            <Link href={{pathname, query}} className="seller-contact contact-btn--blue">
                                <Text content={'Write in chat'} />
                            </Link>
                        </div>
                    </aside>

                    <UserAdevrtsContainer {...{serverAds: newGoods, user}} />
                </div>
        </>
    );
}

export default SellerPage;