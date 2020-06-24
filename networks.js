var HDWalletProvider = require("truffle-hdwallet-provider");
var acctPvtKey = require('./private/key.json').acctPvtKey;

module.exports = {
  networks: {
    development: {
      protocol: 'http',
      host: 'localhost',
      port: 8545,
      gas: 5000000,
      gasPrice: 5e9,
      networkId: '*',
    },
    
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(acctPvtKey, "https://rinkeby.infura.io/v3/46958796623e4b1a878099f386fa3c8a")
      },
      networkId: 4,
      gas: 4500000,
      gasPrice: 10000000000
    }
  },
};
