import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUserDataThunk, setProfileDataThunk, setProfileEditingActivated, setProfileEditingSuccess } from "../../../store/slices/ProfileSlice";
import EditProfileForm from "./EditProfileForm";

const EditProfileFormContainer = ({user}) => {
    const {email, name, city, avatar, isSuccess, isLoading, isActivated} = useSelector(state => state.profile)
    const {push} = useRouter()
    const dispatch = useDispatch()

    useEffect(() => {
        if(isActivated) {
            dispatch(setProfileEditingActivated(false))
            dispatch(setProfileEditingSuccess(false))
            push('/profile')
        }
        if(!email || !name || !city || !avatar) dispatch(setProfileDataThunk())
    }, [email, name, city, avatar, isActivated])

    const onEditProfileSubmit = data => {
        
        const {email, name, city, file} = data
        dispatch(editUserDataThunk({email, name, city, avatar: file[0]}))
    }

    const userData = user || { email, name, city, avatar }


    return <EditProfileForm {...{onEditProfileSubmit, isLoading, isSuccess, ...userData}} />;
}

export default EditProfileFormContainer;