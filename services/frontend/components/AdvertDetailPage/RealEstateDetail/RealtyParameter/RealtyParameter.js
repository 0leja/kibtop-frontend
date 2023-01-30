import Text from "../../../Elementes/Text/Text";

const RealtyParameter = ({categoryName, subCategoryName, condition, rooms}) => {
    
    return (
        <>
            <div className="detail-parameter">
                <h4 className="detail-title"><Text content="parameter" /></h4>

                <div className="detail-parameter__grid">
                    <p className="detail-tag-text">
                        <Text content="Category" />:<span className="detail-tag-text--black">{categoryName}</span>
                    </p>

                    <p className="detail-tag-text">
                        <Text content="Condition" />:<span className="detail-tag-text--black">{condition}</span>
                    </p>

                    <p className="detail-tag-text">
                        <Text content="Property types" />:<span className="detail-tag-text--black">{subCategoryName}</span>
                    </p>

                    <p className="detail-tag-text">
                        <Text content="Rooms" />:<span className="detail-tag-text--black">{rooms}</span>
                    </p>
                </div>
                
                
            </div>
        </>
    );
}

export default RealtyParameter;