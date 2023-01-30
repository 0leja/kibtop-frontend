import Text from "../../../Elementes/Text/Text";

const DetailDate = ({className, date}) => {
    return (
        <>
            <p className={"detail-tag-text"+' '+className}>
                <Text content="Publication date" />:<span className="detail-tag-text--black">{date}</span>
            </p>
        </>
    );
}

export default DetailDate;