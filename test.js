var should = require('should');
var lib = require('./index');
var apikey_cncert = "4iVc2EZnT5JURFHuiopLc7MP3tSs6zhXjhCxqe6xqKLG";
var sourceCode_cncert = "XXXX0000000000000";
var version = "1.5";
describe('idCardHash', function () {
    it('#1 idCard ok', function() {
        lib.idCardHash('440882199102100000', 'idCardHashAESKEY').should.be.equal('70f6cf9dc539d1e6c98151a8833e61827b7454cffb300d368309b184bae4ba6d')
    })
    it('#2 name ok', function() {
        lib.idCardHash('张三', 'idCardHashAESKEY').should.be.equal('0170fa69244f9b5e6162b5bcc274d5a5a6b2a5f45ea27db8e4b3fb2d4430adfe')
    })
})
describe('phoneHash', function () {
    it('#3 phoneHash ok', function() {
        this.timeout(6000);
        var data = lib.phoneHash('13800138000');
        data.should.match(/^\$2a\$12\$/);
    })
})
describe('batchNumber', function () {
    it('#4 batchNumber ok', function() {
        this.timeout(6000);
        var data = lib.batchNumber(sourceCode_cncert, "20190423", 1, 1556034975822);
        data.should.be.equal('XXXX0000000000000_201904231_1556034975822');
    })
})
describe('getApiKey', function () {
    it('#5 getApiKey ok', function() {
        this.timeout(6000);
        var data = lib.getApiKey(apikey_cncert, sourceCode_cncert, version);
        data.should.have.property('apiKey').which.is.a.String();
        data.should.have.property('timestamp').which.is.a.Number();
        data.should.have.property('nonce').which.is.a.String();
    })
})
describe('checkCode', function () {
    it('#6 checkCode ok', function() {
        this.timeout(6000);
        var data = lib.checkCode(1556033246000);
        data.should.be.equal('148bab67775fa7e0677215fb73f7aee7');
    })
})
describe('idCardInfo', function () {
    it('#7 idCardInfo ok', function() {
        this.timeout(6000);
        var data = lib.idCardInfo('513436200004126215');
        data.gender.should.be.equal('M');
        data.age.should.be.aboveOrEqual(19);
    })
})
describe('getIdcardAscription', function () {
    it('#8 getIdcardAscription ok', function() {
        this.timeout(6000);
        var data = lib.getIdcardAscription('513436200004126215');
        data.should.be.equal('513436');
        var data2 = lib.getIdcardAscription('110221199408764212');
        data2.should.be.equal('110114');
    })
})
describe('getPhoneAscription', function () {
    it('#9 getPhoneAscription ok', function() {
        this.timeout(6000);
        var data = lib.getPhoneAscription('13800138000');
        data.should.be.equal('110100');
    })
})
describe('getCompanyAscription', function () {
    it('#10 getCompanyAscription ok', function() {
        this.timeout(6000);
        var data = lib.getCompanyAscription('510109000525857');
        data.should.be.equal('5101090');
        var data2 = lib.getCompanyAscription('92510100MA61WJ3204');
        data2.should.be.equal('510100');
    })
})