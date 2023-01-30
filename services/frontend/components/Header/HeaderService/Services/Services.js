import AuthContainer from "./Auth/AuthContainer";
import SearchProducts from "./SearchProducts/SearchProducts";
import useMobileException from "./SearchProducts/UseMobileException";

const Services = () => {
    const ExceptionStyle = useMobileException()
    return (
        <>
            <div className={"services-wrapper" + ExceptionStyle}>
                <SearchProducts />
                <AuthContainer />
            </div>
            
        </>
    );
}

export default Services;