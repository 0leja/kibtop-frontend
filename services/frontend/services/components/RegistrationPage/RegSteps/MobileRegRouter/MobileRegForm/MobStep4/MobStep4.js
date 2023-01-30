import Text from "../../../../../Elementes/Text/Text";
import CityField from "../../../DesktopRegRouter/DeskRegForm/Fields/CityField";
import MobFileField from "../../../DesktopRegRouter/DeskRegForm/Fields/MobFileField";
import NextMobRegBtnContainer from "../NextMobRegBtn/NextMobRegBtnContainer";
import SkipMobRegBtnContainer from "../SkipMobRegBtn/SkipMobRegBtnContainer";

const MobStep4 = ({errors, name, message, touchedFields}) => {
    const isStepError = !!errors ? (!!errors.file) : false

    const isTouched = !!touchedFields ? Object.keys(touchedFields).includes(name) || name === 'file' : false

    const isError = isStepError

    return (
        <>
            <div className="form__step">
                <div className="form__fields">
                    <MobFileField />

                    {(isTouched && isError) && <p className="warn warn--mob">{message}</p>}     
                </div>

                <SkipMobRegBtnContainer {...{isError}} />            
                <NextMobRegBtnContainer {...{isError}} />
            </div>
        </>
    );
}

export default MobStep4;