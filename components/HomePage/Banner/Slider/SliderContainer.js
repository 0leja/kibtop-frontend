import Slider from "./Presentation/Slider"

const SliderContainer = ({offset, setOffset, items, transition}) => {
    
    const lastIndex = items.length-1

    const offsetBefore = (!offset) ? lastIndex : offset-1
    const offsetNext = (offset === lastIndex) ? 0 : offset+1
    const offsetBehiend = (offsetNext === lastIndex) ? 0 : offsetNext+1
    const offsetOther = (offsetBehiend === lastIndex) ? 0 : offsetBehiend+1


    const switchToNext = () => {
        setOffset(offsetNext)
    }

    const switchToBefore = () => {
        setOffset(offsetBefore)
    }

    const slideList = [
        items[offsetBefore],
        items[offset],
        items[offsetNext],
        items[offsetBehiend],
        items[offsetOther]
    ]

    return <Slider {...{switchToBefore, switchToNext, transition, slideList, offset}} />
}

export default SliderContainer;

