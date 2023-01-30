import { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import UserMenuBody from "./UserMenuBody/UserMenuBody";
import UserMenuHeadContainer from "./UserMenuHead/UserMenuHeadContainer";

const BurgerUserMenu = ({isOpen, closeBurgerUserMenu, delay}) => {
    const userMenuElement = useRef(null)
    const appearDelay = delay || 400

    const onClose = () => {
        userMenuElement.current.style.left = '-100%'
        setTimeout(() => {
            closeBurgerUserMenu()
        }, appearDelay)
        
    }

    const closeMenu = () => {
        userMenuElement.current.style.left = '-100%'
        closeBurgerUserMenu()
    }


    useEffect(() => {
        if(isOpen && !!userMenuElement.current) userMenuElement.current.style.left = '0'
    }, [isOpen])


    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)
    
    const minSwipeDistance = 80
    
    const onTouchStart = (e) => {
      setTouchEnd(null) 
      setTouchStart(e.targetTouches[0].clientX)
    }
    
    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)
    
    const onTouchEnd = () => {
      if (!touchStart || !touchEnd) return

      const distance = touchStart - touchEnd
      const isLeftSwipe = distance > minSwipeDistance
      if(isLeftSwipe) onClose()
    }

    return (
        <>
            {
                <>
                    <div className="user-menu" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
                            ref={userMenuElement} 
                            style={{transition: `all ${appearDelay}ms 0s linear`}} >
                        <UserMenuHeadContainer {...{onClose: closeMenu}} />
                        <UserMenuBody {...{onClose: closeMenu}} />
                    </div>
                    
                    {
                        isOpen && <div className="screen-dimmer screen-dimmer--full" onClick={onClose} />
                    }
                    
                </>
                    
            }
        </>
    );
}

export default BurgerUserMenu;