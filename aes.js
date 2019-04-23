var crypto = require('crypto');
function encrypt(plaintext,key,algorithm,iv,encode,digest){
    var encData = '';
    try{
            algorithm = algorithm || "aes-128-ecb";
            iv = iv || '';
            encode = encode || 'utf8';
            digest = digest || 'base64';
            var cipher = crypto.createCipheriv(algorithm, key, iv);
            cipher.setAutoPadding(true);
            encData = cipher.update(plaintext,encode,digest);
            encData += cipher.final(digest);
    }catch(e){
            console.error('aes encrypt data error : ',e);
    }
    return encData;
}
function decrypt(ciphertext,key,algorithm,iv,decode,digest){
    var rawdata = '';
    try{
            algorithm = algorithm || "aes-128-ecb";
            iv = iv || '';
            decode = decode || 'hex';
            digest = digest || 'utf8';
            ciphertext = new Buffer(ciphertext,'base64');
            var decipher = crypto.createDecipheriv(algorithm, key, iv);
            rawdata = decipher.update(ciphertext,decode,digest);
            rawdata += decipher.final(digest);
    }catch(e){
            console.error('aes decrypt data error : ',e);
    }
    return rawdata;
}
function idCardHash(name, key) {
    var aesBase64Str = encrypt(name, key, 'aes-128-ecb');
    return crypto.createHash('sha256').update(aesBase64Str).digest('hex');
}
module.exports.encrypt = encrypt;
module.exports.decrypt = decrypt;
module.exports.idCardHash = idCardHash;