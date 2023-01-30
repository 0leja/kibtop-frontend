import Link from "next/link";
import Text from "../../Elementes/Text/Text";
import Image from "next/image"



const CategoryNavLink = ({id, link, text, backgroundColor, img}) => {
    return (
        <>
            <li className="categories-nav__category" key={id}>
                <Link href={link} className="categories-nav__link">
                    <div className="category-icon" style={{backgroundColor}}>
                        <img width={100} height={100} alt={''} src={`/img/categories/${img}`} />
                    </div>

                    <p className="button-text button-text--category"><Text content={text} /></p>
                </Link>
            </li>
        </>
    );
}

export default CategoryNavLink;