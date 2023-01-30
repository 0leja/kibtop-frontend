import axios from "axios";
import jwtDecode from "jwt-decode";
import { instance } from "./Instance"
import { Cookies } from "./tools/CookieController";
import FormDataCreator from "./tools/FormDataCreator";

export const AuthApi = {
    async auth() {
        const { refresh } = Cookies.getCookies();
        return await instance.post('auth/jwt/refresh/',
            {
                "refresh": refresh || 'refresh'
            }).then(res => {
                const access = res.data.access

                const {user_id} = jwtDecode(access)
                Cookies.setCookie('access', access)

                return {userId: user_id}
            }, () => null).catch(err => null)
    },

    async getAccess(refresh) {        
        return await instance.post('auth/jwt/refresh/',
            {
                refresh
            },).then(res => {
                console.log(res);
                return res.data.access
            })
    },

    async registration(email, password1, password2, name, city, file) {
        const formData = !!file ? FormDataCreator({
            "first_name": name,
            "username": email.replace('@', '_'),
            "email": email,
            "password": password1,
            "re_password": password2,
            "addres": city || '',
            "upload_user": file || ''
        }) : {
            "first_name": name,
            "username": email.replace('@', '_'),
            "email": email,
            "password": password1,
            "re_password": password2,
            "addres": city || '',
            "upload_user": undefined
        }


        return await instance.post('auth/users/', formData)
            .then((res) => {
                return res.data
            })
    },

    async login(email, password) {

        const body = {
            "username": email,
            "password": password
        }
        
        return await instance.post('auth/jwt/create/', body)
            .then(({data}) => {

                const {access, refresh} = data

                Cookies.setCookie('access', access)
                Cookies.setCookie('refresh', refresh)

                return data
            })
    },

    async resendEmail(email) {
        return await instance.post('auth/users/resend_activation/', {email})
    },

    async googleLogin(auth_token) {
        return await instance.post('social_auth/google/', {auth_token})
            .then(({data}) => {
                const {access, refresh} = data

                Cookies.setCookie('access', access)
                Cookies.setCookie('refresh', refresh)

                return data
            })
    }
}

