import BrandOption from "./BrandOption";

const BrandSelect = ({brands, onBrandClick, isSearching}) => {
    return (
        <>
            {
                isSearching ? brands.map(((brand, index) => <BrandOption key={index} {...{brand, onBrandClick}} />)) : ''
            }
        </>
    );
}

export default BrandSelect;