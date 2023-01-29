import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import UserButtons from "./UserButtons";

const UserButtonsContainer = () => {
    const isAuthed = useSelector(state => state.auth.isAuthed);

    const {pathname} = useRouter()

    const paths = ['chat', 'profile', 'favorites']

    const checkedVal = pathname.split('/').filter(path => paths.includes(path))[0]
    
    return <UserButtons {...{isAuthed, checkedVal}} />;
}

export default UserButtonsContainer;