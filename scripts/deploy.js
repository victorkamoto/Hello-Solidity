const { ethers } = require("hardhat");

async function main() {
    const HelloWorld = await ethers.getContractFactory("HelloSolidity");
    const hw = await HelloWorld.deploy("Hello Solidity!");

    console.log("Contract deployed at", hw.address);
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
}
);
