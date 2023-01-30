const SliderItem = ({children, slide}) => {
    return (
        <>
            <div className="slider__item">
                {children}
            </div>
        </>
    );
}

export default SliderItem;