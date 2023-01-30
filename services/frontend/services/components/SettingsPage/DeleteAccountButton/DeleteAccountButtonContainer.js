import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserAccountThunk, setDeletingOpen } from "../../../store/slices/ProfileSlice";
import DeleteAccountButton from "./DeleteAccountButton";

const DeleteAccountButtonContainer = () => {
    const {push} = useRouter()
    const {userId} = useSelector(state => state.auth)

    const {isDeleting, isDeletingLoading} = useSelector(state => state.profile)
    const dispatch = useDispatch()

    useEffect(() => {
        if(!userId) push('/')
    }, [userId])

    const onDeleteAccountClick = data => {
        const {password1} = data
        dispatch(deleteUserAccountThunk(password1))
    }

    const onOpenDeleting = () => dispatch(setDeletingOpen(true))

    return <DeleteAccountButton {...{onDeleteAccountClick, onOpenDeleting, isDeleting, isDeletingLoading}} />;
}

export default DeleteAccountButtonContainer;