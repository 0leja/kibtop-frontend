const LocationSelectOptionMobile = ({city, cityId, chooseLocation}) => {
    const onLocationOptionClick = () => chooseLocation(city, cityId)

    return (
        <>
            <button className="locatin-select__option" onClick={onLocationOptionClick}>
                            {city}
            </button>
        </>
    );
}

export default LocationSelectOptionMobile;