const {save_contract_address} = require("./z_save_contract_address_function.js");
const hre = require("hardhat");
async function main() {
// Thigs you need to do when deploying a contract

const Contract_name = "Greeter";     // 1   
const arrayOfParameters = 
    [
        'Hello world!',
    ];                                       
const Contract = await hre.ethers.getContractFactory(Contract_name);
const Contract_instance = await Contract.deploy
    (
        'Hello world!', 
    );
    //  DONT TOUCH ANYTHING DOWN HERE!
console.log("waiting for the contract to be deployed...");
await Contract_instance.deployed();

const information = {
  contractName: Contract_name,
  contractAddress: Contract_instance.address,
  network: Contract_instance.provider._network,
  singer_address: Contract_instance.signer.address
}
console.log("waiting for 10 blocks confirmation, this may take a while please wait...");
await Contract_instance.deployTransaction.wait(10);
console.log("wating for the contract to be verified...");
await save_contract_address(information, arrayOfParameters);
console.log("contract deployed and verified!");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });