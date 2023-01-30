import PageLink from "./PageLink";

const PageNav = ({pages}) => {
    return (
        <>
            <div className="cantainer">
                {
                    pages.map(page => <PageLink key={page.number} {...page} />)
                }
            </div>
        </>
    );
}

export default PageNav;