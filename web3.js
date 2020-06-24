
    const Web3 = require('web3');
    const RINKEBY_WSS = "wss://rinkeby.infura.io/ws/v3/46958796623e4b1a878099f386fa3c8a";
    var provider = new Web3.providers.WebsocketProvider(RINKEBY_WSS);
    var web3 = new Web3(provider);

    module.exports = web3;





// const Web3 =  require('web3');
// const acctPvtKey = require('./private/key.json').acctPvtKey;

// let web3;

// //need to check because of next js

// if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
//     //we are in browser and metamask is running
//     //injected by metamask
//     // console.log("in browser");
//     web3 = new Web3(window.web3.currentProvider);
    
// } else {
//     // we are in server OR we don't have metamask in browser
//     // console.log("in server");
//     const provider = new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/46958796623e4b1a878099f386fa3c8a");

//     web3 = new Web3(provider);
//     const account = web3.eth.accounts.privateKeyToAccount('0x' + acctPvtKey);
//     web3.eth.accounts.wallet.add(account);    
//     // web3.eth.defaultAccount = account.address;
//     // console.log(web3.eth.getAccounts());
// }

// module.exports = web3;