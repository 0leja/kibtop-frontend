import AddressOption from "./AddressOption";

const AddressSelect = ({cities, setAddressChoice}) => {

    return (
        <>
            {
                cities?.map((suggestion) => <AddressOption 
                                                key={suggestion.place_id} 
                                                {...{suggestion, setAddressChoice}} />)
            }
        </>
    );
}

export default AddressSelect;