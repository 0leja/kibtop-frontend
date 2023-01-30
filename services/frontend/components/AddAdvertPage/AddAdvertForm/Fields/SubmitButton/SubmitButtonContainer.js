import { useFormContext } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setAddAdvertPhoneOpen } from "../../../../../store/slices/AddAdvertSlice";
import { validateStepFields } from "../validators";
import SubmitButton from "./SubmitButton";

const SubmitButtonContainer = ({requiredFields}) => {
    const {onSubmitClick, formState: {errors},watch} = useFormContext()
    const {phone} = useSelector(state => state.profile)
    const {isLoading} = useSelector(state => state.addAdvert)
    const dispatch = useDispatch()


    const isDisabled = validateStepFields(requiredFields, 
                                        {errors, fields: watch() || {}})



    const openAddPhoneModal = e => {        
        e.preventDefault()
        dispatch(setAddAdvertPhoneOpen(true))
    }

    return <SubmitButton {...{onSubmitClick, isDisabled, openAddPhoneModal, isLoading,
                                isPhoneNull: !phone}} />;
}

export default SubmitButtonContainer;