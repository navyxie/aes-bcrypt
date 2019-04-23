var _ = require('lodash');
var crypto = require('crypto'); 
function batchNumber(sourceCode, tradeDate, seqNum, seqId) {
    if (_.isUndefined(sourceCode) || _.isUndefined(tradeDate) || _.isUndefined(seqNum) || _.isUndefined(seqId)) {
        return '';
    }
    var batch_num = sourceCode + '_' + tradeDate + seqNum + '_' + seqId;
    return batch_num;
}

 function getApiKey(apiKey, sourceCode, version) {
    if (_.isUndefined(apiKey) || _.isUndefined(sourceCode) || _.isUndefined(version)) {
        return '';
    }
    var vs = version * 100;
    var currentTime = Date.now();
    var numRand = _.random(100000000, 999999999);
    var nonce = numRand.toString(16);
    var versionHex =  '0x' + vs.toString(16);
    var str = sourceCode + versionHex + apiKey + currentTime + nonce;
    var hashstr = crypto.createHash('sha256').update(str).digest('hex');
    return {
        apiKey: hashstr,
        timestamp: currentTime,
        nonce: nonce
    }
 }
 
 function checkCode(msgs) {
    msgs = _.toString(msgs);
    var md5 = crypto.createHash('md5');
    return md5.update(msgs).digest('hex');
 }
 module.exports.batchNumber = batchNumber;
 module.exports.getApiKey = getApiKey;
 module.exports.checkCode = checkCode;