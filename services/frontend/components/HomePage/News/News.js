import Text from "../../Elementes/Text/Text";
import GoodsContainer from "./Goods/GoodsContainer";

const News = ({newGoods}) => {
    return (
        <>
            <section className="goods">
                <div className="container container--goods">
                    <h2 className="title title--goods"><Text content="New announcements" /></h2>
                    
                </div>

                <GoodsContainer {...{newGoods}} />
            </section>
        </>
    );
}

export default News;