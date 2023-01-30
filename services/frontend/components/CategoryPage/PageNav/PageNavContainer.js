import { useSelector } from "react-redux";
import PageNav from "./PageNav";

const PageNavContainer = () => {
    const {pages} = useSelector(state => state.category)
    return <PageNav {...{pages}} />;
}

export default PageNavContainer;