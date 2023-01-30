import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { ArchiveApi } from "../../../../services/ArchiveApi";
import { deleteUserArchiveAdvert, deleteUserArchiveAdvertThunk } from "../../../../store/slices/ArchiveSlice";
import DeleteAdvertButton from "./DeleteAdvertButton";

const DeleteAdvertButtonContainer = ({category, id, index}) => {

    const dispatch = useDispatch()

    const onDeleteClick = () => dispatch(deleteUserArchiveAdvertThunk({category, id, index}))

    return <DeleteAdvertButton {...{onDeleteClick}} />;
}

export default DeleteAdvertButtonContainer;