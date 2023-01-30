import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setAddAdvertFormStep } from "../../../../../store/slices/AddAdvertSlice";
import Text from "../../../../Elementes/Text/Text";
import SubCategoryInput from "../../Fields/SubCategoryInput";

const AddAdvertStep2 = () => {
    const {category} = useSelector(state => state.addAdvert)
    const dispatch = useDispatch()

    return (
        <>
            <div className="container container--width container--margin">
                <h1 className="title title--flex">
                    <a onClick={() => dispatch(setAddAdvertFormStep(1))} className="settings-nav__back--mob">
                        <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.916664 10.3224L4.94792 6.24953C5.04475 6.1519 5.15996 6.0744 5.2869 6.02152C5.41384 5.96863 5.54999 5.94141 5.6875 5.94141C5.82501 5.94141 5.96116 5.96863 6.0881 6.02152C6.21503 6.0744 6.33025 6.1519 6.42708 6.24953C6.62109 6.4447 6.72999 6.70871 6.72999 6.9839C6.72999 7.2591 6.62109 7.52311 6.42708 7.71828L2.71875 11.4579L23.9583 11.4579C24.2346 11.4579 24.4996 11.5676 24.6949 11.763C24.8903 11.9583 25 12.2233 25 12.4995V12.4995C25 12.7758 24.8903 13.0407 24.6949 13.2361C24.4996 13.4314 24.2346 13.5412 23.9583 13.5412L2.65625 13.5412L6.42708 17.3016C6.52472 17.3985 6.60221 17.5137 6.65509 17.6406C6.70798 17.7675 6.7352 17.9037 6.7352 18.0412C6.7352 18.1787 6.70798 18.3149 6.65509 18.4418C6.60221 18.5687 6.52472 18.6839 6.42708 18.7808C6.33025 18.8784 6.21503 18.9559 6.0881 19.0088C5.96116 19.0617 5.82501 19.0889 5.6875 19.0889C5.54999 19.0889 5.41384 19.0617 5.2869 19.0088C5.15996 18.9559 5.04475 18.8784 4.94792 18.7808L0.916664 14.7391C0.331453 14.1532 0.00274849 13.3589 0.00274849 12.5308C0.00274849 11.7027 0.331453 10.9084 0.916664 10.3224Z" fill="#414042"/>
                        </svg>
                    </a>

                    <Text content="Add advert" />
                </h1>

                <Link href="/">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.95 4.16667H18.695C18.4513 2.99105 17.8065 1.93474 16.8693 1.17575C15.9321 0.41676 14.7598 0.00151513 13.55 0L11.45 0C10.2402 0.00151513 9.06788 0.41676 8.13069 1.17575C7.19349 1.93474 6.5487 2.99105 6.305 4.16667H3.05C2.77152 4.16667 2.50445 4.27641 2.30754 4.47176C2.11062 4.66711 2 4.93207 2 5.20833C2 5.4846 2.11062 5.74955 2.30754 5.9449C2.50445 6.14025 2.77152 6.25 3.05 6.25H4.1V19.7917C4.10167 21.1725 4.65533 22.4963 5.63953 23.4727C6.62374 24.4491 7.95813 24.9983 9.35 25H15.65C17.0419 24.9983 18.3763 24.4491 19.3605 23.4727C20.3447 22.4963 20.8983 21.1725 20.9 19.7917V6.25H21.95C22.2285 6.25 22.4955 6.14025 22.6925 5.9449C22.8894 5.74955 23 5.4846 23 5.20833C23 4.93207 22.8894 4.66711 22.6925 4.47176C22.4955 4.27641 22.2285 4.16667 21.95 4.16667ZM11.45 2.08333H13.55C14.2013 2.08412 14.8364 2.28477 15.3682 2.65775C15.9 3.03074 16.3025 3.5578 16.5204 4.16667H8.47955C8.69751 3.5578 9.1 3.03074 9.63181 2.65775C10.1636 2.28477 10.7987 2.08412 11.45 2.08333ZM18.8 19.7917C18.8 20.6205 18.4681 21.4153 17.8774 22.0014C17.2866 22.5874 16.4854 22.9167 15.65 22.9167H9.35C8.51457 22.9167 7.71335 22.5874 7.12261 22.0014C6.53187 21.4153 6.2 20.6205 6.2 19.7917V6.25H18.8V19.7917Z" fill="#414042"/>
                        <path d="M10 18C10.2652 18 10.5196 17.8946 10.7071 17.7071C10.8946 17.5196 11 17.2652 11 17V11C11 10.7348 10.8946 10.4804 10.7071 10.2929C10.5196 10.1054 10.2652 10 10 10C9.73478 10 9.48043 10.1054 9.29289 10.2929C9.10536 10.4804 9 10.7348 9 11V17C9 17.2652 9.10536 17.5196 9.29289 17.7071C9.48043 17.8946 9.73478 18 10 18Z" fill="#414042"/>
                        <path d="M15 18C15.2652 18 15.5196 17.8946 15.7071 17.7071C15.8946 17.5196 16 17.2652 16 17V11C16 10.7348 15.8946 10.4804 15.7071 10.2929C15.5196 10.1054 15.2652 10 15 10C14.7348 10 14.4804 10.1054 14.2929 10.2929C14.1054 10.4804 14 10.7348 14 11V17C14 17.2652 14.1054 17.5196 14.2929 17.7071C14.4804 17.8946 14.7348 18 15 18Z" fill="#414042"/>
                    </svg>
                </Link>
            </div>

            <div className="categories-choice categories-choice--height">
                <h5 className="detail-title detail-title--padding">
                    <Text content={
                            category === 'realty' ? "Property types" :
                            category === 'avto' ? "Auto" :
                            category === 'work' ? "Job" :
                            category === 'services' ? "Services" :
                            category === 'children' ? "For kids" :
                            category === 'electronics' ? "Electronics" :
                            category === 'house_garden' ? "Fashion and style" :
                            category === 'fashion' ? "House and garden" : ''
                            
                        } />
                </h5>

                {
                    category === 'realty' && <>
                        <SubCategoryInput {...{text: 'Apartment', value: 'Apartments', categoryName: 'Real estate', category: 'realty'}} />
                        <SubCategoryInput {...{text: 'House', value: 'House', categoryName: 'Real estate', category: 'realty'}} />
                        <SubCategoryInput {...{text: 'land', value: 'Land', categoryName: 'Real estate', category: 'realty'}} />
                        <SubCategoryInput {...{text: 'Other', value: 'Other', categoryName: 'Real estate', category: 'realty'}} style={{borderBottom: 'none'}} />
                    </>
                }
                {
                    category === 'avto' && <>
                        <SubCategoryInput {...{text: 'Cars', value: 'Car', categoryName: 'Auto', category: 'avto'}} />
                        <SubCategoryInput {...{text: 'Other technique', value: 'Other equipment', categoryName: 'Auto', category: 'avto'}} style={{borderBottom: 'none'}} />
                    </>
                }
                {
                    category === 'work' && <>
                        <SubCategoryInput {...{text: 'Retail/sales/purchasing', value: 'Retail | Sales | Procurement', categoryName: 'Job', category: 'work'}} />
                        <SubCategoryInput {...{text: 'Logistics / Warehouse / Delivery', value: 'Logistics | Warehouse | Delivery', categoryName: 'Job', category: 'work'}} />
                        <SubCategoryInput {...{text: 'Construction / finishing works', value: 'Construction | finishing works', categoryName: 'Job', category: 'work'}} />
                        <SubCategoryInput {...{text: 'Administrative staff / HR / Secretariat', value: 'Administrative staff | HR | Secretariat', categoryName: 'Job', category: 'work'}} />
                        <SubCategoryInput {...{text: 'Security/security', value: 'Security | security', categoryName: 'Job', category: 'work'}} />
                        <SubCategoryInput {...{text: 'Cleaning / Home staff', value: 'Cleaning | Home staff', categoryName: 'Job', category: 'work'}} />
                        <SubCategoryInput {...{text: 'Beauty / Fitness / Sports', value: 'Beauty / Fitness / Sports', categoryName: 'Job', category: 'work'}} />
                        <SubCategoryInput {...{text: 'Education/translation', value: 'Education/translation', categoryName: 'Job', category: 'work'}} />
                        <SubCategoryInput {...{text: 'Culture / Arts / Entertainment', value: 'Culture / Arts / Entertainment', categoryName: 'Job', category: 'work'}} />
                        <SubCategoryInput {...{text: 'Medicine / Pharmacy', value: 'Medicine / Pharmacy', categoryName: 'Job', category: 'work'}} />
                        <SubCategoryInput {...{text: 'IT / computers', value: 'IT / computers', categoryName: 'Job', category: 'work'}} />
                        <SubCategoryInput {...{text: 'Banking /  Finance / Insurance / Jurisprudence', value: 'Banking /  Finance / Insurance / Jurisprudence', categoryName: 'Job', category: 'work'}} />
                        <SubCategoryInput {...{text: 'Real estate', value: 'Real estate', categoryName: 'Job', category: 'work'}} />
                        <SubCategoryInput {...{text: 'Advertising / Design / PR', value: 'Advertising / Design / PR', categoryName: 'Job', category: 'work'}} />
                        <SubCategoryInput {...{text: 'Production / Working specialties', value: 'Production / Working specialties', categoryName: 'Job', category: 'work'}} />
                        <SubCategoryInput {...{text: 'Work abroad', value: 'Work abroad', categoryName: 'Job', category: 'work'}} />
                        <SubCategoryInput {...{text: 'Accounting', value: 'Accounting', categoryName: 'Job', category: 'work'}} />
                        <SubCategoryInput {...{text: 'Hotel and restaurant business / Tourism', value: 'Hotel and restaurant business / Tourism', categoryName: 'Job', category: 'work'}} />
                        <SubCategoryInput {...{text: 'Service stations / Car washes', value: 'Service stations / Car washes', categoryName: 'Job', category: 'work'}} />
                        <SubCategoryInput {...{text: 'Part-time employment', value: 'Part-time employment', categoryName: 'Job', category: 'work'}} />
                        <SubCategoryInput {...{text: 'Other occupations', value: 'Other occupations', categoryName: 'Job', category: 'work'}} style={{borderBottom: 'none'}} />
                    </>
                }
                {
                    category === 'services' && <>
                        <SubCategoryInput {...{text: 'Cleaning', value: 'Cleaning', categoryName: 'Services', category: 'services'}} />
                        <SubCategoryInput {...{text: 'Business', value: 'Business', categoryName: 'Services', category: 'services'}} />
                        <SubCategoryInput {...{text: 'Domestic services', value: 'Domestic services', categoryName: 'Services', category: 'services'}} />
                        <SubCategoryInput {...{text: 'Beauty / Health', value: 'Beauty | Health', categoryName: 'Services', category: 'services'}} />
                        <SubCategoryInput {...{text: 'Education', value: 'Education', categoryName: 'Services', category: 'services'}} />
                        <SubCategoryInput {...{text: 'Transport', value: 'Transport', categoryName: 'Services', category: 'services'}} />
                        <SubCategoryInput {...{text: 'Construction / Repair', value: 'Construction | Repair', categoryName: 'Services', category: 'services'}} />
                        <SubCategoryInput {...{text: 'Other', value: 'Other', categoryName: 'Services', category: 'services'}} style={{borderBottom: 'none'}} />
                    </>
                }
                {
                    category === 'children' && <>
                        <SubCategoryInput {...{text: "Children's clothing", value: 'Baby clothing', categoryName: 'For kids', category: 'children'}} />
                        <SubCategoryInput {...{text: "Children's shoes", value: "Baby shoes", categoryName: 'For kids', category: 'children'}} />
                        <SubCategoryInput {...{text: "Baby strollers / Transport", value: "Baby stroller", categoryName: 'For kids', category: 'children'}} />
                        <SubCategoryInput {...{text: "Children's toys / Furniture", value: "Baby toys | Furniture", categoryName: 'For kids', category: 'children'}} />
                        <SubCategoryInput {...{text: "Other goods for children", value: "Other baby products", categoryName: 'For kids', category: 'children'}} style={{borderBottom: 'none'}} />
                    </>
                }
                {
                    category === 'electronics' && <>
                        <SubCategoryInput {...{text: "Phones and accessories", value: "Phones | Accessories", categoryName: 'Electronics', category: 'electronics'}} />
                        <SubCategoryInput {...{text: "Computers / Tablets / Games", value: "Computers | Games", categoryName: 'Electronics', category: 'electronics'}} />
                        <SubCategoryInput {...{text: "TV / Photo / Video / Audio", value: "Video | Audio | TV | Photo", categoryName: 'Electronics', category: 'electronics'}} />
                        <SubCategoryInput {...{text: "Other technique", value: "Other equipment", categoryName: 'Electronics', category: 'electronics'}} style={{borderBottom: 'none'}} />
                    </>
                }
                {
                    category === 'house_garden' && <>
                        <SubCategoryInput {...{text: "Furniture", value: "Furniture", categoryName: 'House and garden', category: 'house_garden'}} />
                        <SubCategoryInput {...{text: "Food / Drinks", value: "Food | Drinks", categoryName: 'House and garden', category: 'house_garden'}} />
                        <SubCategoryInput {...{text: "Garden", value: "Garden", categoryName: 'House and garden', category: 'house_garden'}} />
                        <SubCategoryInput {...{text: "Interior items", value: "Interior items", categoryName: 'House and garden', category: 'house_garden'}} />
                        <SubCategoryInput {...{text: "Construction / Renovation", value: "Construction | Renovation", categoryName: 'House and garden', category: 'house_garden'}} />
                        <SubCategoryInput {...{text: "Other household goods", value: "Other household goods", categoryName: 'House and garden', category: 'house_garden'}} style={{borderBottom: 'none'}} />
                    </>
                }
                {
                    category === 'fashion' && <>
                        <SubCategoryInput {...{text: "Women's clothing", value: "Women's clothing", categoryName: 'Fashion and style', category: 'fashion'}} />
                        <SubCategoryInput {...{text: "Women's shoes", value: "Women's shoes", categoryName: 'Fashion and style', category: 'fashion'}} />
                        <SubCategoryInput {...{text: "Children's clothes", value: "Children's clothes", categoryName: 'Fashion and style', category: 'fashion'}} />
                        <SubCategoryInput {...{text: "Men's clothing", value: "Men's clothing", categoryName: 'Fashion and style', category: 'fashion'}} />
                        <SubCategoryInput {...{text: "Accessories", value: "Accessories", categoryName: 'Fashion and style', category: 'fashion'}} style={{borderBottom: 'none'}} />
                    </>
                }
                <p className="step-text step-text--bottom">
                    <Text content="step" /> 2 <Text content="of" /> 3
                </p>
            </div>
        </>
    );
}

export default AddAdvertStep2;