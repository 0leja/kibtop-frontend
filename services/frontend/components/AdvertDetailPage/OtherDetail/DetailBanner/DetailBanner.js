import { useRef, useState } from "react"
import Image from "next/image"


const DetailBanner = ({switchToNext, transition, slideList, dots, offset, setOffset}) => {
    const sliderLineEl = useRef(null)

    const [isDisabled, setDisabled] = useState(false)


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

                    setDisabled(false)
                }
            }, transition)
    }

    const onNext = () => {
        if(!!sliderLineEl.current) {
            setDisabled(true)
            sliderLineEl.current.style.transitionDuration = `${transition}ms`
            sliderLineEl.current.style.left = `-${multiplySlide(slide(), 2)}`
            

            switchSlider(switchToNext)
        }
    }


    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)
    
    const minSwipeDistance = 50
    
    const onTouchStart = (e) => {
      setTouchEnd(null) 
      setTouchStart(e.targetTouches[0].clientX)
    }
    
    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)
    
    const onTouchEnd = () => {
      if (!touchStart || !touchEnd) return

      const distance = touchStart - touchEnd
      const isLeftSwipe = distance > minSwipeDistance
      if(isLeftSwipe && !isDisabled) onNext()
    }

    return (
        <>
            <div className="detail-slider" {...{onTouchStart, onTouchMove, onTouchEnd}}>
                <div className="detail-slider__line"  ref={sliderLineEl}>
                        {
                            slideList.map((src, index) =>    <div key={index} className="detail-slider__item">
                                                        <img width={100} height={100} alt={''} src={src} className="detail-slider__img" />
                                                    </div>)
                        }
                </div>

                <button disabled={isDisabled} onClick={onNext} className="detail-slider__btn">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 18.7522C5.0003 18.4204 5.13394 18.1023 5.37156 17.8678L11.8503 11.4672C12.0464 11.2736 12.2019 11.0436 12.3081 10.7905C12.4142 10.5374 12.4688 10.2662 12.4688 9.99223C12.4688 9.71829 12.4142 9.44703 12.3081 9.19394C12.2019 8.94086 12.0464 8.71091 11.8503 8.51723L5.38001 2.1208C5.14927 1.88478 5.02159 1.56866 5.02448 1.24055C5.02737 0.912428 5.16058 0.598556 5.39544 0.366533C5.63029 0.134509 5.948 0.00289857 6.28012 4.7307e-05C6.61224 -0.00280395 6.93221 0.123332 7.17111 0.351289L13.6414 6.74271C14.5114 7.60391 15 8.77092 15 9.98764C15 11.2044 14.5114 12.3714 13.6414 13.2326L7.16267 19.6332C6.98577 19.8081 6.7604 19.9272 6.51501 19.9757C6.26961 20.0242 6.01518 19.9998 5.78382 19.9055C5.55246 19.8113 5.35455 19.6514 5.21505 19.4462C5.07555 19.2409 5.00072 18.9994 5 18.7522Z" fill="#414042"/>
                    </svg>
                </button>

                <div className="detail-slider__gradient" />

                <div className="detail-slider__dots">
                    {
                        dots.map(index => <div key={index} onClick={() => setOffset(index)} className={"detail-slider__dot" + (offset === index ? ' black' : '')} />)
                    }
                </div>
            </div>
        </>
    );
}

export default DetailBanner;