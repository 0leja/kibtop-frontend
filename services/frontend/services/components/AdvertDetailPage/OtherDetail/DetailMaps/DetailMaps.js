import { useState } from "react";
import Text from "../../../Elementes/Text/Text";
import Map from "./Map/Map";
import MapContainer from "./Map/MapContainer";

const DetailMaps = ({address, city, geocode}) => {
    const [distance, setDistance] = useState(null)
    return (
        <>
            <article className="detail-article detail-maps">
                <div className="detail-maps__desc">
                    <h4 className="detail-title detail-title--mb-14">
                        <Text content="address" />
                    </h4>

                    <div className="detail-maps__place">
                        <div className="detail-maps__address">
                            <div className="detail-maps__string">
                                <svg className="detail-maps__icon" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_647_8218)">
                                        <path d="M15.5 0C12.1861 0.00363886 9.00901 1.31909 6.66563 3.65778C4.32226 5.99647 3.00398 9.16741 3 12.475C3 15.6875 5.49223 20.715 10.4078 27.4175C10.993 28.2176 11.7592 28.8686 12.6441 29.3173C13.5289 29.7661 14.5075 30 15.5 30C16.4925 30 17.4711 29.7661 18.3559 29.3173C19.2408 28.8686 20.007 28.2176 20.5922 27.4175C25.5078 20.715 28 15.6875 28 12.475C27.996 9.16741 26.6777 5.99647 24.3344 3.65778C21.991 1.31909 18.8139 0.00363886 15.5 0ZM15.5 17.4475C14.5092 17.4475 13.5407 17.1542 12.7169 16.6048C11.893 16.0554 11.251 15.2745 10.8718 14.3609C10.4926 13.4473 10.3934 12.4419 10.5867 11.472C10.78 10.5021 11.2571 9.61121 11.9577 8.91195C12.6583 8.21269 13.5509 7.73649 14.5227 7.54356C15.4944 7.35064 16.5017 7.44965 17.4171 7.82809C18.3324 8.20653 19.1148 8.84739 19.6653 9.66963C20.2157 10.4919 20.5095 11.4586 20.5095 12.4475C20.5095 13.7736 19.9817 15.0453 19.0423 15.983C18.1028 16.9207 16.8286 17.4475 15.5 17.4475Z" fill="#414042"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_647_8218">
                                            <rect width="30" height="30" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="detail-text">
                                    {address}
                                </p>
                            </div>
                            <p className="detail-text--low">
                                {city}
                            </p>
                        </div>
                    </div>

                    <p className="detail-maps__distance detail-tag-text">
                        {!!distance && <>{distance} <Text content="km from you" /></>}
                    </p>
                </div>

                <div className="detail-maps__map">
                    <MapContainer {...{geocode, setDistance}} />
                </div>
            </article>
        </>
    );
}

export default DetailMaps;