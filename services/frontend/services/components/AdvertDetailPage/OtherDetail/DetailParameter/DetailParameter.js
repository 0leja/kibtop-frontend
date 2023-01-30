import Text from "../../../Elementes/Text/Text";

const DetailParameter = ({categoryName, subCategoryName}) => {
    return (
        <>
            <div className="detail-parameter">
                <h4 className="detail-title"><Text content="parameter" /></h4>

                <p className="detail-tag-text">
                    <Text content="Category" />:<span className="detail-tag-text--black">{categoryName}</span>
                </p>

                <p className="detail-tag-text">
                    <Text content="Goods type" />:<span className="detail-tag-text--black">{subCategoryName}</span>
                </p>
                
            </div>
        </>
    );
}

export default DetailParameter;