import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { useSwipe } from "../../../AppHooks/useSwipe"
import Text from "../../../Elementes/Text/Text"

const FavoritesWarning = ({isWarnOpen, closeFavoritesWarning}) => {
    const {swipe, handleClose} = useSwipe({onClose: closeFavoritesWarning})


    return (
        <>
            {
                !!isWarnOpen && <>
                    <div className="modal-screen modal-screen--favorites" {...swipe}>
                        <div className="favorites-warn">

                            <div className="add-greeting add-greeting--modal">
                                <svg viewBox="0 0 163 173" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M88.218 27C82.5431 27.088 76.992 28.6674 72.1252 31.5788C67.2585 34.4902 63.2484 38.6304 60.5 43.5813C57.7516 38.6304 53.7415 34.4902 48.8748 31.5788C44.008 28.6674 38.4569 27.088 32.782 27C23.7356 27.3919 15.2124 31.3375 9.07448 37.975C2.9366 44.6124 -0.317041 53.4021 0.0243974 62.4237C0.0243974 85.2708 24.1441 110.223 44.3732 127.141C48.8898 130.925 54.6004 133 60.5 133C66.3996 133 72.1102 130.925 76.6268 127.141C96.8559 110.223 120.976 85.2708 120.976 62.4237C121.317 53.4021 118.063 44.6124 111.926 37.975C105.788 31.3375 97.2644 27.3919 88.218 27Z" fill="#7AB1FF" fillOpacity="0.4"/>
                                    <path d="M147.286 120C144.566 120.042 141.905 120.802 139.572 122.203C137.24 123.604 135.317 125.596 134 127.978C132.683 125.596 130.76 123.604 128.428 122.203C126.095 120.802 123.434 120.042 120.714 120C116.377 120.189 112.292 122.087 109.35 125.28C106.408 128.474 104.848 132.703 105.012 137.043C105.012 148.036 116.573 160.041 126.27 168.181C128.435 170.002 131.172 171 134 171C136.828 171 139.565 170.002 141.73 168.181C151.427 160.041 162.988 148.036 162.988 137.043C163.152 132.703 161.592 128.474 158.65 125.28C155.708 122.087 151.623 120.189 147.286 120Z" fill="#35D073" fillOpacity="0.4"/>
                                    <path d="M150.892 3C148.969 3.02989 147.088 3.5663 145.439 4.55507C143.79 5.54383 142.431 6.94994 141.5 8.63139C140.569 6.94994 139.21 5.54383 137.561 4.55507C135.912 3.5663 134.031 3.02989 132.108 3C129.043 3.13309 126.155 4.47313 124.075 6.72735C121.995 8.98158 120.893 11.9668 121.008 15.0307C121.008 22.7901 129.181 31.2645 136.036 37.0102C137.566 38.2954 139.501 39 141.5 39C143.499 39 145.434 38.2954 146.964 37.0102C153.819 31.2645 161.992 22.7901 161.992 15.0307C162.107 11.9668 161.005 8.98158 158.925 6.72735C156.845 4.47313 153.957 3.13309 150.892 3Z" fill="#FFC11E" fillOpacity="0.4"/>
                                </svg>


                                <h3 className="title add-greeting__title">
                                    <Text content="Great choice!" />
                                </h3>

                                <p className="add-greeting__text">
                                    <Text content="Sign up to have access to the Favorites list" />
                                </p>

                                <Link href="/auth/registration" className="reg-btn reg-btn--warn" onClick={closeFavoritesWarning}>
                                    <Text content="Sign up" />
                                </Link>
                            </div>

                            <div className="close-line close-line--top" onClick={handleClose} />

                            <button className="close-location" onClick={closeFavoritesWarning}>
                                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.1682 0.606533L11.2132 8.56148L3.25825 0.606533C2.52602 -0.125695 1.33883 -0.125696 0.606602 0.606533C-0.125627 1.33876 -0.125627 2.52596 0.606602 3.25818L8.56155 11.2131L0.606602 19.1681C-0.125627 19.9003 -0.125627 21.0875 0.606602 21.8197C1.33883 22.552 2.52602 22.552 3.25825 21.8197L11.2132 13.8648L19.1682 21.8197C19.9004 22.552 21.0876 22.552 21.8198 21.8197C22.552 21.0875 22.552 19.9003 21.8198 19.1681L13.8649 11.2131L21.8198 3.25818C22.552 2.52595 22.552 1.33876 21.8198 0.606533C21.0876 -0.125695 19.9004 -0.125696 19.1682 0.606533Z" fill="#414042"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="screen-dimmer screen-dimmer--location" onClick={closeFavoritesWarning} />
                </>
            }
        </>
    );
}

export default FavoritesWarning;