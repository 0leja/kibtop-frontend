import { instance } from "./Instance"

export const RecoveryApi = {
    async confirmReset(new_password, re_new_password, uid, token) {
        return await instance.post('auth/users/reset_password_confirm/', {
            new_password, re_new_password, uid, token
        })
            .then(res => res.data)
    },

    async confirmEmail(uid, token) {
        return await instance.post('auth/users/activation/', {
            uid, token
        })
    },

    async sendRecoveryLink(email) {
        return await instance.post('auth/users/reset_password/', {
            email
        })
    }
}