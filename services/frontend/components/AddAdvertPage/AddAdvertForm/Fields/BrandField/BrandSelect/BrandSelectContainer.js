import { useFormContext } from "react-hook-form";
import { brandList } from "./BrandList";
import BrandSelect from "./BrandSelect";


const BrandSelectContainer = ({onSearchSelect, isSearching}) => {
    const {watch, setValue} = useFormContext()
    const {brand} = watch()

    const lowerBrand = brand?.toLowerCase()

    const searchBrands = brandList.filter(brandName => (
        brandName.toLowerCase().includes(lowerBrand)
    )).sort((startName, similar) => startName.toLowerCase().indexOf(lowerBrand) - similar.toLowerCase().indexOf(lowerBrand))

    const onBrandClick = brand => {
        setValue('brand', brand)
        onSearchSelect()
    }

    

    return <BrandSelect {...{brands: searchBrands, onBrandClick, isSearching}} />;
}

export default BrandSelectContainer;