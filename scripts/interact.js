const { ethers, network } = require('hardhat');

const API_KEY = process.env.API_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const contract = require('../artifacts/contracts/HelloSolidity.sol/HelloSolidity.json');

const alchemyProvider = new ethers.providers.AlchemyProvider('rinkeby', API_KEY);

const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

const helloSolidityContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    const message = await helloSolidityContract.message();
    console.log("the message is: ", message);

    const tx = await helloSolidityContract.update("Good Bye, Solidity!");
    await tx.wait();

    const newMessage = await helloSolidityContract.message();
    console.log("the new message is: ", newMessage);
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});