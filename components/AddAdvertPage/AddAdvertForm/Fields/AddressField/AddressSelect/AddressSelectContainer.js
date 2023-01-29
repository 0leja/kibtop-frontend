import { useSelector } from "react-redux";
import AddressSelect from "./AddressSelect";

const AddressSelectContainer = ({data, setAddressChoice}) => {
    const cities = data

    return <AddressSelect {...{cities, setAddressChoice}} />;
}

export default AddressSelectContainer;