import LocationSelectOption from "./LocationSelectOption";
import LocationSelectOptionMobile from "./LocationSelectOptionMobile";

const LocationSelectOptions = ({cities, chooseLocation, chooseSetLocation}) => {
    return (
        <>
            <div className="locatin-select__list">
                {
                    cities?.map(city => <LocationSelectOption {...city} chooseLocation={chooseLocation} key={city.id} />)
                }
            </div>

            <div className="locatin-select__list locatin-select__list--mobile">
                {
                    cities?.map(city => <LocationSelectOptionMobile {...city} chooseLocation={chooseSetLocation} key={city.id} />)
                }
            </div>
        </>
    );
}

export default LocationSelectOptions;