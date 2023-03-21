import { gql, useQuery } from "@apollo/client";
import userSigner from "state/signer";
import {
  GetListedNFTs,
  GetListedNFTsVariables,
} from "./__generated__/GetListedNFTs";
import { parseRawNFT } from "./helper";
import { NFT_MARKET_ADDRESS } from "./config";

const useListedNFTs = () => {
  const { address } = userSigner();
  const { data } = useQuery<GetListedNFTs, GetListedNFTsVariables>(
    GET_LISTED_NFTS,
    { variables: { currentAddres: address ?? "" }, skip: !address }
  );

  const listedNFTs = data?.nfttransfers.map(parseRawNFT);

  return listedNFTs;
};

const GET_LISTED_NFTS = gql`
  query GetListedNFTs($currentAddres: String) {
    nfttransfers(where: { to: "${NFT_MARKET_ADDRESS}" from_not: $currentAddres }) {
      id
      from
      to
      tokenURI
      price
      tokenID
    }
  }
`;

export default useListedNFTs;
