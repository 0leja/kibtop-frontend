const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN

export const Cookies = {
    getCookies(cookieName) {
        try {
            if(!document) return
        } catch(err) {
            return
        }

        const cookies = document.cookie.split('; ').map(cookString => cookString.split('='))
        let data = {}
        cookies.forEach((cookie) => {
            data = {...data, ...{[cookie[0]]: cookie[1]} }
        })

        if(!!cookieName) {
            return data[cookieName]
        }

        return data
    },

    setCookie(cookieName, cookieVal) {
        try {
            if(!document) return
        } catch(err) {
            return
        }

        const DateNow = new Date()

        let Day = DateNow.getDate()
        let Month = DateNow.getMonth()
        let Year = DateNow.getFullYear()

        const expires = new Date(Year, Month, Day+10).toUTCString()

        document.cookie = `${cookieName}=${cookieVal}; domain=${DOMAIN}; expires=${expires}; path=/;`
    },

    delCookie(cookieName) {
        try {
            if(!document) return
        } catch(err) {
            return
        }


        const expires = new Date().toUTCString()
        

        document.cookie = `${cookieName}=${null}; domain=localhost; expires=${expires}; path=/;`
    }
}

export const getServerSideCookies = (cookies, cookieName) => {
    const cookiesArr = cookies.split('; ').map(cookString => cookString.split('='))
    let data = {}
    cookiesArr.forEach((cookie) => {
        data = {...data, ...{[cookie[0]]: cookie[1]} }
    })

    if(!!cookieName) {
        return data[cookieName]
    }
}

export const getStringCookies = req => req.rawHeaders[req.rawHeaders.findIndex(value =>  value === 'Cookie')+1]