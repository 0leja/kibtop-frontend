import { useLanguage } from "../../../../../../locales/hooks/useLanguage";


const TextField = ({type, placholder, children, isError}) => {
    const {t} = useLanguage()

    return (
        <>
            <div className={"form__field" (isError ? ' form__field--error' : '')}>
                { children }
                
                <input {...{type, placholder: t(placholder), field}} />
            </div>
        </>
    );
}

export default TextField;