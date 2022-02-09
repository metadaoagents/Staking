require('babel-register')
require('babel-polyfill')
const HDWalletProvider = require('@truffle/hdwallet-provider')

const privateKeys= ['0x7b66e00669fc0933aacb']


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    live: {
      provider: () => {
        return new HDWalletProvider(privateKeys, 
          'https://kovan.infura.io/v3/29e350a5c5b349f2b9809e8f864b8d0b'
          )
      },
      network_id: '*',
      // ~~Necessary due to https://github.com/trufflesuite/truffle/issues/1971~~
      // Necessary due to https://github.com/trufflesuite/truffle/issues/3008
      skipDryRun: true,
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "petersburg",
      version: "0.6.6"
    }
  }
}
