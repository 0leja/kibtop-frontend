export const serializeUserData = user => ({
    userId: user.id,
    name: user.first_name,
    email: user.email,
    city: user.addres,
    avatar: user.upload_user,
    phone: user.phone,
    deals: user.deals
})