require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb frown skull traffic develop remember snake imitate prize flower two'; 
let testAccounts = [
"0xa0c2b90ee0d16ed957db31ead4ad4fa5b2008e568f253395cdbcccc6dbc13200",
"0x3f04098282fd34e03b11a02c870afd7446266f1988d44a51f58bc0500193600b",
"0x3bcf532f82b4d679620af0091966dee1ff4e59a4247e112071041b54605771f5",
"0x1e52cef85135dbf373b06b41b488313abdfceb3dcc67e25468de05e143fdc63f",
"0x904a09ba2da45c379bbd54338f18f6bbe139bc778e7526fe823a53b76de12dd3",
"0x3a8de5727e1fd6a8aa21cedf0e34ccf041a859536667ca8ddfb8c8024d35f1ca",
"0xf2c53936a133c1d08f7c7b4bfd9790d8e3522903c09de35e246fa868dc4e5535",
"0xb648bdc784b85880f3fe9e84ba52117ac6ab803c09dc0a7826e23c3004fa4f0c",
"0x80a109cc087ffe8c8792ff8d4e331c06660451a7f60465925035a500292c8d1a",
"0x131ebf0fe0cce753063506aee326540eaa50a15b69127881e8db62ac31470db6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

