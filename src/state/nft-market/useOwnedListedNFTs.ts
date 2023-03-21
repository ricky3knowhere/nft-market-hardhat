import { gql, useQuery } from "@apollo/client";
import userSigner from "state/signer";
import {
  GetOwnedListedNFTs,
  GetOwnedListedNFTsVariables,
} from "./__generated__/GetOwnedListedNFTs";
import { NFT_MARKET_ADDRESS } from "./config";
import { parseRawNFT } from "./helper";

const useOwnedListedNFTs = () => {
  const { address } = userSigner();
  const { data } = useQuery<GetOwnedListedNFTs, GetOwnedListedNFTsVariables>(
    GET_OWNED_LISTED_NFTS,
    { variables: { owner: address ?? "" }, skip: !address }
  );

  const ownedListedNFTs = data?.nfttransfers.map(parseRawNFT);

  return ownedListedNFTs;
};

const GET_OWNED_LISTED_NFTS = gql`
  query GetOwnedListedNFTs($owner: String!) {
    nfttransfers(
      where: {
        to: "${NFT_MARKET_ADDRESS}" 
        from: $owner 
      }
    ){
      id
      from
      to
      tokenURI
      price
      tokenID
    }
  }
`;

export default useOwnedListedNFTs;
