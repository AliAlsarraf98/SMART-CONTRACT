# Smart contract (setup)

Smart contract setup is going to show you all the steps needed to code and deploy your first smart contract

---

## Installation

- First you need to install [Node.js](https://nodejs.org/en/).
- Then go to your file directery where you want your project to be in and run `npm init`.
- Then install [hardhat](https://hardhat.org/) using `npm install --save-dev hardhat`.

---

## Start your first project

- Run `npx hardhat` and choose the first option **> Create a JavaScript project**.
- Choose the file path you want your project in
- Select **YES** for adding `.gitignore`
- Add all these Dependencies by running the following command
  `npm i @nomiclabs/hardhat-ethers @nomiclabs/hardhat-etherscan @nomiclabs/hardhat-waffle chai ethereum-waffle ethers @nomiclabs/hardhat-web3 dotenv web3`

---

## Project config

- Create an account in [Alchemy](https://www.alchemy.com/)
- Select Ethereum Ecosystem
- Create your first app by choosing you app name and add \_{netowrk name to it}
- For example, my app name is BloodChain -> `BloodCahin_mainnet`
- Then create another one but with a testnet so -> `BloodChain_rinkeby`
- Create an account in [Etherscan](https://etherscan.io/register) if you want to deploy in ethereum network
- Create an account in [Polygonscan](https://polygonscan.com/register) if you want to deploy in matic/(polygon) network
- Add a `.env` file
- Add these in the `.env` file

```
ACCOUNT_ONE_PRVKEY=YOUR_PRIVATE_KEY_HERE
ALCHEMY_APIKEY_RINKEBY=YOUR_ALCHEMY_PROJECT_FOR_RINKEBY_URL_HERE
ALCHEMY_APIKEY_MAINNET=YOUR_ALCHEMY_PROJECT_FOR_MAINNET_URL_HERE
ALCHEMY_APIKEY_MUMBAI=YOUR_ALCHEMY_PROJECT_FOR_MUMBAI_URL_HERE
ALCHEMY_APIKEY_POLYGON=YOUR_ALCHEMY_PROJECT_FOR_POLYGONMAINNET_URL_HERE
ETHERSCAN_APIKEY=YOUR_ETHERSCAN_API_KEY_HERE
POLYGONSCAN_APIKEY=YOUR_POLYGON_API_KEY_HERE
```

- Edit your `hardhat.config.js` file to add these require's at the top of your file and import your API KEYs from the `.env` file

```
const { task } = require("hardhat/config");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");
require('dotenv').config()

// CONFIG FRON ENV VARIABLES
const ACCOUNT_ONE_PRVKEY=process.env.ACCOUNT_ONE_PRVKEY;
const ALCHEMY_APIKEY_RINKEBY=process.env.ALCHEMY_APIKEY_RINKEBY;
const ALCHEMY_APIKEY_MAINNET=process.env.ALCHEMY_APIKEY_MAINNET;
const ALCHEMY_APIKEY_MUMBAI=process.env.ALCHEMY_APIKEY_MUMBAI;
const ALCHEMY_APIKEY_POLYGON=process.env.ALCHEMY_APIKEY_POLYGON;

const ETHERSCAN_APIKEY=process.env.ETHERSCAN_APIKEY;
const POLYGONSCAN_APIKEY=process.env.POLYGONSCAN_APIKEY;
```

- Edit the `module.exports` to include the following code.

```
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
        },
        rinkeby: {
            url: ALCHEMY_APIKEY_RINKEBY,
            accounts: [ACCOUNT_ONE_PRVKEY]
        },
        maticmum: {
            url: ALCHEMY_APIKEY_MUMBAI,
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

```

---

## TEST YOUR SETUP

- Run this command and make sure it pass so you know that eveything now is working
  `npx hardhat test`

## TO DEPLOY TO TESTNET

- Run this command
  `npx hardhat --netwrok [NETWORK-NAME-HERE] run scripts/[SCRIPT-FILE-NAME-HERE]`
  for example in my case it is
  `npx hardhat --network rinkeby run scripts/2_deploy_Greeter.sol.js`
