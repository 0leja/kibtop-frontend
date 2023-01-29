import { instance } from "./Instance";
import { serializeAdverts } from "./tools/serializers/AdvertsSerializers";



export const serializeGoods = (res, lang) => res.map((product) => ({
    id: product.id, 
    img: product.upload, 
    name: product[`title_${lang}`], 
    cost: product.price, 
    adress: product.address, 
    date: convertDate(product.updated_at || product.created_at)
}))

export const serializeSlider = (res, lang) => res.map((product) => ({
    id: product.id, 
    isDark: product.isDark, 
    img: product.img, 
    title: product[`title_${lang}`], 
    desc: product[`desc_${lang}`], 
    background: product.background
}))

export const GoodsApi = {
    async getRecommends(lang) {
        return await instance.get(`recommend/?limit=8&offset=1&lang=${lang}`)
                .then(({data}) => {       
                    const language = lang === 'default' ? 'en' : lang        
                    const goods = serializeAdverts(data, language)
                
                    return goods.splice(0, 8)
                }).catch(err => null)
    },

    async getNews(lang) {
        return await instance.get(`new/?limit=8&offset=1&lang=${lang}`)
                .then(({data}) => {
                    const goods = serializeAdverts(data, lang)
                    
                    return goods.splice(0, 8)
                }).catch(err => null)
    },

    async getSlider(lang) {
        return await instance.get(`stock/?lang=${lang}`)
                .then(({data}) => {
                    const res = data.results[lang]
                    
                    const slides = serializeSlider(res, lang)

                    return slides
                }).catch(err => null)
    },
}