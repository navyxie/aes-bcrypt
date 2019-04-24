## Usage

### idCardHash

```javascript
// 生成身份证号 或者 姓名 Hash 值
const AESBCRYPT = require('aes-bcrypt');
const hash = AESBCRYPT.idCardHash('idcard or name', 'aes key(string length must be 16)')
// hash => '70f6cf9dc539d1e6c98151a8833e61827b7454cffb300d368309b184bae4ba6d'
```

### phoneHash

```javascript
// 生成手机号 Hash 值和盐值
const AESBCRYPT = require('aes-bcrypt');
const phoneData = AESBCRYPT.phoneHash('idcard or name', 'aes key(string length must be 16)')
// phoneData => {salt: '$2a$12$t/OvASEQwGT.XPc89oOdLe', hash: '$2a$12$uTasXyBru23f5RA4cXbACeGgZvYXX59D5jw0FrsmjF5QBzeXmLT7y'}
```

### getApiKey

```javascript
// 接口参数 apiKey 实例化方法
const AESBCRYPT = require('aes-bcrypt');
const apikey_cncert = "4iVc2EZnT5JURFHuiopLc7MP3tSs6zhXjhCxqe6xqKLG";
const sourceCode_cncert = "XXXX0000000000000";
const version = "1.5";
const apiKey = AESBCRYPT.getApiKey(apikey_cncert, sourceCode_cncert, version)
// apiKey => {apiKey: '0e355a2d94eb5dc867d715abc610be54ff47da39a3fc164027824cd650e4d529',timestamp: 1556034955792,nonce: '3654a64c'}
```

### batchNumber

```javascript
// 生成批次号
const AESBCRYPT = require('aes-bcrypt');
const sourceCode_cncert = "XXXX0000000000000";
const tradeDate = "20190423";
const seqNum = 1;
const seqId = Date.now();
const batchNum = AESBCRYPT.batchNumber(sourceCode_cncert, tradeDate, seqNum, seqId)
// batchNum => 'XXXX0000000000000_201904231_1556034975822'
```

### checkCode

```javascript
// 生成验证码
const AESBCRYPT = require('aes-bcrypt');
const msgs = Date.now();
const checkCode = AESBCRYPT.checkCode(msgs)
// checkCode => '148bab67775fa7e0677215fb73f7aee7'
```

### idCardInfo

```javascript
// 根据身份证号获取用户性别和年龄
const AESBCRYPT = require('aes-bcrypt');
const info = AESBCRYPT.idCardInfo('身份证号码')
// info => {
    // valid: true,//身份证是否合法的标志
	// gender: 'M',//M->男，F->女
	// birthday: 19910210,//
	// province: {
	// 	code: '440000',//行政区域编码
	// 	text: '广东省' 
	// },
	// city: { 
	// 	code: '440800', 
	// 	text: '湛江市' 
	// },
	// area: { 
	// 	code: '440882', 
	// 	text: '雷州市' 
	// },
	// cardType: 1,//身份证类型，1->大陆，2->港澳台
	// cardText: '大陆',
	// address: '广东省湛江市雷州市',
	// age:24,
    // constellation:'水瓶'//星座 
// }
```

### getIdcardAscription

```javascript
// 根据身份证号获取身份所属地
const AESBCRYPT = require('aes-bcrypt');
const code = AESBCRYPT.getIdcardAscription('身份证号码')
// code => '110114'
```

### getPhoneAscription

```javascript
// 获取手机号码所属地
const AESBCRYPT = require('aes-bcrypt');
const code = AESBCRYPT.getPhoneAscription('13800138000')
// code => '110100'
```

### getCompanyAscription

```javascript
// 当用户类型为企业时根据三证合一号获取企业注册地址
const AESBCRYPT = require('aes-bcrypt');
const code = AESBCRYPT.getCompanyAscription('企业组织代码/三证合一代码')
// code => '510100'
```

