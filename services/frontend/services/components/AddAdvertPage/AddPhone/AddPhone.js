import Link from "next/link";
import { useSwipe } from "../../AppHooks/useSwipe";
import Text from "../../Elementes/Text/Text";
import AddPhoneFormContainer from "./AddPhoneForm/AddPhoneFormContainer";
import AddPhoneSucces from "./AddPhoneForm/AddPhoneSucces";

const AddPhone = ({isOpen, closeAddPhoneModal, isSuccess}) => {
    const {swipe, handleClose} =  useSwipe({onClose: closeAddPhoneModal})

    return (
        <>
            {
                !!isOpen && <>
                    <div className="modal-screen modal-screen--favorites modal-screen--phone" {...swipe}>

                        <div className="favorites-warn modal-phone">
                            <button className="close-location" onClick={closeAddPhoneModal}>
                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.1682 0.606533L11.2132 8.56148L3.25825 0.606533C2.52602 -0.125695 1.33883 -0.125696 0.606602 0.606533C-0.125627 1.33876 -0.125627 2.52596 0.606602 3.25818L8.56155 11.2131L0.606602 19.1681C-0.125627 19.9003 -0.125627 21.0875 0.606602 21.8197C1.33883 22.552 2.52602 22.552 3.25825 21.8197L11.2132 13.8648L19.1682 21.8197C19.9004 22.552 21.0876 22.552 21.8198 21.8197C22.552 21.0875 22.552 19.9003 21.8198 19.1681L13.8649 11.2131L21.8198 3.25818C22.552 2.52595 22.552 1.33876 21.8198 0.606533C21.0876 -0.125695 19.9004 -0.125696 19.1682 0.606533Z" fill="#414042"/>
                                    </svg>
                            </button>
                            <div className="close-line close-line--top" onClick={handleClose} />

                            {
                                isSuccess ? <AddPhoneSucces {...{onLoad: () => {
                                    handleClose()
                                    closeAddPhoneModal()
                                }}} /> :<>
                                    <h4 className="title modal-title">Add your phone number</h4>
                                    <p className="greeting__text modal-text">In order for customers to contact you, we need your phone number</p>

                                    <AddPhoneFormContainer />
                                </>
                            }
                        </div>
                    </div>

                    <div className="screen-dimmer screen-dimmer--location" onClick={closeAddPhoneModal} />
                </>
            }
        </>
    );
}

export default AddPhone;