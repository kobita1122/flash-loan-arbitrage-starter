const hre = require("hardhat");

async function main() {
  // Replace with appropriate address from addresses.json
  const ADDRESS_PROVIDER = "0x012b64511C0D86027200b1BbD72239DfFA106ee8"; 
  
  const FlashLoan = await hre.ethers.getContractFactory("FlashLoan");
  const flashLoan = await FlashLoan.deploy(ADDRESS_PROVIDER);

  await flashLoan.waitForDeployment();

  console.log("FlashLoan Contract deployed to:", await flashLoan.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
