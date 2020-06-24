const web3 = require('./web3');

const EventTesting = require('./build/contracts/EventTesting.json');

const contractAddress = "0x3cbBdaE54C1449F63dDF6F25EE0f537AbDBfD11A";

const contInstance = new web3.eth.Contract(
    EventTesting.abi,
    contractAddress
);

module.exports = contInstance;