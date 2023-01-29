import Header from "../Header/Header";
import HeaderService from "../Header/HeaderService/HeaderService";
import LocationContainer from "../HomePage/Recommend/Location/LocationContainer";
import CategoryNav from "./CategoryNav/CategoryNav";
import CategoryRouter from "./CategoryRouter/CategoryRouter";

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
            </main>
        </>
    );
}

export default CategorySection;