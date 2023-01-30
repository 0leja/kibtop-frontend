import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setAddAdvertCategory, setAddAdvertFormStep } from "../../../../../store/slices/AddAdvertSlice";
import Text from "../../../../Elementes/Text/Text";
import CategoryNameInput from "../../Fields/CategoryNameInput";
import DeskCategoryInput from "../../Fields/DeskCategoryInput";
import Image from "next/image"

const AddAdvertStep1 = () => {
    const {formStep} = useSelector(state => state.addAdvert)
    const dispatch = useDispatch()


    return (
        <>
            <div className="container container--width container--margin">
                <h1 className="title title--flex">
                    <Link href={'/'} className="settings-nav__back--mob">
                        <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.916664 10.3224L4.94792 6.24953C5.04475 6.1519 5.15996 6.0744 5.2869 6.02152C5.41384 5.96863 5.54999 5.94141 5.6875 5.94141C5.82501 5.94141 5.96116 5.96863 6.0881 6.02152C6.21503 6.0744 6.33025 6.1519 6.42708 6.24953C6.62109 6.4447 6.72999 6.70871 6.72999 6.9839C6.72999 7.2591 6.62109 7.52311 6.42708 7.71828L2.71875 11.4579L23.9583 11.4579C24.2346 11.4579 24.4996 11.5676 24.6949 11.763C24.8903 11.9583 25 12.2233 25 12.4995V12.4995C25 12.7758 24.8903 13.0407 24.6949 13.2361C24.4996 13.4314 24.2346 13.5412 23.9583 13.5412L2.65625 13.5412L6.42708 17.3016C6.52472 17.3985 6.60221 17.5137 6.65509 17.6406C6.70798 17.7675 6.7352 17.9037 6.7352 18.0412C6.7352 18.1787 6.70798 18.3149 6.65509 18.4418C6.60221 18.5687 6.52472 18.6839 6.42708 18.7808C6.33025 18.8784 6.21503 18.9559 6.0881 19.0088C5.96116 19.0617 5.82501 19.0889 5.6875 19.0889C5.54999 19.0889 5.41384 19.0617 5.2869 19.0088C5.15996 18.9559 5.04475 18.8784 4.94792 18.7808L0.916664 14.7391C0.331453 14.1532 0.00274849 13.3589 0.00274849 12.5308C0.00274849 11.7027 0.331453 10.9084 0.916664 10.3224Z" fill="#414042"/>
                        </svg>
                    </Link>

                    <Text content="Add advert" />
                </h1>

                <Link href="/" className="profile-link">
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 1.25199C14.9997 1.58377 14.8661 1.90186 14.6284 2.13633L8.14972 8.53693C7.95362 8.73061 7.79806 8.96056 7.69193 9.21365C7.5858 9.46673 7.53118 9.73799 7.53118 10.0119C7.53118 10.2859 7.5858 10.5571 7.69193 10.8102C7.79806 11.0633 7.95362 11.2933 8.14972 11.4869L14.62 17.8792C14.8507 18.1152 14.9784 18.4313 14.9755 18.7595C14.9726 19.0876 14.8394 19.4014 14.6046 19.6335C14.3697 19.8655 14.052 19.9971 13.7199 20C13.3878 20.0028 13.0678 19.8767 12.8289 19.6487L6.35861 13.2615C5.48861 12.4003 5 11.2332 5 10.0165C5 8.7998 5.48861 7.63279 6.35861 6.77159L12.8373 0.366817C13.0145 0.191688 13.2402 0.0724106 13.486 0.0240773C13.7318 -0.024256 13.9866 0.000527255 14.2181 0.0952911C14.4497 0.190055 14.6475 0.35054 14.7867 0.55644C14.9259 0.762339 15.0001 1.0044 15 1.25199Z" fill="#7AB1FF"/>
                    </svg>

                    <Text content="Go back to the main page" />
                </Link>

                
            </div>


            <div className="categories-choice categories-choice--desk">
                <div className="category-wrapper">
                    <div className="category-line">
                        <img width={100} height={100} alt={''} src="/img/add_advert/realty.png" className="advert-form__icon" />

                        <label className="category-title">
                            <Text content="Real estate" />
                        </label>
                    </div>

                    <div className="category-line">
                        <DeskCategoryInput {...{text: 'Apartment', value: 'Apartments', categoryName: 'Real estate', category: 'realty'}} />
                        <DeskCategoryInput {...{text: 'House', value: 'House', categoryName: 'Real estate', category: 'realty'}} />
                        <DeskCategoryInput {...{text: 'land', value: 'Land', categoryName: 'Real estate', category: 'realty'}} />
                        <DeskCategoryInput {...{text: 'Other', value: 'Other', categoryName: 'Real estate', category: 'realty'}} />
                    </div>
                </div>


                <div className="category-wrapper">
                    <div className="category-line">
                        <img width={100} height={100} alt={''} src="/img/add_advert/avto.png" className="advert-form__icon" />

                        <label className="category-title">
                            <Text content="Auto" />
                        </label>
                    </div>

                    <div className="category-line">
                        <DeskCategoryInput {...{text: 'Cars', value: 'Car', categoryName: 'Auto', category: 'avto'}} />
                        <DeskCategoryInput {...{text: 'Other technique', value: 'Other equipment', categoryName: 'Auto', category: 'avto'}} />
                    </div>
                </div>

                <div className="category-wrapper">
                    <div className="category-line">
                        <img width={100} height={100} alt={''} src="/img/add_advert/work.png" className="advert-form__icon" />

                        <label className="category-title">
                            <Text content="Job" />
                        </label>
                    </div>

                    <div className="category-line">
                        <DeskCategoryInput {...{text: 'Retail/sales/purchasing', value: 'Retail | Sales | Procurement', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Logistics / Warehouse / Delivery', value: 'Logistics | Warehouse | Delivery', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Construction / finishing works', value: 'Construction | finishing works', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Administrative staff / HR / Secretariat', value: 'Administrative staff | HR | Secretariat', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Security/security', value: 'Security | security', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Cleaning / Home staff', value: 'Cleaning | Home staff', categoryName: 'Job', category: 'work'}} />

                        <DeskCategoryInput {...{text: 'Beauty / Fitness / Sports', value: 'Beauty | Fitness | Sports', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Education/translation', value: 'Education | translation', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Culture / Arts / Entertainment', value: 'Culture | Arts | Entertainment', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Medicine / Pharmacy', value: 'Medicine | Pharmacy', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'IT / computers', value: 'IT | computers', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Banking /  Finance / Insurance / Jurisprudence', value: 'Banking | Finance | Insurance | Jurisprudence', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Real estate', value: 'Real estate', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Advertising / Design / PR', value: 'Advertising | Design | PR', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Production / Working specialties', value: 'Production | Working specialties', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Work abroad', value: 'Work abroad', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Accounting', value: 'Accounting', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Hotel and restaurant business / Tourism', value: 'Hotel and restaurant business | Tourism', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Service stations / Car washes', value: 'Service stations | Car washes', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Part-time employment', value: 'Part-time employment', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Other occupations', value: 'Other occupations', categoryName: 'Job', category: 'work'}} />
                    </div>
                </div>

                <div className="category-wrapper">
                    <div className="category-line">
                        <img width={100} height={100} alt={''} src="/img/add_advert/services.png" className="advert-form__icon" />

                        <label className="category-title">
                            <Text content="Services" />
                        </label>
                    </div>

                    <div className="category-line">
                        <DeskCategoryInput {...{text: 'Cleaning', value: 'Cleaning', categoryName: 'Services', category: 'services'}} />
                        <DeskCategoryInput {...{text: 'Business', value: 'Business', categoryName: 'Services', category: 'services'}} />
                        <DeskCategoryInput {...{text: 'Domestic services', value: 'Domestic services', categoryName: 'Services', category: 'services'}} />
                        <DeskCategoryInput {...{text: 'Beauty / Health', value: 'Beauty | Health', categoryName: 'Services', category: 'services'}} />
                        <DeskCategoryInput {...{text: 'Education', value: 'Education', categoryName: 'Services', category: 'services'}} />
                        <DeskCategoryInput {...{text: 'Transport', value: 'Transport', categoryName: 'Services', category: 'services'}} />
                        <DeskCategoryInput {...{text: 'Construction / Repair', value: 'Construction | Repair', categoryName: 'Services', category: 'services'}} />
                        <DeskCategoryInput {...{text: 'Other', value: 'Other', categoryName: 'Services', category: 'services'}} />
                    </div>
                </div>


                <div className="category-wrapper">
                    <div className="category-line">
                        <img width={100} height={100} alt={''} src="/img/add_advert/children.png" className="advert-form__icon" />

                        <label className="category-title">
                            <Text content="For kids" />
                        </label>
                    </div>

                    <div className="category-line">
                        <DeskCategoryInput {...{text: "Children's clothing", value: 'Baby clothing', categoryName: 'For kids', category: 'children'}} />
                        <DeskCategoryInput {...{text: "Children's shoes", value: "Baby shoes", categoryName: 'For kids', category: 'children'}} />
                        <DeskCategoryInput {...{text: "Baby strollers / Transport", value: "Baby stroller", categoryName: 'For kids', category: 'children'}} />
                        <DeskCategoryInput {...{text: "Children's toys / Furniture", value: "Baby toys | Furniture", categoryName: 'For kids', category: 'children'}} />
                        <DeskCategoryInput {...{text: "Other goods for children", value: "Other baby products", categoryName: 'For kids', category: 'children'}} />
                    </div>
                </div>

                <div className="category-wrapper">
                    <div className="category-line">
                        <img width={100} height={100} alt={''} src="/img/add_advert/electronics.png" className="advert-form__icon" />

                        <label className="category-title">
                            <Text content="Electronics" />
                        </label>
                    </div>

                    <div className="category-line">
                        <DeskCategoryInput {...{text: "Phones and accessories", value: "Phones | Accessories", categoryName: 'Electronics', category: 'electronics'}} />
                        <DeskCategoryInput {...{text: "Computers / Tablets / Games", value: "Computers | Games", categoryName: 'Electronics', category: 'electronics'}} />
                        <DeskCategoryInput {...{text: "TV / Photo / Video / Audio", value: "Video | Audio | TV | Photo", categoryName: 'Electronics', category: 'electronics'}} />
                        <DeskCategoryInput {...{text: "Other technique", value: "Other equipment", categoryName: 'Electronics', category: 'electronics'}} />
                    </div>
                </div>

                <div className="category-wrapper">
                    <div className="category-line">
                        <img width={100} height={100} alt={''} src="/img/add_advert/fashion.png" className="advert-form__icon" />

                        <label className="category-title">
                            <Text content="Fashion and style" />
                        </label>
                    </div>

                    <div className="category-line">
                        <DeskCategoryInput {...{text: "Women's clothing", value: "Women's clothing", categoryName: 'Fashion and style', category: 'fashion'}} />
                        <DeskCategoryInput {...{text: "Women's shoes", value: "Women's shoes", categoryName: 'Fashion and style', category: 'fashion'}} />
                        <DeskCategoryInput {...{text: "Children's clothes", value: "Children's clothes", categoryName: 'Fashion and style', category: 'fashion'}} />
                        <DeskCategoryInput {...{text: "Men's clothing", value: "Men's clothing", categoryName: 'Fashion and style', category: 'fashion'}} />
                        <DeskCategoryInput {...{text: "Accessories", value: "Accessories", categoryName: 'Fashion and style', category: 'fashion'}} />
                    </div>
                </div>

                <div className="category-wrapper">
                    <div className="category-line">
                        <img width={100} height={100} alt={''} src="/img/add_advert/house_garden.png" className="advert-form__icon" />

                        <label className="category-title">
                            <Text content="House and garden" />
                        </label>
                    </div>

                    <div className="category-line">
                        <DeskCategoryInput {...{text: "Furniture", value: "Furniture", categoryName: 'House and garden', category: 'house_garden'}} />
                        <DeskCategoryInput {...{text: "Food / Drinks", value: "Food | Drinks", categoryName: 'House and garden', category: 'house_garden'}} />
                        <DeskCategoryInput {...{text: "Garden", value: "Garden", categoryName: 'House and garden', category: 'house_garden'}} />
                        <DeskCategoryInput {...{text: "Interior items", value: "Interior items", categoryName: 'House and garden', category: 'house_garden'}} />
                        <DeskCategoryInput {...{text: "Construction / Renovation", value: "Construction | Renovation", categoryName: 'House and garden', category: 'house_garden'}} />
                        <DeskCategoryInput {...{text: "Other household goods", value: "Other household goods", categoryName: 'House and garden', category: 'house_garden'}} />

                    </div>
                </div>
            </div>
            
            <div className="categories-choice categories-choice--mob">
                <CategoryNameInput {...{value: 'Real estate', text: 'Real estate', category: 'realty'}} />
                <CategoryNameInput {...{value: 'Auto', text: 'Auto', category: 'avto'}} />
                <CategoryNameInput {...{value: 'Job', text: 'Job', category: 'work'}} />
                <CategoryNameInput {...{value: 'Services', text: 'Services', category: 'services'}} />
                <CategoryNameInput {...{value: 'For kids', text: 'For kids', category: 'children'}} />
                <CategoryNameInput {...{value: 'Electronics', text: 'Electronics', category: 'electronics'}} />
                <CategoryNameInput {...{value: 'House and garden', text: 'House and garden', category: 'house_garden'}} />
                <CategoryNameInput {...{value: 'Fashion and style', text: 'Fashion and style', category: 'fashion'}} />

            </div>
        </>
    );
}

export default AddAdvertStep1;