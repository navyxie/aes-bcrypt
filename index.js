var aes = require('./aes');
var bcrypt = require('./bcrypt');
var base = require('./base');
module.exports = {
    idCardHash: aes.idCardHash,
    phoneHash: bcrypt.phoneHash,
    batchNumber: base.batchNumber,
    getApiKey: base.getApiKey,
    checkCode: base.checkCode
}