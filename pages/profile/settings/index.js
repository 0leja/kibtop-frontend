import Header from "../../../components/Header/Header";
import HeaderService from "../../../components/Header/HeaderService/HeaderService";
import Settings from "../../../components/SettingsPage/Settings";
import { getServerSideCookies, getStringCookies } from "../../../services/tools/CookieController";
import { getServerSideUser } from "../../../services/tools/getServerSideUser/getServerSideUser";

const SettingsPage = ({user}) => {

    return (
        <>
            <Header />
            <HeaderService />
            <Settings />
        </>
    );
}

export async function getServerSideProps({req, res}) {

    const cookies = getStringCookies(req)
    const user = await getServerSideUser(cookies)

    if(!user) {
        return {
            redirect: {
              destination: '/auth/login/',
              permanent: false,
            },
        }
    }

    return {
      props: {user},
    }
}

export default SettingsPage;