import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../services/tools/crypto';
import { setUserFavoritesThunk } from '../../store/slices/FavoritesSlice';
import { getCitiesThunk } from '../../store/slices/LocationSlice';
import { setProfileData, setProfileDataThunk } from '../../store/slices/ProfileSlice';
import HeaderSettings from './HeaderSettings/HeaderSettings';

const Header = () => {
    const {locale} = useRouter()
    const {userId, isAuthed} = useSelector(state => state.auth)
    const {favorites} = useSelector(state => state.favorites)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCitiesThunk(locale))
        if(isAuthed) dispatch(setUserFavoritesThunk(userId))
        if(isAuthed) dispatch((setProfileDataThunk()))
    }, [userId, locale])

    return (
        <>
            <header className="header">
                <HeaderSettings />
            </header>
        </>
    );
}

export default Header;