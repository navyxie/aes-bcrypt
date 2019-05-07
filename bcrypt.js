var crypto = require('crypto');
var bcrypt = require('bcrypt');
var Promise = require('bluebird');
function phoneHash(phone, async) {
    var saltRounds = 12;
    var minor = 'a';
    if (async) {
        return phoneHashASync(saltRounds, minor)
    }
    return phoneHashSync(saltRounds, minor)
    function phoneHashSync (saltRounds, minor) {
        var salt = bcrypt.genSaltSync(saltRounds, minor)
        var hashstr = crypto.createHash('sha256').update(phone + salt).digest('base64');
        var salt2 = bcrypt.genSaltSync(saltRounds, minor)
        var hash = bcrypt.hashSync(hashstr, salt2);
        return {salt: salt, hash: hash}
    }
    function  phoneHashASync(saltRounds, minor) {
        return new Promise(function (resolve, reject) {
            bcrypt.genSalt(saltRounds, minor, function(err,salt) {
                if (!err) {
                    return bcrypt.genSalt(saltRounds, minor, function(err, salt2) {
                        if (!err) {
                            var hashstr = crypto.createHash('sha256').update(phone + salt).digest('base64');
                            return bcrypt.hash(hashstr, salt2, function(err, hash) {
                                if (!err) {
                                    return resolve({salt: salt, hash: hash})
                                }
                                reject(err)
                            });
                        }
                        reject(err)
                    })
                }
                reject(err)
            })
        })
    }
}
module.exports.phoneHash = phoneHash