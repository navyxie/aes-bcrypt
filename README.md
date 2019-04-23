## Usage

### idCardHash

```javascript
const AESBCRYPT = require('aes-bcrypt');
const hash = AESBCRYPT.idCardHash('idcard or name', 'aes key(string length must be 16)')
// hash => '70f6cf9dc539d1e6c98151a8833e61827b7454cffb300d368309b184bae4ba6d'
```

### phoneHash

```javascript
const AESBCRYPT = require('aes-bcrypt');
const phoneData = AESBCRYPT.phoneHash('idcard or name', 'aes key(string length must be 16)')
// phoneData => {salt: '$2a$12$t/OvASEQwGT.XPc89oOdLe', hash: '$2a$12$uTasXyBru23f5RA4cXbACeGgZvYXX59D5jw0FrsmjF5QBzeXmLT7y'}
```

### getApiKey

```javascript
const AESBCRYPT = require('aes-bcrypt');
const apikey_cncert = "4iVc2EZnT5JURFHuiopLc7MP3tSs6zhXjhCxqe6xqKLG";
const sourceCode_cncert = "XXXX0000000000000";
const version = "1.5";
const apiKey = AESBCRYPT.getApiKey(apikey_cncert, sourceCode_cncert, version)
// apiKey => {apiKey: '0e355a2d94eb5dc867d715abc610be54ff47da39a3fc164027824cd650e4d529',timestamp: 1556034955792,nonce: '3654a64c'}
```

### batchNumber

```javascript
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
const AESBCRYPT = require('aes-bcrypt');
const msgs = Date.now();
const checkCode = AESBCRYPT.checkCode(msgs)
// checkCode => '148bab67775fa7e0677215fb73f7aee7'
```
