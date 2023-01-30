import { useState } from "react";
import { useCurrency } from "../../../../../locales/hooks/useCurrency";
import Text from "../../../../Elementes/Text/Text";

const ServiceSetsCheck = ({price, text, onServiceSet, value, addFullPrice}) => {
    const {currency, countCurrencyPrice} = useCurrency()
    const [isChecked, setChecked] = useState(false)
    
    const mult = isChecked ? -1 : 1

    const onClick = () => {
        onServiceSet(value*mult)
        addFullPrice(price*mult)
        setChecked(!isChecked)
    }

    const isCheckedStyle = isChecked ? 'service-set__check service-set__check--checked' : 'service-set__check'

    return (
        <>
            <div className="service-set" {...{onClick}}>
                <div className={isCheckedStyle}>
                    <svg viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.45766 15.219C5.88994 15.2192 5.34547 14.9935 4.94438 14.5918L0.369217 10.0183C-0.123072 9.52586 -0.123072 8.7276 0.369217 8.23515C0.861665 7.74286 1.65992 7.74286 2.15237 8.23515L6.45766 12.5404L17.8476 1.15047C18.3401 0.658178 19.1383 0.658178 19.6308 1.15047C20.1231 1.64291 20.1231 2.44117 19.6308 2.93362L7.97094 14.5918C7.56984 14.9935 7.02538 15.2192 6.45766 15.219Z" fill="white"/>
                    </svg>
                </div>

                <div className="service-set__value">
                    <p className="service-set__text">
                        <Text content={text} />
                    </p>
                    <div className="service-set__dots" />
                    <p className="service-set__cost">
                        <Text content="for" /> {currency}{countCurrencyPrice(price, '$')}
                    </p>
                </div>
            </div>

            
        </>
    );
}

export default ServiceSetsCheck;