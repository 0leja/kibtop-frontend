import Link from "next/link";
import { useRouter } from "next/router";

const PageLink = ({page, number}) => {
    const {query: {category}} = useRouter()
    return (
        <>
            <Link href={`/adverts/${category}/${page}`} >{number}</Link>
        </>
    );
}

export default PageLink;