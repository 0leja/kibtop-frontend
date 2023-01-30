const BrandOption = ({brand, onBrandClick}) => {
    return (
        <>
            <a onClick={() => onBrandClick(brand)} 
                className="address-select__option address-select__option--brand">
                {brand}
            </a>
        </>
    );
}

export default BrandOption;