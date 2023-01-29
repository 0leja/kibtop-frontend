import DeskGreetingContainer from "../DesktopRegRouter/DeskGreeting/DeskGreetingContainer";
import MobileRegFormContainer from "./MobileRegForm/MobileRegFormContainer";

const MobileRegRouter = ({isRegistered}) => {
    return (
        <>
            {
                !isRegistered ? 
                        <>
                            <MobileRegFormContainer />
                        </>
                        :
                        <>
                            <DeskGreetingContainer />
                        </>
            }
        </>
    );
}

export default MobileRegRouter;