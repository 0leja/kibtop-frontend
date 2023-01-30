import { useRouter } from "next/router"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setAuthThunk } from "../../store/slices/AuthSlice"

export const useAuthRedirect = user => {
    const {push} = useRouter()
    useEffect(() => {
        if(!user) push('/auth/login')
    }, [])

    return
}