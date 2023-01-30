import { Route, Routes } from "react-router-dom";
import PageRouter from "../PageRouter/PageRouter";
import LanguageRedirect from "./LanguageRedirect";

const LanguageRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/en/*' element={<PageRouter language={'en'} />} />
                <Route path='/ru/*' element={<PageRouter language={'ru'} />} />
                <Route path='/tr/*' element={<PageRouter language={'tr'} />} />
                <Route path='/*' element={<LanguageRedirect />} />
            </Routes>
        </>
    );
}

export default LanguageRouter;