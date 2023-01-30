import Image from "next/image"
import { useFormContext } from "react-hook-form"
import { useDispatch } from "react-redux"
import { setAddAdvertCategory, setAddAdvertFormStep } from "../../../../store/slices/AddAdvertSlice"
import Text from "../../../Elementes/Text/Text"

const CategoryNameInput = ({value, text, category}) => {
    const {setValue} = useFormContext()
    const dispatch = useDispatch()
    const setCategoryForm = category => dispatch(setAddAdvertCategory(category))
    const switchFormStep = step => dispatch(setAddAdvertFormStep(step))

    const onCategoryClick = () => {
        setValue('categoryName', value, {shouldTouch: true, shouldValidate: true})
        setCategoryForm(category)
        switchFormStep(2)
    }

    return (
        <>
            
            <a className="category-name" onClick={onCategoryClick}>
                <img width={100} height={100} alt={''} src={`/img/add_advert/${category}.png`} className="category-name__img" />
                <Text content={text} />
            </a>
        </>
    );
}

export default CategoryNameInput;