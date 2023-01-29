import DetailBanner from "./DetailBanner"

const DetailBannerState = ({offset, setOffset, items}) => {
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
        items[offsetOther],
    ]

    const transition = 1000

    const dots = items.map((value, index) => index)

    return <DetailBanner {...{switchToNext, transition, slideList, dots, setOffset, offset}} />;
}

export default DetailBannerState;