import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuthThunk } from "../../../../../store/slices/AuthSlice";
import Auth from "./Auth";

const AuthContainer = () => {
    
    return <Auth />;
}

export default AuthContainer;