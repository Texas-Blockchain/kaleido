// File: `./migrations/2_deploy_simplestorage.js`

var SimpleStorage = artifacts.require("SimpleStorage");

module.exports = function(deployer) {
  // Pass 123 to the contract as the first constructor parameter
  deployer.deploy(SimpleStorage, 123)
};
