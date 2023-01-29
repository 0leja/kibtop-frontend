import { createHeaders, instance } from "./Instance"
import FormDataCreator from "./tools/FormDataCreator"
import { serializeAdvertDatails } from "./tools/serializers/AdvertsSerializers"
import { serializeCreateAdvertData } from "./tools/serializers/CreateAdvertSerializers"

export const AddAdvertApi = {
    async createAdvert (data, category, lang) {

        
        const body = serializeCreateAdvertData(data, category, lang)
        return await instance.post(`${category}/create/`, body, {
            headers: await createHeaders()
        }).then(async (res) => {
            const {advertId} = serializeAdvertDatails(res.data, lang, category)
            const {photos} = data
            await photos.forEach(async img => {
                const formData = FormDataCreator({
                    [`${category}_full_upload`]: advertId,
                    uploads: img
                })

                await instance.post(`${category}/full_uploads/`, formData, {
                    headers: await createHeaders()
                })
            });
            

            return {id: advertId, category}
        }).then(advert => advert)
    }
}