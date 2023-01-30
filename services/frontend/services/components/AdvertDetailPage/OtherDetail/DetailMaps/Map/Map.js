import { GoogleMap, Marker } from "@react-google-maps/api";
import { useRef } from "react";
import { useCallback } from "react";
import { defaultTheme } from "./MapTheme";


const containerStyle = {
    width: '100%',
    height: '100%'
};

const defaultOptions = {
    panControl: true,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    fullscreenControl: false,
    styles: defaultTheme
}


const Map = ({center}) => {

    const mapRef = useRef(null)

    const onLoad = useCallback(function callback(map) {
        mapRef.current = map
      }, [])
    
      const onUnmount = useCallback(function callback(map) {
        mapRef.current = null
      }, [])

    return (
        <>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={defaultOptions}
            >
                { /* Child components, such as markers, info windows, etc. */ }
                <>
                    <Marker position={center} icon={{url: '/img/goods/marker.svg'}} />
                </>
            </GoogleMap>
        </>
    );
}

export default Map;