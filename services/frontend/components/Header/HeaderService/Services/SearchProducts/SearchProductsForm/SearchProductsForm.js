import { useForm } from "react-hook-form";
import { useLanguage } from "../../../../../../locales/hooks/useLanguage";

const SearchProductsForm = () => {
    const {t} = useLanguage();
    const {handleSubmit, register} = useForm({ mode: 'onChange', reValidateMode: 'onChange' });

    const onSearchProductSubmit = data => {
        console.log(data.product);
    }

    return (
        <>
            <form className="search__form" onSubmit={handleSubmit(onSearchProductSubmit)}>
                <button className="search__submit-btn">

                    <svg className="loop-icon" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.7557 19.5775L15.7815 14.6033C17.137 12.9455 17.8035 10.8301 17.643 8.69464C17.4826 6.55919 16.5075 4.56711 14.9195 3.13044C13.3314 1.69376 11.252 0.922412 9.11119 0.975938C6.97039 1.02946 4.93207 1.90377 3.41783 3.41801C1.90359 4.93225 1.02928 6.97058 0.975755 9.11137C0.922229 11.2522 1.69358 13.3316 3.13025 14.9197C4.56693 16.5077 6.55901 17.4828 8.69445 17.6432C10.8299 17.8037 12.9453 17.1372 14.6032 15.7817L19.5773 20.7558C19.7345 20.9076 19.945 20.9916 20.1635 20.9897C20.382 20.9878 20.591 20.9002 20.7455 20.7457C20.9 20.5912 20.9876 20.3822 20.9895 20.1637C20.9914 19.9452 20.9075 19.7347 20.7557 19.5775ZM9.33315 16C8.01461 16 6.72568 15.609 5.62935 14.8765C4.53302 14.1439 3.67854 13.1027 3.17395 11.8846C2.66937 10.6664 2.53735 9.32594 2.79458 8.03273C3.05182 6.73953 3.68676 5.55164 4.61911 4.61929C5.55146 3.68694 6.73934 3.052 8.03255 2.79477C9.32576 2.53753 10.6662 2.66955 11.8844 3.17414C13.1025 3.67872 14.1437 4.53321 14.8763 5.62953C15.6088 6.72586 15.9998 8.01479 15.9998 9.33333C15.9978 11.1008 15.2948 12.7954 14.045 14.0452C12.7952 15.295 11.1007 15.998 9.33315 16Z" fill="#BDBDBD"/>
                    </svg>

                </button>


                <div className="search__field search__field--product">
                    <input  {...register('product', {required: true})}
                            placeholder={t("Search product")} 
                            type="text" />
                </div>
            </form>
        </>
    );
}

export default SearchProductsForm;