import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ArchiveApi } from "../../services/ArchiveApi";
import { setUserArchive, setUserArchiveThunk } from "../../store/slices/ArchiveSlice";
import Archive from "./Archive";

const ArchiveContainer = ({archiveAdverts}) => {
    const {userId} = useSelector(state => state.auth)
    const {locale} = useRouter()

    const {archive} = useSelector(state => state.archive)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setUserArchiveThunk(userId, locale))
    }, [archive.length, userId, locale])

    const adverts = !!(archive?.length) ? archive : archiveAdverts

    return <Archive {...{adverts}} />;
}

export default ArchiveContainer;