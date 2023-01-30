import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Text from "../../../Elementes/Text/Text";
import RegFacebookButtonContainer from "./RegFacebookButton/RegFacebookButtonContainer";
import RegGoogleButtonContainer from "./RegGoogleButton/RegGoogleButtonContainer";

const AltReg = ({text = 'Sing in with Google or Facebook'}) => {
    const {isAuthed} = useSelector(state => state.auth)
    const {push} = useRouter()

    useEffect(() => {
        if(isAuthed) push('/')
    }, [isAuthed])

    return (
        <>
            <fieldset className="alt-reg">
                <legend className="alt-reg__legend"><Text content={text} /></legend>
                                
                <div className="alt-reg__btns">
                    <RegGoogleButtonContainer />
                    <RegFacebookButtonContainer />
                </div>
            </fieldset>
        </>
    );
}

export default AltReg;