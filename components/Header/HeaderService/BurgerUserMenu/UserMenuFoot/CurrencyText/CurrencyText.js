const CurrencyText = ({text, currency}) => {
    return (
        <>
            <p className="button-text button-text--mobile"><span>{currency}</span>{text}</p>
        </>
    );
}

export default CurrencyText;