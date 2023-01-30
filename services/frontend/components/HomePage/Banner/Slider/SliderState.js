import { useState } from "react";
import SliderContainer from "./SliderContainer";

const SliderState = ({items, transition}) => {
    const [offset, setOffset] = useState(0);

    return <SliderContainer {...{offset, setOffset, items, transition}} />
}

export default SliderState;