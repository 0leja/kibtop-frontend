import SliderState from "./Slider/SliderState";


const Banner = ({data, isLoading}) => {
    const transition = 1000

    const items = (!data) ? [
        {id: 1, background: 'linear-gradient(104.96deg, #FDDB92 -14.49%, #D1FDFF 110.23%)'},
        {id: 2, background: 'linear-gradient(105.27deg, #CE9FFC 0%, #7367F0 155.64%), #D9D9D9'},
        {id: 3, background: 'linear-gradient(286.88deg, #FF9966 -10.73%, #FF5E62 136.16%), #D9D9D9'},
        {id: 4, background: 'linear-gradient(104.96deg, #FBFA00 -14.49%, #98E5D9 110.23%)'},
    ] : data

    return (
        <>
            <SliderState {...{items, transition}} />
        </>
    );
}

export default Banner;