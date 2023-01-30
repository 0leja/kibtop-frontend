import Text from "../../../../../Elementes/Text/Text";

const Confirm = ({onClick, disabled}) => {
    return (
        <>
           <article className="greeting greeting--confirm">
                <h2 className="reg-title">
                    <span className="reg-title__line"><Text content="Create new" /></span>
                    <span className="reg-title__line"><Text content="account" /></span>
                </h2>
                <div className="greeting__desc">
                    <div className="greeting__content">
                        <h3 className="greeting__title"><Text content="Almost ready" /></h3>
                        <p className="greeting__text">
                            <Text 
                                content="We have sent an email to your email address" 
                            />
                            {" "}
                            <Text 
                                content="Please check this and confirm your email address" 
                            />
                        </p>
                    </div>
                </div>
                        
                <button  {...{disabled, onClick}} className="reg-btn reg-btn--confirm"><Text content="Resend" /></button>
            </article>
        </>
    );
}

export default Confirm;