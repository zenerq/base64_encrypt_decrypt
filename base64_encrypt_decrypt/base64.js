const {argv} = require('process');
const base64 = require('base64-node');
const colors = require('colors');

console.log(colors.magenta('-----------------------------------'))
console.log(colors.rainbow('BASE64 ENCRYPTOR/DECRYPTOR BY zener'))
console.log(colors.magenta('-----------------------------------'))

argv['node','index.js', "code"];
let encrypted = base64.encode(argv[2]);
let decrypted = base64.decode(argv[2]);

if (argv[2].includes('=')){
    console.log(`${colors.red('Your text is successfuly decrypted ')}🔓 : ${decrypted.bgRed} `);
}else{
    console.log(`${colors.green('Your text is successfuly encrypted ')}🔐 : ${encrypted.bgGreen} `);
}


