import { useRouter } from "next/router";
import Other from "./Other/Other";
import Realty from "./Realty/Realty";

const CategoryRouter = () => {
    const {query: {category}} = useRouter()
    return (
        <>
            {
                category === 'realty' ? <Realty /> :
                category === 'avto' ? <Other /> :
                category === 'work' ? <Other /> :
                category === 'services' ? <Other /> :
                category === 'children' ? <Other /> :
                category === 'electronics' ? <Other /> :
                category === 'house_garden' ? <Other /> :
                category === 'fashion' ? <Other /> : ''
            }
        </>
    );
}

export default CategoryRouter;