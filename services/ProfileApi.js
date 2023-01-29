import { createHeaders, instance } from "./Instance"
import { Cookies } from "./tools/CookieController";
import FormDataCreator from "./tools/FormDataCreator";
import { serializeAdverts } from "./tools/serializers/AdvertsSerializers";
import { serializeUserData } from "./tools/serializers/UserSerializers";

export const ProfileApi = {
    async getUserData(access) {
        return await instance.get('auth/users/me/', {
            headers: await createHeaders(access)
        }).then(({data}) => {
                const user = serializeUserData(data)
                if(!(user.userId)) return null
                return user
            })
    },

    async editUserData (email, name, city, avatar) {
        const formData = !!avatar ? FormDataCreator({
            "first_name": name,
            "email": email,
            "addres": city || '',
            "upload_user": avatar || ''
        }) : {
            "first_name": name,
            "email": email,
            "addres": city || '',
            "upload_user": undefined
        }

        return await instance.put('auth/users/me/', formData, {
            headers: await createHeaders()
        })
    },

    async addUserPhone(phone) {
        return await instance.put('auth/users/me/', {phone}, {
            headers: await createHeaders()
        })
    },

    async getUserAdverts(userId, lang) {
        if(!userId) return null

        return await instance.get(`my_ads/?user_id=${userId}&lang=${lang}`)
            .then(async ({data}) => {
            
                return serializeAdverts(data, lang)
            }).catch(err => null)
    },

    async deletUserAccount(password) {
        return await instance.delete('auth/users/me', {
            headers: await createHeaders(),
            data: {
                current_password: password
            }
        }).then(res => {
            Cookies.delCookie('access')
            Cookies.delCookie('refresh')
        })
    }
}