const AddressOption = ({suggestion, setAddressChoice}) => {
    const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;
    
    return (
        <>
            <a  key={place_id} 
                                onClick={setAddressChoice(suggestion)} 
                                className="address-select__option">{main_text}, <span className="small">{secondary_text}</span></a>
        </>
    );
}

export default AddressOption;