import Image from "next/image";

const Svg = ({symbol, className}) => {
    return (
        <>
            <svg className={className}>
                <use xlinkHref={`/icons/spirte.svg#${symbol}`}></use>
            </svg>
        </>
    );
}

export default Svg;