import Good from "./Good/Good";

const Goods = ({goods}) => {
    return (
        <>
            <div className="container">
                <div className="goods__list">
                    {
                        goods?.map(good => <Good key={`${good.category}_${good.id}`} {...good} />)
                    }
                </div>
            </div>
        </>
    );
}

export default Goods;