
import { useEffect, useRef } from 'react';
import Event from './Event';
import SliderItem from './SliderItem';

const Slider = ({switchToBefore, switchToNext, transition, slideList, offset}) => {
    const sliderLineEl = useRef(null)


    const slide = () => sliderLineEl.current ? `${sliderLineEl.current.childNodes[0].clientWidth}px` : '50vw'


    const multiplySlide = (slide, mult) => {
        if(+slide) return mult * (+slide)

        const slideNum = +slide.slice(0, slide.length-2)
        const slideVal = slide.slice(slide.length-2)

        return `${slideNum*mult}${slideVal}`
    }

    const switchSlider = setOffset => {
        
            setTimeout(() => {
                if(!!sliderLineEl.current) {
                    setOffset()
                    sliderLineEl.current.style.transitionDuration = '0ms'
                    sliderLineEl.current.style.left = `-${multiplySlide(slide(), 1)}`
                }
            }, transition)
    }

    const onNext = () => {
        if(!!sliderLineEl.current) {
            sliderLineEl.current.style.transitionDuration = `${transition}ms`
            sliderLineEl.current.style.left = `-${multiplySlide(slide(), 2)}`

            switchSlider(switchToNext)
        }
    }


    useEffect(() => {
        setTimeout(() => {
            if(!!sliderLineEl.current) onNext()
        }, transition*5)

    }, [offset])


    return (
        <>
            <div className="window">
                <div className="container container--slider">
                    <div className="slider" >
                        <div className="slider__line" ref={sliderLineEl} >
                            { 
                                slideList.map((item, index) => (
                                    <SliderItem {...{slide}} key={index}>
                                        <Event {...item} />
                                    </SliderItem>
                                ))
                            }
                        </div>
                    </div>
                </div>
                
            </div>

        </>
    );
}

export default Slider;

