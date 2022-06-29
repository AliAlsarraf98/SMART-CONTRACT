const execSync = require('child_process').execSync;
exports.save_contract_address = async ({contractName, contractAddress, network, singer_address}, arrayOfParameters)=> {
    if(network.name !== 'unknown'){
        try {
            execSync(`npx hardhat verify --network ${network.name} ${contractAddress} ${[...arrayOfParameters].join(' ')}`, { encoding: 'utf-8' });  // the default is 'buffer'
        } catch (error) {console.log(error);
    }
    }else console.log("VERIFYING SCRIPT CAN NOT BE RUN ON UNKNOWN NETWORK");

    const THEPATH = await hre.artifacts.formArtifactPathFromFullyQualifiedName(`contracts/${contractName}.sol:${contractName}`);
    const Information =  await hre.artifacts.readArtifact(contractName);
    Information.owner = singer_address;
    Information.contract_address = contractAddress;
    Information.network_info = network;
    await hre.artifacts.saveArtifactAndDebugFile(Information,THEPATH );
    console.log(`  
        =====================INFORMATION==========================

        [1]- This contract was deployes by: [${singer_address}], 
        [2]- and the contract address is: [${contractAddress}],
        [3]- and the network is: [Name: ${network.name}, ID: ${network.chainId}]
        [4]- and the contract address was saved in: [${THEPATH}]

        ==========================================================
    `)
}
