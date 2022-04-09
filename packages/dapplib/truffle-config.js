require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe frown ski stone cruise remember common inner kite army gas'; 
let testAccounts = [
"0x8a43571c00483c641bdd59c3c73c8148d7f5f83d4c0b2ed5c3b31d3891ffb026",
"0x7592885b380a4fc615eee9cae972d24f2ebf697f7d64fa2b018d012dd3c5e49f",
"0xfad73cd137f51b4f3e6f67de5faeffce65f1985fd71c33329aa5eba612046ad6",
"0xac35481a95fef579431bae156f177630d404ed7f2f597c9b21bc5a67b708b1ce",
"0x8920ca5d5853a5e30f2c6a6b643350cedad63b209858369062785c22dd283b46",
"0x679f6ecc5011cc5a104ef7fe79d4be27947b4e22cc929c55d08324e7558cc9f6",
"0xb40da73babc915036bf03f0b4a7bd78a02569897f0eeff7b764167baea491743",
"0xb6964951732abb733d045b00c52ac08785d6ba7e1bba35bb0c82f9f9b350737b",
"0x8902e3a38faf9478c4ec4344f204914b4e225cdd5f33937590d7738394484fe3",
"0x322ddbd0e80c63c638b3a8551c9e46c295cb5b8e49c94f57b21274409bbbdda8"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

