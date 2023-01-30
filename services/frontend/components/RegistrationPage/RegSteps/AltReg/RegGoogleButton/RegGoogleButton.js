const RegGoogleButton = ({onSigInClick}) => {
    return (
        <>
            <a className="alt-reg__btn alt-reg__btn--google" onClick={onSigInClick}>
                <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_508_4324)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M29.4 15.3409C29.4 14.2773 29.3045 13.2546 29.1273 12.2727H15V18.075H23.0727C22.725 19.95 21.6682 21.5387 20.0795 22.6023V26.3659H24.9273C27.7636 23.7546 29.4 19.9091 29.4 15.3409Z" fill="#4285F4"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M15 30C19.05 30 22.4455 28.6568 24.9273 26.3659L20.0795 22.6023C18.7364 23.5023 17.0182 24.0341 15 24.0341C11.0932 24.0341 7.78637 21.3954 6.60682 17.85H1.59546V21.7363C4.06364 26.6386 9.13637 30 15 30Z" fill="#34A853"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.60682 17.85C6.30682 16.95 6.13636 15.9886 6.13636 15C6.13636 14.0114 6.30682 13.05 6.60682 12.15V8.26365H1.59545C0.579545 10.2886 0 12.5796 0 15C0 17.4205 0.579545 19.7114 1.59545 21.7364L6.60682 17.85Z" fill="#FBBC05"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M15 5.96591C17.2023 5.96591 19.1796 6.72273 20.7341 8.20909L25.0364 3.90682C22.4386 1.48636 19.0432 0 15 0C9.13637 0 4.06364 3.36136 1.59546 8.26364L6.60682 12.15C7.78637 8.60455 11.0932 5.96591 15 5.96591Z" fill="#EA4335"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_508_4324">
                            <rect width="30" height="30" rx="6" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>

                Google
            </a>
        </>
    );
}

export default RegGoogleButton;