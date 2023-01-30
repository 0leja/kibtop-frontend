import { useContext } from "react";
import { LocationContext } from "../LocationContext";

const useLocation = () => {
    const {location, changeLocation} = useContext(LocationContext)

    return {location, changeLocation}
}

export default useLocation;