import { useRouter } from "next/router";
import ArchiveContainer from "../../components/ArchivePage/ArchiveContainer";
import Header from "../../components/Header/Header";
import HeaderService from "../../components/Header/HeaderService/HeaderService";
import HeaderSettings from "../../components/Header/HeaderSettings/HeaderSettings";
import SettingsNav from "../../components/SettingsPage/SettingsNav";
import { ArchiveApi } from "../../services/ArchiveApi";
import { ProfileApi } from "../../services/ProfileApi";
import { getServerSideCookies, getStringCookies } from "../../services/tools/CookieController";
import { getServerSideUser } from "../../services/tools/getServerSideUser/getServerSideUser";

const Archive = ({archiveAdverts}) => {

    return (
        <>
            <Header />
            <HeaderService />
            <main className="main main--archive">
                <SettingsNav title="Archive" />
                
                <ArchiveContainer {...{archiveAdverts}} />
            </main>
        </>
    );
}

export async function getServerSideProps({req, res, locale}) {
    
    const cookies = getStringCookies(req)


    const access = getServerSideCookies(cookies, 'access')

    let user = await ProfileApi.getUserData(access)
                    .catch( err => null)

    if(!user) user = await getServerSideUser(cookies)

    if(!user) {
      return {
          redirect: {
            destination: '/auth/login/',
            permanent: false,
          },
      }
    }

    const archiveAdverts = await ArchiveApi.getUserArchive(user.userId, locale)
    
    return {
      props: {user, archiveAdverts},
    }
  }

export default Archive;