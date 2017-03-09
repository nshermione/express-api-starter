const CryptoJS = require("crypto-js");
const uuidV4 = require('uuid/v4');

export class SecureService {

    generateSecret() {
        return uuidV4();
    }

    encrypt(text, secret) {
        return CryptoJS.AES.encrypt(text, secret).toString();
    }

    decrypt(ciphertext, secret) {
        let bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), secret);
        return bytes.toString(CryptoJS.enc.Utf8);
    }
}