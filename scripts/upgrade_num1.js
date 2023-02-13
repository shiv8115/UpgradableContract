const { ethers, upgrades } = require("hardhat");

async function main() {
  
  const NUM2 = await ethers.getContractFactory("NUM2");

  // Deploying the new NUM2 contract
  console.log("NUM1 is upgrading....");
  await upgrades.upgradeProxy('0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0', NUM2);
  console.log("NUM1 is upgraded to NUM2");
  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
