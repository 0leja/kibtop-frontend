import { useFormContext } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setAddAdvertCategory, setAddAdvertFormStep, setAddAdvertSubCategoryText } from "../../../../store/slices/AddAdvertSlice";
import Text from "../../../Elementes/Text/Text";

const DeskCategoryInput = ({text, value, categoryName, category}) => {
    const {setValue} = useFormContext()
    const dispatch = useDispatch()
    const setCategoryForm = category => dispatch(setAddAdvertCategory(category))
    const setSubCategoryForm = subCategory => dispatch(setAddAdvertSubCategoryText(subCategory))
    const switchFormStep = step => dispatch(setAddAdvertFormStep(step))

    const onCategoryClick = () => {
        setValue('categoryName', categoryName, {shouldTouch: true, shouldValidate: true})
        setValue('subCategory', value, {shouldTouch: true, shouldValidate: true})

        setSubCategoryForm(text)
        setCategoryForm(category)
        switchFormStep(3)
    }

    return (
        <>
            <a className="category-btn" onClick={onCategoryClick}>
                <Text content={text} />
            </a>
        </>
    );
}

export default DeskCategoryInput;