import { instance } from "./Instance"

const serializeCities = (cities, lang) => {
    return cities.map(city => ({
        id: city.id,
        cityId: city.id,
        city: city[`city_name_${lang}`]
    }))
}

const serializeCityById = (cityId, cities, lang) => {
    const allCity = serializeCities(cities, lang)
    return allCity.filter(city => city.cityId === cityId)[0]
}

export const LocationApi = {
    async getCities(lang) {
        return await instance.get(`city/`)
                .then(({data}) => {
                    return serializeCities(data, lang)
                }).catch(err => undefined)
    },

    async getCityById(cityId, lang) {
            return instance.get(`city/`)
                .then(({data}) => {
                    return serializeCityById(cityId, data, lang)
                }).catch(err => undefined)
    }
}