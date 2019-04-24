var locations = require('./location_data');
function getLocation (idcard) {
    idcard = idcard.toString();
    province = idcard.substr(0, 6);
    return locations[province];
}
function getCompanyAscription (code) {
    var city;
    var length = code.length;
    switch(length) {
    case 15:
        city = code.substr(0, 6);
        city = locations[city];
        if (!city) {
            city = code.substr(0, 7);
        }
        break;
    case 16:
    case 17:
    default:
        throw new Exception("企业三证合一或者工商注册号码错误！");
    case 18:
        city = code.substr(2, 6);
        city = locations[city];
        if (!city) {
            city = code.substr(2, 7);
        }
    }
    return city;
}
module.exports.getLocation = getLocation;
module.exports.getCompanyAscription = getCompanyAscription;