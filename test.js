var should = require('should');
var lib = require('./index')
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