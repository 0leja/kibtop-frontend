import { useRouter } from "next/router";
import FilterButtonContainer from "./FilterButton/FilterButtonContainer";
import MobileFilterButtonContainer from "./MobileFilterButton/MobileFilterButtonContainer";
import SearchProductsFormContainer from "./SearchProductsForm/SearchProductsFormContainer";
import useMobileException from "./UseMobileException";

const SearchProducts = () => {
    
    return (
        <>
            <div className={"search"}>
                <SearchProductsFormContainer />

                <FilterButtonContainer />
            </div>
            <MobileFilterButtonContainer />
        </>
    );
}

export default SearchProducts;