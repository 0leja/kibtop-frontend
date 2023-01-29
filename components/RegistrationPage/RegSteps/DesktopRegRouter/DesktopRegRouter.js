import DeskGreetingContainer from "./DeskGreeting/DeskGreetingContainer";
import DeskRegFormContainer from "./DeskRegForm/DeskRegFormContainer";

const DesktopRegRouter = ({isRegistered}) => {
    return (
        <>
            {
                !isRegistered ? 
                            <>
                                <DeskRegFormContainer />
                            </> 
                            : 
                            <>
                                <DeskGreetingContainer />
                            </>
                    
            }
        </>
    );
}

export default DesktopRegRouter;