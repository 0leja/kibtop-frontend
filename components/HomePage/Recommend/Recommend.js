import Text from "../../Elementes/Text/Text";
import GoodsContainer from "./Goods/GoodsContainer";
import LocationContainer from "./Location/LocationContainer";

const Recommend = ({recommendGoods}) => {
    return (
        <>
            <section className="goods">
                <div className="container container--goods">
                    <h2 className="title title--goods"><Text content="Recommended" /></h2>

                    <LocationContainer />
                </div>

                <GoodsContainer {...{recommendGoods}} />
            </section>
        </>
    );
}

export default Recommend;