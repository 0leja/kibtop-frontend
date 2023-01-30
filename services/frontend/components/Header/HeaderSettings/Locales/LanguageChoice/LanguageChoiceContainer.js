import { useRouter } from "next/router";
import LanguageChoice from "./LanguageChoice";

const LanguageChoiceContainer = () => {
    const {pathname} = useRouter();
    
    const linkPath = language => pathname.split('/').map((route, index) => {
        if(index === 1) return language
        else return route
    }).join('/')

    return <LanguageChoice {...{linkPath}} />
}

export default LanguageChoiceContainer;