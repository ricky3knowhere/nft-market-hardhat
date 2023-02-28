import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const SEPOLIA_URL = process.env.SEPOLIA_URL as string;
const PRIVATE_KEY = process.env.PRIVATE_KEY as string;

console.log("SU : ", SEPOLIA_URL);

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    sepolia: { url: SEPOLIA_URL, accounts: [PRIVATE_KEY] },
  },
};

export default config;
