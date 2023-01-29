import { useRouter } from "next/router"

const useMobileException = () => {
    const {pathname} = useRouter()
    
    const excertedPaths = ['archive', 'profile', 'chat']

    const isExcerted = excertedPaths.some(path => pathname.includes(path) )

    const ExceptionStyle = isExcerted ? ' exception' : ''
    
    return ExceptionStyle
}

export default useMobileException;