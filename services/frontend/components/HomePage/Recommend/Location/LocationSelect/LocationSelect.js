import { useEffect, useRef, useState } from "react";
import Text from "../../../../Elementes/Text/Text";
import ApplyLocationButtonContainer from "./ApplyLocationButton/ApplyLocationButtonContainer";
import LocationFieldContainer from "./LocationField/LocationFieldContainer";
import LocationSelectOptionsContainer from "./LocationSelectOptions/LocationSelectOptionsContainer";

const LocationSelect = ({closeLocationSelect}) => {
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)
    
    const minSwipeDistance = 30
    
    const onTouchStart = (e) => {
      setTouchEnd(null) 
      setTouchStart(e.targetTouches[0].clientY)
    }
    
    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientY)
    
    const onTouchEnd = () => {
      if (!touchStart || !touchEnd) return

      const distance = touchEnd - touchStart
      const isSwipe = distance > minSwipeDistance
      if(isSwipe && window.innerWidth < 600) {
            locationSelectElem.current.style.bottom = '-100%'

            setTimeout(closeLocationSelect, 500)
        }
    }

    const locationSelectElem = useRef(null)
    useEffect(() => {
        if(locationSelectElem.current && window.innerWidth < 600) {
            locationSelectElem.current.style.bottom = '0'
            locationSelectElem.current.style.transition = 'bottom 500ms'
        }
    }, [locationSelectElem.current, window.innerWidth])

    return (
        <>
            <div className="modal-screen modal-screen--location">
                <div className="location-select" ref={locationSelectElem} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
                    <div className="close-line" onClick={closeLocationSelect} />

                    <h5 className="title title--loc"><Text content="Location" /></h5>

                    <div className="search-wrapper">
                        <LocationFieldContainer {...{closeLocationSelect}} />
                    </div>

                    <LocationSelectOptionsContainer />

                    <ApplyLocationButtonContainer />

                    <button className="close-location" onClick={closeLocationSelect}>
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.1682 0.606533L11.2132 8.56148L3.25825 0.606533C2.52602 -0.125695 1.33883 -0.125696 0.606602 0.606533C-0.125627 1.33876 -0.125627 2.52596 0.606602 3.25818L8.56155 11.2131L0.606602 19.1681C-0.125627 19.9003 -0.125627 21.0875 0.606602 21.8197C1.33883 22.552 2.52602 22.552 3.25825 21.8197L11.2132 13.8648L19.1682 21.8197C19.9004 22.552 21.0876 22.552 21.8198 21.8197C22.552 21.0875 22.552 19.9003 21.8198 19.1681L13.8649 11.2131L21.8198 3.25818C22.552 2.52595 22.552 1.33876 21.8198 0.606533C21.0876 -0.125695 19.9004 -0.125696 19.1682 0.606533Z" fill="#414042"/>
                        </svg>
                    </button>
                </div>
            </div>


            <div className="screen-dimmer screen-dimmer--location" onClick={closeLocationSelect} />
        </>
    );
}

export default LocationSelect;