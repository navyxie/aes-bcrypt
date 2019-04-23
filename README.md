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
