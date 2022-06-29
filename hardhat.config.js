const { task } = require("hardhat/config");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");
require('dotenv').config()

// CONFIG FRON ENV VARIABLES
const ACCOUNT_ONE_PRVKEY=process.env.ACCOUNT_ONE_PRVKEY;
const ALCHEMY_APIKEY_RINKEBY=process.env.ALCHEMY_APIKEY_RINKEBY;
const ALCHEMY_APIKEY_MAINNET=process.env.ALCHEMY_APIKEY_MAINNET;
const ALCHEMY_APIKEY_MUMBIE=process.env.ALCHEMY_APIKEY_MUMBIE;
const ALCHEMY_APIKEY_POLYGON=process.env.ALCHEMY_APIKEY_POLYGON;
const ETHERSCAN_APIKEY=process.env.ETHERSCAN_APIKEY;
const POLYGONSCAN_APIKEY=process.env.POLYGONSCAN_APIKEY;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "hardhat",
  networks: {
      hardhat: {
      },
      rinkeby: {
          url: ALCHEMY_APIKEY_RINKEBY,
          accounts: [ACCOUNT_ONE_PRVKEY]
      },
      maticmum: {
          url: ALCHEMY_APIKEY_MUMBIE,
          accounts: [ACCOUNT_ONE_PRVKEY]
      },
      mainnet: {
          url: ALCHEMY_APIKEY_MAINNET,
          accounts: [ACCOUNT_ONE_PRVKEY]
      },
      polygon: {
          url: ALCHEMY_APIKEY_POLYGON,
          accounts: [ACCOUNT_ONE_PRVKEY]
      }
  },
  etherscan: {
      apiKey: {
          rinkeby: ETHERSCAN_APIKEY,
          mainnet: ETHERSCAN_APIKEY,
          polygonMumbai: POLYGONSCAN_APIKEY,
          polygon: POLYGONSCAN_APIKEY
      }
  },
};
