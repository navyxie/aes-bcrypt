var aes = require('./aes');
var bcrypt = require('./bcrypt');
var base = require('./base');
var idCard = require('./sex_age');
var location = require('./get_location');
var phoneArea = require('./phone_area');
module.exports = {
    idCardHash: aes.idCardHash,
    phoneHash: bcrypt.phoneHash,
    batchNumber: base.batchNumber,
    getApiKey: base.getApiKey,
    checkCode: base.checkCode,
    idCardInfo: idCard.idCardInfo,
    getIdcardAscription: location.getLocation,
    getPhoneAscription: phoneArea.getPhoneArea,
    getCompanyAscription: location.getCompanyAscription
}