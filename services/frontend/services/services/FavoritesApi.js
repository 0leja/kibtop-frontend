import { createHeaders, instance } from "./Instance"
import { serializeFavorites, serializeFullAdvertData } from "./tools/serializers/AdvertsSerializers"

export const FavoritesApi = {
    async addFavoriteAdvert(id, category, userId) {
        return await instance.post(`${category}/favourites/`, {
            [`${category}_full`]: id,
            user: userId
        }, {
            headers: await createHeaders()
        })
    },

    async deleteFavoriteAdvert(favoriteId, category) {
        return await instance.delete(`${category}/favourites/${favoriteId}/`, {
            headers: await createHeaders()
        })
    },


    async getUserFavoritesAdverts(userId, lang) {
        const categories = ['avto', 'children', 'electronics', 'fashion', 'house_garden', 'realty', 'services', 'work']
        let favorites = []

        for (let i = 0; i < categories.length; i++) {
            const category = categories[i];
            await instance.get(`${category}/favourites/?user=${userId}`, {
                headers: await createHeaders()
            }).then(({data}) => {
                const sortedFavorites = serializeFavorites(data, category)

                favorites = [...favorites, ...sortedFavorites] 
            })
        }

        let favoriteAdverts = []
        
        for (let i = 0; i < favorites.length; i++) {
            const {id, category, advertId, userId} = favorites[i];
            await instance.get(`${category}/${advertId}/`)
                .then(({data}) => {
                    favoriteAdverts = [...favoriteAdverts, serializeFullAdvertData(data, lang, category)]
                }).catch(() => null)
        }
        
        return favoriteAdverts
    },

    async getUserFavorites(userId) {
        if(!userId) return
        const categories = ['avto', 'children', 'electronics', 'fashion', 'house_garden', 'realty', 'services', 'work']
        let favorites = []

        for (let i = 0; i < categories.length; i++) {
            const category = categories[i];
            await instance.get(`${category}/favourites/?user=${userId}`, {
                headers: await createHeaders()
            }).then(({data}) => {
                    const sortedFavorites = serializeFavorites(data, category)

                    favorites = [...favorites, ...sortedFavorites] 
                })
        }


        return favorites
    }
}