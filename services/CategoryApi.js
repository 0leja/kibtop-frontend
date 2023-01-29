import { instance } from "./Instance"
import { serializeCategory } from "./tools/serializers/AdvertsSerializers"

export const CategoryApi = {
    async getCategoryAdverts(category, lang, page) {
        return await instance.get(`${category}/?limit=8&offset=${page}`)
            .then(({data}) => {
                
                return serializeCategory(data.results, lang, category)
            }).catch(err => null)
    }
}
