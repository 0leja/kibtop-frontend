import CurrencySelectOption from "./CurrencySelectOption/CurrencySelectOption";

const CurrencySelect = ({closeCurrencySelect, onChangeCurrency, currency}) => {
    return (
        <>
           <div className="modal-select" onClick={closeCurrencySelect}>
                <CurrencySelectOption {...{onChangeCurrency, currency,
                                             value: '€', symbol: '€', text: 'Euro'}} />

                <CurrencySelectOption {...{onChangeCurrency, currency,
                                             value: '$', symbol: '$', text: 'Dollar'}} />

                <CurrencySelectOption {...{onChangeCurrency, currency,
                                             value: '₤', symbol: '₤', text: 'Lira'}} />
           </div>
           <div className="screen-dimmer" onClick={closeCurrencySelect} />
        </>
    );
}

export default CurrencySelect;