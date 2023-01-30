import { useDispatch, useSelector } from "react-redux";
import { setAddAdvertPhoneOpen } from "../../../store/slices/AddAdvertSlice";
import AddPhone from "./AddPhone";

const AddPhoneContainer = () => {
    const {isPhoneOpen, isPhoneSuccess} = useSelector(state => state.addAdvert)
    const dispatch = useDispatch()

    const closeAddPhoneModal = () => dispatch(setAddAdvertPhoneOpen(false))


    return <AddPhone {...{isOpen: isPhoneOpen, closeAddPhoneModal, isSuccess: isPhoneSuccess}} />;
}

export default AddPhoneContainer;