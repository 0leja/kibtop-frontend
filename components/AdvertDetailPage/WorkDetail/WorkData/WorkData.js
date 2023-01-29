import { useRouter } from "next/router";
import { useCurrency } from "../../../../locales/hooks/useCurrency";
import Text from "../../../Elementes/Text/Text";

const WorkData = ({title, cost, description, workType}) => {
    const workTitle = (workType == "To work") ? 'Vacancy' : 'Candidate'
    const {query: {category}} = useRouter()
    const {currency} = useCurrency()
    
    const isMounthed = (category === 'work') || (
        category === 'realty'
    )


    return (
        <>
            <div className="detail-name">
                <div>
                    <p className="detail-title">
                        <Text content={workTitle} />
                    </p>
                    <h3 className="title">{title}</h3>
                </div>

                <p className="detail-cost">
                    {currency}{cost}
                    {' '}
                    {
                        isMounthed && <span className="detail-tag-text"><Text content="per month" /></span>
                    }
                </p>
            </div>
            
            <article className="detail-article">
                <h3 className="detail-title">
                    <Text content="description" />
                </h3>

                <p className="detail-text">
                    {description}
                </p>
            </article>
                
            
        </>
    );
}

export default WorkData;