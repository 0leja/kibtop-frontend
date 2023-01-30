import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LanguageRedirect = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate("/en")
    }, [])

    return (<div></div>);
}

export default LanguageRedirect;