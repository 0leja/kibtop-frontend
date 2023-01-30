import { useFormContext } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setAddAdvertFormStep } from "../../../../../store/slices/AddAdvertSlice";
import { validateStepFields } from "../validators";
import NextButton from "./NextButton";

const NextButtonContainer = ({requiredFields}) => {
    const {formState: {errors}, watch} = useFormContext()
    const dispatch = useDispatch()

    const onNextClick = () => dispatch(setAddAdvertFormStep(4))


    const isDisabled = validateStepFields(requiredFields, 
                                        {errors, fields: watch() || {}})


    return <NextButton {...{isDisabled, onClick: onNextClick}} />;
}

export default NextButtonContainer;