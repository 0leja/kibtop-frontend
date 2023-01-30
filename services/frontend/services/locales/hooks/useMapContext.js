
import { useContext } from "react";
import { CoogleMapContext } from "../MapContext";

export const useMapContext = () => {
    const {isLoaded} = useContext(CoogleMapContext)
    return {isLoaded}
}