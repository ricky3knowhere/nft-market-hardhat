import { ethers } from "ethers";
import { NFT } from "./interfaces";
import { GetOwnedNFTs_nfttransfers } from "./__generated__/GetOwnedNFTs";

export const parseRawNFT = (row: GetOwnedNFTs_nfttransfers): NFT => {
  return {
    id: row.id,
    owner: row.price == "0" ? row.to : row.from,
    price: row.price == "0" ? "0" : ethers.utils.formatEther(row.price),
    tokenURI: row.tokenURI,
  };
};
