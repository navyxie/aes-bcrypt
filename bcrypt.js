var crypto = require('crypto');
var bcrypt = require('bcrypt');
function phoneHash(phone) {
    var saltRounds = 12;
    var minor = 'a';
    var salt = bcrypt.genSaltSync(saltRounds, minor)
    var hashstr = crypto.createHash('sha256').update(phone + salt).digest('base64');
    var salt2 = bcrypt.genSaltSync(saltRounds, minor)
    var hash = bcrypt.hashSync(hashstr, salt2);
    return {salt: salt, hash: hash}
}
module.exports.phoneHash = phoneHash