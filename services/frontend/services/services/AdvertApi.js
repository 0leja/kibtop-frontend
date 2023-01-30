import { instance } from "./Instance"
import { serializeAdvertDatails, serializeCategory } from "./tools/serializers/AdvertsSerializers";
import { serializeUserData } from "./tools/serializers/UserSerializers";

export const AdvertApi = {
    async getAdvertDatails(advertId, category, lang) {
        return await instance.get(`${category}/${advertId}/`)
            .then(({data}) => {

                return serializeAdvertDatails(data, lang, category)
            }).catch(err => null)
    },

    async getAdvertSeller(userId) {
        return await instance.get(`auth/users/${userId}/`)
            .then(({data}) => {
                return serializeUserData(data)
            }).catch(err => null)
    },

    async getSimilarAdverts(category, lang) {
        return await instance.get(`${category}/`)
            .then(({data}) => {
                
                return serializeCategory(data.results, lang, category).slice(0, 8)
            }).catch(err => null)
    }
}