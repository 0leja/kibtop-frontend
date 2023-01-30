import { useEffect } from "react";
import Text from "../../../Elementes/Text/Text";

const AddPhoneSucces = ({onLoad}) => {
    useEffect(() => {
        setTimeout(onLoad, 500)
    }, [])
    return (
        <>
            <div className="greeting-phone">
                <svg className="greeting-phone__img" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="40" r="40" fill="#71CD96"/>
                    <path d="M32.9153 55C31.7799 55.0005 30.6909 54.5472 29.8888 53.7402L20.7384 44.5538C19.7539 43.5647 19.7539 41.9613 20.7384 40.9721C21.7233 39.9833 23.3198 39.9833 24.3047 40.9721L32.9153 49.6199L55.6953 26.7416C56.6802 25.7528 58.2767 25.7528 59.2616 26.7416C60.2461 27.7308 60.2461 29.3342 59.2616 30.3233L35.9419 53.7402C35.1397 54.5472 34.0508 55.0005 32.9153 55Z" fill="white"/>
                </svg>
                <h4 className="title greeting-phone__title">
                    <Text content="Ready" />!
                </h4>
            </div>
            
        </>
    );
}

export default AddPhoneSucces;