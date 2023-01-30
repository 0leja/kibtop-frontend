import { signIn, useSession } from "next-auth/react";
import RegFacebookButton from "./RegFacebookButton";

const RegFacebookButtonContainer = () => {
    const {data} = useSession()
    
    const onSigInClick = () => signIn('facebook')

    return <RegFacebookButton {...{onSigInClick}} />;
}

export default RegFacebookButtonContainer;