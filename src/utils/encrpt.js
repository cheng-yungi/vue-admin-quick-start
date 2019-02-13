const crypto = require('crypto')

const speakeasy = require('speakeasy')

function googleVerification (sercetKey, validData) {
  return speakeasy.totp.verify({
    secret: sercetKey, // secret of the logged in user
    encoding: 'base32',
    token: validData
  })
}
function aesEncrypt (data, key) {
  const iv = ''
  const clearEncoding = 'utf8'
  const cipherEncoding = 'base64'
  const cipherChunks = []
  const cipher = crypto.createCipheriv('aes-128-ecb', key, iv)
  cipher.setAutoPadding(true)

  cipherChunks.push(cipher.update(data, clearEncoding, cipherEncoding))
  cipherChunks.push(cipher.final(cipherEncoding))
  return cipherChunks.join('')
}
function aesDecrypt (data, key) {
  const iv = ''
  const clearEncoding = 'utf8'
  const cipherEncoding = 'base64'
  const cipherChunks = []
  const decipher = crypto.createDecipheriv('aes-128-ecb', key, iv)
  decipher.setAutoPadding(true)

  cipherChunks.push(decipher.update(data, cipherEncoding, clearEncoding))
  cipherChunks.push(decipher.final(clearEncoding))

  return cipherChunks.join('')
}

module.exports = {
  aesEncrypt,
  aesDecrypt,
  googleVerification
}
