import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAdvertThunk, setAddAdvertCategory, setAddAdvertFormStep, setNewAdvertData } from "../../../store/slices/AddAdvertSlice";
import AddAdvertForm from "./AddAdvertForm";



const AddAdvertFormContainer = () => {
    const {formStep, category, newAdvert: {advertId, advertCategory}} = useSelector(state => state.addAdvert)
    const {userId} = useSelector(state => state.auth)
    const {phone} = useSelector(state => state.profile)


    const {locale, push} = useRouter()
    const dispatch = useDispatch()

    const onAddAdvertSubmit = data => {
        dispatch(addAdvertThunk({...data, userId, phone}, category, locale))
    }

    const switchFormStepToStart = () => dispatch(setAddAdvertFormStep(1))

    useEffect(() => {
        if(!!advertId && !!advertCategory) {
            dispatch(setNewAdvertData({id: null, category: null}))
            push(`/advert/${advertCategory}/${advertId}`)
        }

    }, [advertId, advertCategory])


    return <AddAdvertForm {...{formStep, onAddAdvertSubmit, category, switchFormStepToStart}} />;
}

export default AddAdvertFormContainer;