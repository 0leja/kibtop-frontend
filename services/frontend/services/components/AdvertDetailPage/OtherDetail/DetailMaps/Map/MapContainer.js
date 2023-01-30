import { useJsApiLoader } from "@react-google-maps/api";
import { useMapContext } from "../../../../../locales/hooks/useMapContext";
import Map from "./Map";

const center = {
    lat: 35,
    lng: 33
};

const libraries = ['places']

const defaultOptions = {
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    fullscreenControl: false,
}


const MapContainer = ({geocode, setDistance}) => {
    const {isLoaded} = useMapContext()

    const [lat, lng] = geocode?.split(' ') || '35 33'

    const rad = function(x) {
        return x * Math.PI / 180;
      };
      
    const getDistance = function(p1, p2) {
        var R = 6378137; // Earth’s mean radius in meter
        var dLat = rad(p2.lat - p1.lat);
        var dLong = rad(p2.lng - p1.lng);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
          Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d; // returns the distance in meter
    };

    try {
        navigator.geolocation.getCurrentPosition(function(position) {
            const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
    
            console.log(Math.floor(getDistance({lat, lng}, pos))/ 1000)

            setDistance(Math.floor(getDistance({lat, lng}, pos) / 1000))
        });
    } catch(err) {

    }
        
    
    

    return (
        <>
            {
                isLoaded ? <Map {...{center: {lat: Number(lat), lng: Number(lng)}}} /> : <>Loading</>
            }
        </>
    );
}

export default MapContainer;