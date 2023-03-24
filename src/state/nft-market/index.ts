import { BigNumber, Contract } from "ethers";
import { CreationValues } from "modules/CreationPage/CreationForm";
import { FormData } from "nft.storage";
import userSigner from "state/signer";
import NFT_MARKET from "../../../artifacts/contracts/NFTMarket.sol/NFTMarket.json";
import { TransactionResponse } from "@ethersproject/providers";
import useOwnedNFTs from "./useOwnedNFTs";
import { NFT_MARKET_ADDRESS } from "./config";
import useOwnedListedNFTs from "./useOwnedListedNFTs";
import useListedNFTs from "./useListedNFTs";
import { NFT } from "./interfaces";
import { ethers } from "ethers";

const useNFTMarket = () => {
  const { signer } = userSigner();
  const nftMarket = new Contract(NFT_MARKET_ADDRESS, NFT_MARKET.abi, signer);

  const ownedNFTs = useOwnedNFTs();
  const ownedListedNFTs = useOwnedListedNFTs();
  const listedNFTs = useListedNFTs();

  const createNFT = async (values: CreationValues) => {
    try {
      const data = new FormData();

      data.append("name", values.name);
      data.append("description", values.description);
      data.append("image", values.image!);

      const response = await fetch("/api/nft-storage", {
        method: "POST",
        body: data,
      });

      if (response.status == 201) {
        const json = await response.json();
        console.log("tokenURI  : ", json.uri);

        const transaction: TransactionResponse = await nftMarket.createNFT(
          json.uri
        );
        await transaction.wait().then(() => window.location.replace("/owned"));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const listNFT = async (tokenID: string, price: BigNumber) => {
    const transaction: TransactionResponse = await nftMarket.listNFT(
      tokenID,
      price
    );
    await transaction.wait().then(() => window.location.replace("/owned"));
  };

  const cancelListing = async (tokenID: string) => {
    const transaction: TransactionResponse = await nftMarket.cancelListing(
      tokenID
    );
    await transaction.wait().then(() => window.location.replace("/owned"));
  };

  const buyNFT = async (nft: NFT) => {
    console.log("price", ethers.utils.parseEther(nft.price));

    const transaction: TransactionResponse = await nftMarket.buyNFT(nft.id, {
      value: ethers.utils.parseEther(nft.price),
    });
    await transaction.wait().then(() => window.location.replace("/owned"));
  };

  return {
    createNFT,
    listNFT,
    cancelListing,
    buyNFT,
    ownedNFTs,
    ownedListedNFTs,
    listedNFTs,
  };
};

export default useNFTMarket;
