import DeskGreeting from "./DesktopRegRouter/DeskGreeting/DeskGreeting";
import DeskGreetingContainer from "./DesktopRegRouter/DeskGreeting/DeskGreetingContainer";
import DeskRegFormContainer from "./DesktopRegRouter/DeskRegForm/DeskRegFormContainer";
import MobileRegFormContainer from "./MobileRegRouter/MobileRegForm/MobileRegFormContainer";


const RegSteps = ({isRegistered}) => {
    
    return (
        <>
            {
                !isRegistered ? <>
                                    <DeskRegFormContainer />
                                    <MobileRegFormContainer />
                                </>
                              : <DeskGreetingContainer />
            }
            
        </>
    );
}

export default RegSteps;