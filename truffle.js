var Web3 = require('web3');

module.exports = {
networks: {
    supplier_node: {
      provider: () => {
        return new Web3.providers.HttpProvider(
          'https://u0uyaqc778-u0pm65wn7o-rpc.us-east-2.kaleido.io', 0,
          'u0ar41pspf', 'Mnf1BdsyIQ1boRe5z7ta7pSDTug0BWJj1yPi8idob-0');
      },
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 4500000
    },
  }
};
