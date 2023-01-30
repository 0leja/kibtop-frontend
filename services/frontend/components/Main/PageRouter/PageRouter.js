import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useLanguage } from "../../../locales/hooks/useLanguage";
import HomePage from "../../../pages/HomePage/HomePage";
import RegisterPage from "../../../pages/RegisterPage/RegisterPage";

const PageRouter = ({language}) => {

    const {changeLanguage} = useLanguage()

    useEffect(() => {
        changeLanguage(language)
    }, [language])
    
    return (
        <>
            <Routes>
                <Route path='/registration' element={<RegisterPage />} />
                <Route path='/' element={<HomePage />} />
            </Routes>
        </>
    );
}

export default PageRouter;