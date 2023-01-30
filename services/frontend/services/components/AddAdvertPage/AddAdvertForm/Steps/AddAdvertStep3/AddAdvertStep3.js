import { useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";
import Text from "../../../../Elementes/Text/Text";
import RadioGroup from "../../Fields/RadioGroup/RadioGroup";
import AddAdvertNav from "./AddAdvertNav/AddAdvertNav";
import AddAdvertRouter from "./AddAdvertRouter/AddAdvertRouter";
import AddAuto from "./AddAdvertRouter/AddRealty/AddRealty";

const AddAdvertStep3 = () => {
    
    return (
        <>
            <AddAdvertNav />
            <AddAdvertRouter />
        </>
    );
}

export default AddAdvertStep3;