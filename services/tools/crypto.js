const crypto = require('crypto')

const algorithm = 'aes-256-ctr'
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3'

export const encrypt = text => {
  const iv = crypto.randomBytes(16)

  const cipher = crypto.createCipheriv(algorithm, secretKey, iv)

  const encrypted = Buffer.concat([cipher.update(text), cipher.final()])

  return {
    iv: iv.toString('hex'),
    content: encrypted.toString('hex')
  }
}

export const decrypt = hash => {
  const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'))

  const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()])

  return decrpyted.toString()
}

export const setHashedUserData = userData => {
    const userDataJson = JSON.stringify(userData)
    const hash = encrypt(userDataJson)
    const hashJson = JSON.stringify(hash)

    localStorage.setItem('activation', hashJson)
}

export const getUserData = () => {
    const hash = JSON.parse(localStorage.getItem('activation'))
    const userDataJson = decrypt(hash)
    const userData = JSON.parse(userDataJson)

    return userData
}

export const clearUserData = () => {
    localStorage.removeItem('activation')
}
