import Header from "../Header/Header";
import HeaderService from "../Header/HeaderService/HeaderService";
import AddAdvertFormContainer from "./AddAdvertForm/AddAdvertFormContainer";

const AddAdvertPage = () => {
    return (
        <>
            <Header />
            <HeaderService />
            <main className="main">
                <AddAdvertFormContainer />
            </main>
        </>
    );
}

export default AddAdvertPage;