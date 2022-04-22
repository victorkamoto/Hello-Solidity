# Hello-Solidity

A very simple demo of deploying and interacting with an [Ethereum](https://ethereum.org/en/) contract, through Solidity w/ [Hardhat](https://hardhat.org/). <br>
This demo uses the **Rinkeby Test Network**. <br>
Get fake Eth🤑 at [rinkebyfaucet](https://rinkebyfaucet.com/)

### Prerequisites

- A [MetaMask](https://metamask.io/) wallet.
- An [Alchemy](https://www.alchemy.com/) account.
- .env variables:
  - PRIVATE_KEY = your-metamask-private-key.
  - API_URL_KEY = your-alchemy-app-url.
  - API_KEY = your-alchemy-app-key.
  - CONTRACT_ADDRESS = address-returned-after-deploying.

### Install dependencies

- `npm install` - installs hardhart, hardhat-ethers & dotenv.

### Scripts

- `npm run deploy` - deploy contract. <br>
- `npm run interact` - update contract.
