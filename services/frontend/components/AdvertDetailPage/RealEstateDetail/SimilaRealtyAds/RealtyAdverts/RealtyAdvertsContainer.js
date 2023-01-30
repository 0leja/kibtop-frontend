import RealtyAdverts from "./RealtyAdverts";

const RealtyAdvertsContainer = () => {
    const adverts = [1, 2, 3, 4, 5, 6]

    return <RealtyAdverts {...{adverts}} />;
}

export default RealtyAdvertsContainer;