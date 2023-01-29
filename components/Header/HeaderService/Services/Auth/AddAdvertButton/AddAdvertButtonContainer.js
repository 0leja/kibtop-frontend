import { useSelector } from "react-redux";
import AddAdvertButton from "./AddAdvertButton";

const AddAdvertButtonContainer = () => {
    const isAuthed = useSelector(state => state.auth.isAuthed);

    return <AddAdvertButton {...{isAuthed}} />;
}

export default AddAdvertButtonContainer;