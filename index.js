var aes = require('./aes')
var bcrypt = require('./bcrypt')
module.exports = {
    idCardHash: aes.idCardHash,
    phoneHash: bcrypt.phoneHash
}