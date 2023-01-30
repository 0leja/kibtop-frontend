import Header from "../Header/Header";
import HeaderService from "../Header/HeaderService/HeaderService";
import LocationContainer from "../HomePage/Recommend/Location/LocationContainer";
import CategoryNav from "./CategoryNav/CategoryNav";
import CategoryRouter from "./CategoryRouter/CategoryRouter";
import PageNavContainer from "./PageNav/PageNavContainer";

const CategorySection = () => {
    return (
        <>
            <Header />
            <HeaderService />
            <main className="main">
                <CategoryNav />

                <div className="container container--end category-settings">
                    <LocationContainer />
                </div>
                <CategoryRouter />
                <PageNavContainer />
            </main>
        </>
    );
}

export default CategorySection;