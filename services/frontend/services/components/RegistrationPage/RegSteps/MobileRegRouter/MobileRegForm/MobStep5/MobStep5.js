import Text from "../../../../../Elementes/Text/Text";
import CityField from "../../../DesktopRegRouter/DeskRegForm/Fields/CityField";
import NextMobRegBtnContainer from "../NextMobRegBtn/NextMobRegBtnContainer";
import SkipMobRegBtnContainer from "../SkipMobRegBtn/SkipMobRegBtnContainer";

const MobStep5 = ({errors, isValid, isLoading, onSubmit, name, message, touchedFields}) => {
    const isStepError = !!errors ? (!!errors.city) : false
    const isTouched = !!touchedFields ? Object.keys(touchedFields).includes(name) : false

    const isError = isStepError

    return (
        <>
            <div className="form__step">
                <div className="form__fields">
                    <CityField />

                    {(isTouched && isError) && <p className="warn warn--mob">{message}</p>}     
                </div>

                <button onClick={onSubmit} disabled={!isValid && isLoading} className="reg-btn reg-btn--free">
                    <Text content="Skip" />
                </button>           
                <button onClick={onSubmit} disabled={!isValid && isLoading} className="reg-btn">
                    <Text content="Next" />
                </button>
            </div>
        </>
    );
}

export default MobStep5;