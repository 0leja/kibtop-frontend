import Link from "next/link";

const LogoIcon = () => {
    return (
        <>
            <Link href='/' className="logo-icon">kib<span className="green">t</span>
                                            <span className="yellow">o</span>
                                            <span className="blue">p</span>
            </Link>
        </>
    );
}

export default LogoIcon;