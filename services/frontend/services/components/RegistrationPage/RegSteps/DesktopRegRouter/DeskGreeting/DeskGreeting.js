import Text from "../../../../Elementes/Text/Text";
import Access from "./Access/Access";
import ConfirmContainer from "./Confirm/ConfirmContainer";

const DeskGreeting = ({isConfirmed}) => {
    return (
        <>
            {
                isConfirmed ? <Access/> : <ConfirmContainer />
            }
        </>
    );
}

export default DeskGreeting;