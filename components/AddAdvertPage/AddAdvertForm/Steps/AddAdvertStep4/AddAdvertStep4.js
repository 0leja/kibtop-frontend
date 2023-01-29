import { useDispatch } from "react-redux";
import { setAddAdvertFormStep } from "../../../../../store/slices/AddAdvertSlice";
import Text from "../../../../Elementes/Text/Text";
import ServiceSets from "../../Fields/ServiceSets/ServiceSets";
import ServiceSetsGroupContainer from "../../Fields/ServiceSetsGroup/ServiceSetsGroupContainer";
import SubmitButtonContainer from "../../Fields/SubmitButton/SubmitButtonContainer";

const AddAdvertStep4 = () => {
    const dispatch = useDispatch()

    const switchToBack = () => dispatch(setAddAdvertFormStep(3))
    return (
        <>
            <div className="advert-nav">
                <div className="advert-nav__heading">
                    <a onClick={switchToBack} className="advert-nav__back">
                        <svg viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.916664 5.32245L4.94792 1.24953C5.04475 1.1519 5.15996 1.0744 5.2869 1.02152C5.41384 0.968633 5.54999 0.941406 5.6875 0.941406C5.82501 0.941406 5.96116 0.968633 6.0881 1.02152C6.21504 1.0744 6.33025 1.1519 6.42708 1.24953V1.24953C6.62109 1.4447 6.72999 1.70871 6.72999 1.9839C6.72999 2.2591 6.62109 2.52311 6.42708 2.71828L2.71875 6.45786L23.9583 6.45786C24.2346 6.45786 24.4996 6.56761 24.6949 6.76296C24.8903 6.95831 25 7.22326 25 7.49953V7.49953C25 7.7758 24.8903 8.04075 24.6949 8.2361C24.4996 8.43145 24.2346 8.5412 23.9583 8.5412L2.65625 8.5412L6.42708 12.3016C6.52472 12.3985 6.60221 12.5137 6.65509 12.6406C6.70798 12.7675 6.7352 12.9037 6.7352 13.0412C6.7352 13.1787 6.70798 13.3149 6.65509 13.4418C6.60221 13.5687 6.52472 13.6839 6.42708 13.7808C6.33025 13.8784 6.21504 13.9559 6.0881 14.0088C5.96116 14.0617 5.82501 14.0889 5.6875 14.0889C5.54999 14.0889 5.41384 14.0617 5.2869 14.0088C5.15996 13.9559 5.04475 13.8784 4.94792 13.7808L0.916664 9.73911C0.331454 9.15317 0.00274785 8.35891 0.00274785 7.53078C0.00274785 6.70265 0.331454 5.90839 0.916664 5.32245V5.32245Z" fill="#414042"/>
                        </svg>
                    </a>

                    <h4 className="title title--mobile-add">
                        <Text content="Add advert" />
                    </h4>
                </div>


                <div className="advert-nav__delete">

                    <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.75 5H21.875C21.5849 3.58927 20.8173 2.32168 19.7016 1.4109C18.5859 0.500113 17.1903 0.00181816 15.75 0L13.25 0C11.8097 0.00181816 10.4141 0.500113 9.29844 1.4109C8.18273 2.32168 7.41512 3.58927 7.125 5H3.25C2.91848 5 2.60054 5.1317 2.36612 5.36612C2.1317 5.60054 2 5.91848 2 6.25C2 6.58152 2.1317 6.89946 2.36612 7.13388C2.60054 7.3683 2.91848 7.5 3.25 7.5H4.5V23.75C4.50198 25.407 5.1611 26.9956 6.33278 28.1672C7.50445 29.3389 9.09301 29.998 10.75 30H18.25C19.907 29.998 21.4956 29.3389 22.6672 28.1672C23.8389 26.9956 24.498 25.407 24.5 23.75V7.5H25.75C26.0815 7.5 26.3995 7.3683 26.6339 7.13388C26.8683 6.89946 27 6.58152 27 6.25C27 5.91848 26.8683 5.60054 26.6339 5.36612C26.3995 5.1317 26.0815 5 25.75 5ZM13.25 2.5H15.75C16.5253 2.50095 17.2814 2.74172 17.9145 3.1893C18.5476 3.63689 19.0268 4.26936 19.2863 5H9.71375C9.97323 4.26936 10.4524 3.63689 11.0855 3.1893C11.7186 2.74172 12.4747 2.50095 13.25 2.5ZM22 23.75C22 24.7446 21.6049 25.6984 20.9017 26.4017C20.1984 27.1049 19.2446 27.5 18.25 27.5H10.75C9.75544 27.5 8.80161 27.1049 8.09835 26.4017C7.39509 25.6984 7 24.7446 7 23.75V7.5H22V23.75Z" fill="#414042"/>
                        <path d="M12.5 22C12.8978 22 13.2794 21.8683 13.5607 21.6339C13.842 21.3995 14 21.0815 14 20.75V13.25C14 12.9185 13.842 12.6005 13.5607 12.3661C13.2794 12.1317 12.8978 12 12.5 12C12.1022 12 11.7206 12.1317 11.4393 12.3661C11.158 12.6005 11 12.9185 11 13.25V20.75C11 21.0815 11.158 21.3995 11.4393 21.6339C11.7206 21.8683 12.1022 22 12.5 22Z" fill="#414042"/>
                        <path d="M17.5 22C17.8978 22 18.2794 21.8683 18.5607 21.6339C18.842 21.3995 19 21.0815 19 20.75V13.25C19 12.9185 18.842 12.6005 18.5607 12.3661C18.2794 12.1317 17.8978 12 17.5 12C17.1022 12 16.7206 12.1317 16.4393 12.3661C16.158 12.6005 16 12.9185 16 13.25V20.75C16 21.0815 16.158 21.3995 16.4393 21.6339C16.7206 21.8683 17.1022 22 17.5 22Z" fill="#414042"/>
                    </svg>

                </div>
            </div>

            <div className="service-mob">
                <article className="service-mob__article">
                    <img src="/img/add_advert/promote.png" alt="" className="service-mob__img" />
                    <div className="service-mob__desc">
                        <h4 className="title promote-title">
                            <Text content="Promote your products" />
                        </h4>
                        <p className="service-mob__text">
                            <Text content={"Sell much faster and more profitably!"} />
                        </p>
                    </div>
                </article>
                

                <div className="advert-form__field">
                    <label className="advert-form__label">
                        <Text content="Service sets" />
                    </label>

                    <ServiceSets requiredFields={[]} />
                </div>

                <div className="total">
                    <div className="advert-form__field">
                        <label className="advert-form__label">
                            <Text content="Service sets" />
                        </label>

                        <ServiceSetsGroupContainer requiredFields={[]} />
                    </div>
                </div>
                
            </div>

            <div className="total">
                <SubmitButtonContainer requiredFields={[]} />
            </div>
            

                
            <p className="step-text">
                <Text content="step" /> 3 <Text content="of" /> 3
            </p>
            
        </>
    );
}

export default AddAdvertStep4;