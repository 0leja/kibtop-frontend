import RadioInput from "./RadioInput/RadioInput";

const RadioGroup = ({name, inputs}) => {
    return (
        <>
            <div className="radio-group">
                {
                    inputs.map((input, index) => <RadioInput key={index} {...{...input, name}} />)
                }
            </div>
        </>
    );
}

export default RadioGroup;