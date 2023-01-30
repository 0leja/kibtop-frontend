import { instance } from "./Instance"
import { serializeCategory } from "./tools/serializers/AdvertsSerializers"

const limit = 8

export const CategoryApi = {
    async getCategoryAdverts(category, lang, page) {
        return await instance.get(`${category}/?limit=${limit}&offset=${page}`)
            .then(({data}) => {
                const adverts = serializeCategory(data.results, lang, category)

                const count = (data.overall_total/3) / limit
                let pages = []
                for (let i = 0; i < count; i++) {
                    pages.push({page: i, number: i+1})
                }

                return {adverts, pages}
            }).catch(err => ({adverts: null, pages: []}))
    }
}
