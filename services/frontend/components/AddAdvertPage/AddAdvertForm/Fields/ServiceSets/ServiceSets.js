import { useCurrency } from "../../../../../locales/hooks/useCurrency";
import Text from "../../../../Elementes/Text/Text";
import EnableSubmitButtonContainer from "../EnableSubmitButton/EnableSubmitButtonContainer";

const ServiceSets = ({requiredFields}) => {
    const {currency, countCurrencyPrice} = useCurrency()
    return (
        <>
            <div className="radio-group">
                <div className="promote-card">
                    <h5 className="promote-card__title">
                        <Text content="Easy start" />
                    </h5>
                    
                    <p className="promote-card__text">
                        <svg viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.19748 10C3.82846 10.0002 3.47456 9.84387 3.21384 9.56559L0.239991 6.39787C-0.0799971 6.05679 -0.0799971 5.50389 0.239991 5.1628C0.560082 4.82183 1.07895 4.82183 1.39904 5.1628L4.19748 8.14478L11.601 0.255731C11.9211 -0.0852438 12.4399 -0.0852438 12.76 0.255731C13.08 0.596816 13.08 1.14971 12.76 1.4908L5.18111 9.56559C4.9204 9.84387 4.56649 10.0002 4.19748 10Z" fill="#414042"/>
                        </svg>

                        <Text content="TOP ad for 3 days" />
                    </p>


                    <div className="promote-card__submit">
                        <EnableSubmitButtonContainer {...{lifts: 0, top: 3, vip: 0, servicePrice: 4.9,
                                                            requiredFields
                                                            }} />

                        <p className="promote-card__cost">
                            <Text content="for" /> {currency}{countCurrencyPrice(4.9, '$')}
                        </p>
                    </div>
                </div>

                <div className="promote-card">
                    <h5 className="promote-card__title">
                        <Text content="Quick sale" />
                    </h5>
                    
                    <p className="promote-card__text">
                        <svg viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.19748 10C3.82846 10.0002 3.47456 9.84387 3.21384 9.56559L0.239991 6.39787C-0.0799971 6.05679 -0.0799971 5.50389 0.239991 5.1628C0.560082 4.82183 1.07895 4.82183 1.39904 5.1628L4.19748 8.14478L11.601 0.255731C11.9211 -0.0852438 12.4399 -0.0852438 12.76 0.255731C13.08 0.596816 13.08 1.14971 12.76 1.4908L5.18111 9.56559C4.9204 9.84387 4.56649 10.0002 4.19748 10Z" fill="#414042"/>
                        </svg>

                        <Text content="TOP ad for 7 days" />
                    </p>

                    <p className="promote-card__text">
                        <svg viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.19748 10C3.82846 10.0002 3.47456 9.84387 3.21384 9.56559L0.239991 6.39787C-0.0799971 6.05679 -0.0799971 5.50389 0.239991 5.1628C0.560082 4.82183 1.07895 4.82183 1.39904 5.1628L4.19748 8.14478L11.601 0.255731C11.9211 -0.0852438 12.4399 -0.0852438 12.76 0.255731C13.08 0.596816 13.08 1.14971 12.76 1.4908L5.18111 9.56559C4.9204 9.84387 4.56649 10.0002 4.19748 10Z" fill="#414042"/>
                        </svg>

                        <Text content="3 lifts in the up issue" />
                    </p>


                    <div className="promote-card__submit">
                        <EnableSubmitButtonContainer {...{lifts: 3, top: 7, vip: 0, servicePrice: 8.9,
                                                            requiredFields}} />

                        <p className="promote-card__cost">
                            <Text content="for" /> {currency}{countCurrencyPrice(8.9, '$')}
                        </p>
                    </div>
                </div>

                <div className="promote-card">
                    <h5 className="promote-card__title">
                        <Text content="Turbo sale" />
                    </h5>
                    
                    <p className="promote-card__text">
                        <svg viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.19748 10C3.82846 10.0002 3.47456 9.84387 3.21384 9.56559L0.239991 6.39787C-0.0799971 6.05679 -0.0799971 5.50389 0.239991 5.1628C0.560082 4.82183 1.07895 4.82183 1.39904 5.1628L4.19748 8.14478L11.601 0.255731C11.9211 -0.0852438 12.4399 -0.0852438 12.76 0.255731C13.08 0.596816 13.08 1.14971 12.76 1.4908L5.18111 9.56559C4.9204 9.84387 4.56649 10.0002 4.19748 10Z" fill="#414042"/>
                        </svg>

                        <Text content="TOP ad for 7 days" />
                    </p>

                    <p className="promote-card__text">
                        <svg viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.19748 10C3.82846 10.0002 3.47456 9.84387 3.21384 9.56559L0.239991 6.39787C-0.0799971 6.05679 -0.0799971 5.50389 0.239991 5.1628C0.560082 4.82183 1.07895 4.82183 1.39904 5.1628L4.19748 8.14478L11.601 0.255731C11.9211 -0.0852438 12.4399 -0.0852438 12.76 0.255731C13.08 0.596816 13.08 1.14971 12.76 1.4908L5.18111 9.56559C4.9204 9.84387 4.56649 10.0002 4.19748 10Z" fill="#414042"/>
                        </svg>

                        <Text content="9 lifts in the up issue" />
                    </p>

                    <p className="promote-card__text">
                        <svg viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.19748 10C3.82846 10.0002 3.47456 9.84387 3.21384 9.56559L0.239991 6.39787C-0.0799971 6.05679 -0.0799971 5.50389 0.239991 5.1628C0.560082 4.82183 1.07895 4.82183 1.39904 5.1628L4.19748 8.14478L11.601 0.255731C11.9211 -0.0852438 12.4399 -0.0852438 12.76 0.255731C13.08 0.596816 13.08 1.14971 12.76 1.4908L5.18111 9.56559C4.9204 9.84387 4.56649 10.0002 4.19748 10Z" fill="#414042"/>
                        </svg>

                        <Text content="VIP ad for 7 days" />
                    </p>


                    <div className="promote-card__submit">
                        <EnableSubmitButtonContainer {...{lifts: 9, top: 7, vip: 7, servicePrice: 30.9,
                                                            requiredFields}} />

                        <p className="promote-card__cost">
                            <Text content="for" /> {currency}{countCurrencyPrice(30.9, '$')}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServiceSets;