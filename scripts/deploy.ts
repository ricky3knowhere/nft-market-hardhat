import { ethers } from "hardhat";

async function main() {
  const NFTMarket = await ethers.getContractFactory("NFTMarket");
  const nftMarket = await NFTMarket.deploy();
  await nftMarket.deployed();

  console.log("Deployed to : ", nftMarket.address);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
